import * as jl from "./johnlib.js"
import { util } from "../nolib/psychojs-2021.2.3.js";

// Returns a fn which may be used by binary search to tell whether lines are too close
function float_compare_mindistance(min = 0.1/3) {
    return function(f0, f1) {
        let diff =  f0 - f1;
        if (Math.abs(diff) < min) {
            return 0;
        } else {
            return diff;
        }
    };
}

// Choose lines to be vessel signatures at top and bottom
// Ensure one line for each quadrant
// TODO: Ensure set distance from other lines
function signatures(n_lines, mindist) {
    let sorted = []; // sorted list of all lines
    let vessel_signatures = [
        // T    B
        [ [ ], [ ] ], // friend lines
        [ [ ], [ ] ]  // foe lines
    ];
    let distfn = float_compare_mindistance(mindist);
    for (var i = 0; i < n_lines; i++) {
        for (var sig = 0; sig < 2; sig++) {
            // friend or foe...
            var left = (sig ? jl.getvalright(i, n_lines) : jl.getvalleft(i, n_lines))  * 0.95 + 0.025;
            var right = (sig ? jl.getvalright(i+1, n_lines) : jl.getvalleft(i+1, n_lines))  * 0.95 + 0.025;
            var spacing = right - left;
            for (var band = 0; band < 2; band++) {
                let canary = 0;
                while(true) {
                    canary++;
                    if (canary > 1000) {
                        return false;
                    }
                    let val = left + (Math.random() * spacing);
                    // run binary search
                    let bs = jl.binary_search(sorted, val, distfn);
                    if (bs >= 0) {
                        continue; // value is either already used, or too close to an existing value
                    } else {
                        // add to sorted array
                        let idx = (-bs) - 1;
                        sorted.splice(idx, 0, val);
                        // push into vessel signatures
                        vessel_signatures[sig][band].push((val).toFixed(3));
                        break;
                    }
                }
            }
        }
    }
    // Perform swap of the most extreme values, trying to make it harder
    for (var i = 0; i < 2; i++) {
        let tmp = vessel_signatures[0][i][0];
        vessel_signatures[0][i][0] = vessel_signatures[1][i][n_lines - 1];
        vessel_signatures[1][i][n_lines - 1] = tmp;
        vessel_signatures[0][i] = vessel_signatures[0][i].sort(function(a, b){return a-b});
        vessel_signatures[1][i] = vessel_signatures[1][i].sort(function(a, b){return a-b});
    }

    let noise = [];
    // Create pool of noise lines obeying the same rules
    let canary = 0;
    while(noise.length < n_lines * 4) {
        canary++;
        if (canary > 1000) {
            break;
        }
        // This simply puts the random noise on the SAME side that the signature is biased towards (updated)
        var left = 0;
        var spacing = 1;
        let val = (left + (Math.random() * spacing)) * 0.95 + 0.025;
        // run binary search
        let bs = jl.binary_search(sorted, val, distfn);
        if (bs >= 0) {
            continue; // value is either already used, or too close to an existing value
        } else {
            noise.push((val).toFixed(3));
            // add to sorted array
            //let idx = (-bs) - 1;
            //sorted.splice(idx, 0, val);
        }
    }
    if (noise.length < n_lines * 4) return false; // bail out if not enough noise lines
    noise = util.sort(noise);

    return [noise, vessel_signatures];
};

// Given signatures, generate an appropriate pool of random noise obeying the same rules

// IN PROGRESS: Better run order construction
function run_order(n_trials, n_lines, n_noise, p_catch, signatures, noise, supported) {
    
    // Calculate number of possible noise combinations, forms the basis of a block
    const n_combinations = jl.factorial(n_lines) / (jl.factorial(n_noise) * jl.factorial(n_lines - n_noise))

    // Calculate how many catch trials need to be added
    // (In order to make at least p_catch of total trials catch)
    // We're doing it on a per-block basis here so results could vary a bit from per-phase
    const n_catch_trials = Math.ceil((p_catch * n_combinations) / (1 - p_catch));

    // Define bands and vessels to make calculations clear
    const N_BANDS = 2;
    const N_VESSELS = 2; 
    
    // Calculate block size based upon all of the above
    const block_size = N_BANDS * N_VESSELS * (n_catch_trials + n_combinations);

    // Create trial combinations, we can then randomize within each block

    // First off, get every noise location combination
    let combinations_short = jl.combinations(n_lines, n_noise);
    
    // Next, let's create the run order.
    // We'll need these combinations for both vessels, then catch trials
    // Then continue until we're > n_trials, and trim from there if needed.
    // We can fill in the real / random noise lines afterwards, they've already been generated.
    
    let blocks = []
    // Continue until we have a sufficient number of trials
    while (block_size * blocks.length < n_trials) {
        let run_order = [];
        for (var i = 0; i < combinations_short.length; i++) {
            var is_signal = jl.repeat(1, n_lines);
            for (var idx = 0; idx < combinations_short[i].length; idx++) {
                is_signal[combinations_short[i][idx]] = 0;
            }
            // Push both vessel types and bands
            for(var band = 0; band < 2; band++) {
                for(var vessel = 0; vessel < 2; vessel++) {
                    var lines = Array.from(signatures[vessel][band]);
                    // Overkill for one line but if we scale beyond one this'll still work
                    var noise_shuffle = util.shuffle(noise);
                    for(var j = 0; j < is_signal.length; j++) {
                        if (is_signal[j] == 0) {
                            lines[j] = noise_shuffle[j];
                        }
                    }
                    run_order.push({vessel: vessel, active_band: band, lines: lines, is_signal: is_signal, supported_pos: supported, catch_trial: false}); // friend
                }
            }
        }
        // Add catch trials per block
        for (var i = 0; i < n_catch_trials; i ++) {
            var vessel = Math.round(Math.random());
            var band = Math.round(Math.random());
            var lines = Array.from(signatures[vessel][band]);
            run_order.push({vessel: vessel, active_band: band, lines: lines, is_signal: jl.repeat(1, n_lines), supported_pos: supported, catch_trial: true});
        }
        // Shuffle within block
        run_order = util.shuffle(run_order);
        blocks.push(run_order)
    }
    // May need to trim last block
    if (block_size * blocks.length > n_trials) {
        // need to remove diff trials from last block
        var diff = block_size * blocks.length - n_trials;
        blocks[blocks.length-1].splice(block_size-(diff), block_size-1);
    }

    // Un-nest arrays
    return blocks.flat();

}


// Generate text for the lookup table
let lookup_text = function(signatures, ranges) {
    let lookup_text = [ [], [] ];
    for (var vessel = 0; vessel < signatures.length; vessel++) {
        for (var band = 0; band < signatures[vessel].length; band++) {
            let fix = band ? 0 : 2;
            let t = vessel ? "Foe\n(Press L):\n" : "Friend\n(Press A):\n";
            for (var i = 0; i < signatures[vessel][band].length; i++) {
                let x = signatures[vessel][band][i];
                let val = (ranges[band][1] - ranges[band][0]) * x + ranges[band][0];
                t += val.toFixed(fix) + " Hz\n";
                lookup_text[vessel][band] = t;
            }    
        }
    }
    return lookup_text;
}

export {
    signatures,
    run_order,
    lookup_text
};
