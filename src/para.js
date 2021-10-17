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
export const N_NOISE = 2; // How many lines/band will be random noise on normal trials
export const P_CATCH = 0.1; // Proportion of catch trials
export const N_PRACTICE_TRIALS = 4; // How many trials total of friend + foe
export const N_TRIALS = 4; // How many trials total of high/lowlight (not including catch trials)

export const PRACTICE_SIGNATURES = gen.signatures(N_LINES);
export const VESSEL_SIGNATURES = gen.signatures(N_LINES);

// Which keypress should respond to which vessel
export const VESSEL_MAP = {
    '0': 'a', // Friend
    '1': 'd', // Foe
   '-1': 's'  // Neither
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

export const RUN_ORDER = [
    gen.run_order(N_PRACTICE_TRIALS, P_CATCH, N_NOISE, PRACTICE_SIGNATURES, HIGHLIGHT),
    gen.run_order(N_TRIALS, P_CATCH, N_NOISE, VESSEL_SIGNATURES, HIGHLIGHT),
    gen.run_order(N_TRIALS, P_CATCH, N_NOISE, VESSEL_SIGNATURES, HIGHLIGHT),
    gen.run_order(N_TRIALS, P_CATCH, N_NOISE, VESSEL_SIGNATURES, HIGHLIGHT),
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


export const practice_instructions = `
The practice phase is now beginning. You will be asked to classify an unknown vessel with the assistance of a lookup table on the right.

Use the 'A' key to respond friend,
Use the 'D' key to respond foe,
use the 'S' key to repond neither.

Press any key to begin.
`;

export const practice_debrief = `
Thank you, practice is now complete!

Press any key to continue.
`;

export const baseline_instructions = `
In this phase, you will be asked to classify an unknown vessel with the assistance of a lookup table on the right.

Use the 'A' key to respond friend,
Use the 'D' key to respond foe,
use the 'S' key to repond neither.

Press any key to begin.
`;

export const baseline_debrief = `
Thank you, this phase is now complete!

Press any key to continue.
`;

export const training_instructions = `
In this phase, you will be given assistance in classifying the vessel with two different tools.

Use the 'A' key to respond friend,
Use the 'D' key to respond foe,
use the 'S' key to repond neither.

Press any key to begin.
`;

export const training_debrief = `
Thank you, this phase is now complete!

Press any key to continue.
`;

export const test_instructions = `
In this phase, you will not be given any assistance. Please try your best.

Use the 'A' key to respond friend,
Use the 'D' key to respond foe,
use the 'S' key to repond neither.

Press any key to begin.
`;

export const test_debrief = `
Thank you, this phase is now complete!

Press any key to continue.
`;

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
