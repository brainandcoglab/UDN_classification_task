/*
 *  para.js  
 *  Experimental parameters. 
 */

// Random util functions that don't fit elsewhere
import * as jl from "./johnlib.js"
// Generative functions (trials orders, line positions, etc)
import * as gen from "./generate.js"
// Band objects
import * as band from "./band.js"

// Top = 0, Bottom = 1
// Friend = 0, Foe = 1, Neither = -1

export const N_LINES = 4; // How many lines/band define a ship
export const N_NOISE = 1; // How many lines/band will be random noise on normal trials
export const P_CATCH = 0.0; // Proportion of catch trials
export const N_PRACTICE_TRIALS = 8; // How many trials total of friend + foe
export const N_TRIALS = 5; // How many trials total of high/lowlight (not including catch trials)

export const N_SUPPORTED_TRIALS = N_TRIALS / 2; // how many trials per support

export const MIN_DISTANCE = 0.1/6; // Minimum distance between lines

// Warn if parameters likely to cause failure
var exp = Math.floor(0.9 / MIN_DISTANCE) + 1;
var req = ((N_LINES * 4) + 10) * 2;
if (exp < req) console.log('Signature generation failure likely: suggest you decrease mindist');

export const DEBUG_ENABLED = false; // Show condition in practice at start

// Which keypress should respond to which vessel
export const VESSEL_MAP = {
    '0': 'a', // Friend
    '1': 'l', // Foe
};

// Time to respond in seconds
export const DURATION_MAP = {
    '0': 20,
    '1': 10,
    '2': 10,
    '3': 10,
};

// Decide which will be supported / unsupported
export const SUPPORTED = Math.round(Math.random());
export const UNSUPPORTED = 1 - SUPPORTED;

export const PHASES = [
    {phase: 0}, // Practice
    {phase: 1}, // Baseline
    {phase: 2}, // Training
    {phase: 3}  // Test
];

// This script is initialized before expInfo object anyway,
// So will have to get URL parameters directly like so
var url = new URL(window.location.href);
var c = url.searchParams.get("condition"); // integer from 0 to 2

// Need to ensure that this works too
export const CONDITIONS = [
    "HIGHLIGHT",
    "LOWLIGHT",
    "FADING",
]
export const CONDITION = CONDITIONS[c];

// This was previously used as within-subjects conditions, now it is support/unsupport
export const SUPPORT_STATUS = [
    {supported: 0},
    {supported: 1}
]

const errstring = 'Experiment run order generation failed, please contact experimenter!';
let practice_signatures;
let practice_run_order = false;
for (var canary = 0; !practice_run_order; canary++) {
    if (canary > 10000) {
        alert(errstring)
        throw errstring;
    }
    let practice_lines = gen.signatures(N_LINES, MIN_DISTANCE);
    if (!practice_lines) {
        continue;
    }
    let practice_noise = practice_lines[0];
    practice_signatures = practice_lines[1];
    practice_run_order = gen.run_order(N_PRACTICE_TRIALS, N_LINES, N_NOISE, P_CATCH, practice_signatures, practice_noise, SUPPORTED);
}
export const PRACTICE_SIGNATURES = practice_signatures;

let signatures;
let baseline_run_order = false;
let training_run_order = false;
let test_run_order = false;
for (var canary = 0; !baseline_run_order || !training_run_order || !test_run_order; canary++) {
    if (canary > 10000) {
        alert(errstring)
        throw errstring;
    }
    let lines = gen.signatures(N_LINES, MIN_DISTANCE);
    if (!lines) {
        continue;
    }
    signatures = lines[1];
    let noise = lines[0];
    baseline_run_order = gen.run_order(N_TRIALS, N_LINES, N_NOISE, P_CATCH, signatures, noise, SUPPORTED);
    training_run_order = gen.run_order(N_TRIALS, N_LINES, N_NOISE, P_CATCH, signatures, noise, SUPPORTED);
    test_run_order = gen.run_order(N_TRIALS, N_LINES, N_NOISE, P_CATCH, signatures, noise, SUPPORTED);
}
export const VESSEL_SIGNATURES = signatures;

export const RUN_ORDER = [
    practice_run_order,
    baseline_run_order,
    training_run_order,
    test_run_order
];

// Set apparent range on bands
export const BAND_RANGES = [
    [1,10],
    [100, 1000]
];


// Number of major ticks on the x axis
export const NTICKS_TOP = 10;
export const NTICKS_BOTTOM = 10;

// Width of the bands in "height units" (1.0 = screen height)
export const WIDTH = 1.0;

// Generate text to be shown on lookup table
export const PRACTICE_LOOKUP_TEXT = gen.lookup_text(PRACTICE_SIGNATURES, BAND_RANGES);
export const LOOKUP_TEXT = gen.lookup_text(VESSEL_SIGNATURES, BAND_RANGES);

const keypress_text = `
Use the 'A' key to respond friend,
Use the 'L' key to respond foe.
`;

const debrief_text = 'Please select along each scale below to indicate your assessment of where the task you just performed falls along the continuum between the two descriptions.';


export const practice_instructions = `
You're now ready to begin the practice phase. You will be asked to classify an unknown vessel with the assistance of lookup tables to the left and right of the console.
Some signals may not be associated with any ship classification, so be careful.
Feedback will be provided on whether your classification was correct.

` + keypress_text + `Press the 'space' key to begin.`;

export const practice_debrief = `Great work, the practice phase is now complete!

` + debrief_text;

export const baseline_instructions = `
In the next phase, you will again be asked to classify an unknown vessel with the assistance of lookup tables to the left and right of the console.
The friend and foe signals in this phase are different from the practice phase.
Feedback will be provided on whether your classification was correct. 

` + keypress_text + `Press the 'space' key to begin.`;


export const baseline_debrief = `Great work, this phase is now complete!

` + debrief_text;

export const training_instructions = `
In the next phase, the lookup tables will be removed. However, you will be given assistance in classifying the vessel with two different tools.
One tool will highlight signals associated with foe ships in red, and friend ships in blue. The other tool will dim all signals that are not associated with friend or foe ships.

` + keypress_text + `Press the 'space' key to begin.`;


export const training_debrief = `Great work, this phase is now complete!

` + debrief_text;

export const test_instructions = `
Well done, there is now only one final phase remaining. In this phase, you will not be given any assistance to classify vessels, or any feedback as to whether you were correct.
Please try your best.

` + keypress_text + `Press the 'space' key to begin.`;


export const test_debrief = `Great work, this phase is now complete!

` + debrief_text;

export const instructions = [
    practice_instructions,
    baseline_instructions,
    training_instructions,
    test_instructions
];

export const debrief = [
    practice_debrief,
    baseline_debrief,
    training_debrief,
    test_debrief
];
