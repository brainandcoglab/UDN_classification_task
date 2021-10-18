import * as jl from "./johnlib.js"
import { util } from "../lib/psychojs-2021.2.3.js";

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

// Decide on which lines should be present on a given trial.
let trial_lines = function(vessel, band, signatures, n_noise, sorted, distfn) {
    let lines = []; // Actual line positions
    let is_signal = []; // Whether they're signal (1) or not (0)

    let n_lines = signatures[0][0].length; // get from signatures
    let line_choices = jl.arange(n_lines);

    // copy sorted list so we can add to it
    let sorted_clone = Object.assign([], sorted);
    let spacing = 1 / n_lines;
    // Initially, we fill in random lines (according to spacing rules)
    for (var i = 0; i < n_lines; i++) {
        is_signal.push(0);
    }
    for (var i = 0; i < n_lines; i++) {

        while(true) {
            let val = (i * spacing) + (Math.random() * spacing);
            // run binary search
            let bs = jl.binary_search(sorted_clone, val, distfn);
            if (bs >= 0) {
                continue; // value is either already used, or too close to an existing value
            } else {
                // add to sorted array
                let idx = (-bs) - 1;
                sorted_clone.splice(idx, 0, val);
                // push into vessel signatures
                lines.push((val).toFixed(3));
                break;
            }
        }

    }
    
    // Now, if we are presenting signal, randomly select which lines we want
    // We still preserve the quadrant spacing rule
    if (vessel >= 0) {
        // Random shuffle to select (N_LINES - N_NOISE) lines
        let signals = util.shuffle(line_choices);
        for(var i = 0; i < n_lines - n_noise; i++) {
                let l = signals[i]; // index of chosen signal line
                // insert in appropriate location
                lines[l] = signatures[vessel][band][l]; 
                is_signal[l] = 1;
         }
    }
    return [lines, is_signal];
}

// Choose lines to be vessel signatures at top and bottom
// Ensure one line for each quadrant
// TODO: Ensure set distance from other lines
let signatures = function(n_lines, mindist) {
    let sorted = []; // sorted list of all lines
    let spacing = 1 / n_lines;
    let vessel_signatures = [
        // T    B
        [ [ ], [ ] ], // friend lines
        [ [ ], [ ] ]  // foe lines
    ];
    let distfn = float_compare_mindistance(mindist);
    for (var i = 0; i < n_lines; i++) {
        for (var sig = 0; sig < 2; sig++) {
            for (var band = 0; band < 2; band++) {
                while(true) {
                    let val = (i * spacing) + (Math.random() * spacing);
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
    return [sorted, vessel_signatures];
};

// Generate run order
let run_order = function(n_ff_trials, p_catch, n_noise, signatures, sorted, mindist, highlight) {
    // Calculate how many catch trials need to be added
    // (In order to make at least p_catch of total trials catch)
    var n_catch_trials = Math.ceil((p_catch * n_ff_trials) / (1 - p_catch));

    var run_order = [];
    for (var i = 0; i < n_ff_trials/2; i ++) {
        run_order.push({vessel: 0, highlight_pos: highlight}); // friend
        run_order.push({vessel: 1, highlight_pos: highlight}); // foe
    }
    for (var i = 0; i < n_catch_trials; i ++) {
        run_order.push({vessel: -1, highlight_pos: highlight}); // catch
    }
    // Shuffle
    run_order = util.shuffle(run_order);

    let distfn = float_compare_mindistance(mindist);

    // Decide whether we start on top or bottom band
    var startBand = Math.round(Math.random());
    for (var i = 0; i < run_order.length; i++) {
        let active_band = (startBand+i) % 2;
        run_order[i]['active_band'] = active_band;
        let vessel = run_order[i]['vessel'];
        var lines_trial = trial_lines(vessel, active_band, signatures, n_noise, sorted, distfn);
        run_order[i]['lines'] = lines_trial[0];
        run_order[i]['is_signal'] = lines_trial[1];
    }
    // Shuffle again (could change loop option in psychopy but easier doing this)
    run_order = util.shuffle(run_order);
    return run_order;
};


// Generate text for the lookup table
let lookup_text = function(signatures, ranges) {
    let lookup_text = [ [], [] ];
    for (var vessel = 0; vessel < signatures.length; vessel++) {
        for (var band = 0; band < signatures[vessel].length; band++) {
            let fix = band ? 0 : 2;
            let t = vessel ? "Foe frequencies:\n" : "Friend frequencies:\n";
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
    trial_lines,
    signatures,
    run_order,
    lookup_text
};
