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
export const P_CATCH = 0.1; // Proportion of catch trials
export const N_PRACTICE_TRIALS = 10; // How many trials total of friend + foe
export const N_TRIALS = 30; // How many trials total of high/lowlight (not including catch trials)

export const MIN_DISTANCE = 0.1/3; // Minimum distance between lines

// Which keypress should respond to which vessel
export const VESSEL_MAP = {
    '0': 'a', // Friend
    '1': 'l', // Foe
   '-1': 'space'  // Neither
};

// Decide which will be highlight / lowlight
export const HIGHLIGHT = Math.round(Math.random());
export const LOWLIGHT = 1 - HIGHLIGHT;

export const PHASES = [
    {phase: 0}, // Practice
    {phase: 1}, // Baseline
    {phase: 2}, // Training
    {phase: 3}  // Test
];

const errstring = 'Experiment run order generation failed, please contact experimenter!';
let practice_signatures;
let practice_run_order = false;
for (var canary = 0; !practice_run_order; canary++) {
    if (canary > 1000) {
        alert(errstring)
        throw errstring;
    }
    let practice_sort_sig = gen.signatures(N_LINES, MIN_DISTANCE);
    if (!practice_sort_sig) {
        continue;
    }
    practice_signatures = practice_sort_sig[1];
    let practice_sorted_lines = practice_sort_sig[0];  // sorted list of all lines (practice)
    practice_run_order = gen.run_order(N_PRACTICE_TRIALS, P_CATCH, N_NOISE, practice_signatures, practice_sorted_lines, MIN_DISTANCE, HIGHLIGHT);
}
export const PRACTICE_SIGNATURES = practice_signatures;

let signatures;
let baseline_run_order = false;
let training_run_order = false;
let test_run_order = false;
for (var canary = 0; !baseline_run_order || !training_run_order || !test_run_order; canary++) {
    if (canary > 1000) {
        alert(errstring)
        throw errstring;
    }
    let sort_sig = gen.signatures(N_LINES, MIN_DISTANCE);
    if (!sort_sig) {
        continue;
    }
    signatures = sort_sig[1];
    let sorted_lines = sort_sig[0];
    baseline_run_order = gen.run_order(N_TRIALS, P_CATCH, N_NOISE, signatures, sorted_lines, MIN_DISTANCE, HIGHLIGHT);
    training_run_order = gen.run_order(N_TRIALS, P_CATCH, N_NOISE, signatures, sorted_lines, MIN_DISTANCE, HIGHLIGHT);
    test_run_order = gen.run_order(N_TRIALS, P_CATCH, N_NOISE, signatures, sorted_lines, MIN_DISTANCE, HIGHLIGHT);
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
Use the 'L' key to respond foe,
use the 'Space' key to repond neither.
`;

const debrief_text = `
Thank you, practice is now complete!

Press any key to continue.
`;

export const practice_instructions = `
The practice phase is now beginning. You will be asked to classify an unknown vessel with the assistance of a lookup table on the right.
` + keypress_text + 'Press any key to begin.';

export const practice_debrief = debrief_text;

export const baseline_instructions = `
In this phase, you will be asked to classify an unknown vessel with the assistance of a lookup table on the right.
` + keypress_text + 'Press any key to begin.';


export const baseline_debrief = debrief_text;

export const training_instructions = `
In this phase, you will be given assistance in classifying the vessel with two different tools.
` + keypress_text + 'Press any key to begin.';


export const training_debrief = debrief_text;

export const test_instructions = `
In this phase, you will not be given any assistance. Please try your best.
` + keypress_text + 'Press any key to begin.';


export const test_debrief = debrief_text;

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
