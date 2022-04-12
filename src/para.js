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
export const N_PRACTICE_TRIALS = 8; // How many trials total of friend + foe
export const N_TRIALS = 20; // Trials per increment

export const N_SUPPORTED_TRIALS = N_TRIALS / 2; // how many trials per support

export const MIN_DISTANCE = 0.1/3; // Minimum distance between lines

export const DEBUG_ENABLED = false; // Show condition in practice at start

// Which keypress should respond to which vessel
export const RESPONSE_MAP = {
    '0': 'a', // Visible
    '1': 'l', // Not visible
};

// Time to respond in seconds
export const DURATION_MAP = {
    '0': 20,
    '1': 20,
    '2': 20,
    '3': 20,
};

// Decide which will be supported / unsupported
export const SUPPORTED = Math.round(Math.random());
export const UNSUPPORTED = 1 - SUPPORTED;

export const PHASES = [
    {phase: 0}, // Blue
    {phase: 1}, // Red
];

var from = 0.1;
var to = 0.2;
var increment = 0.01;

export const RUN_ORDER = [
    gen.calibrations(from, to, increment, N_TRIALS),
    gen.calibrations(from, to, increment, N_TRIALS)
];
console.log(RUN_ORDER)

// This script is initialized before expInfo object anyway,
// So will have to get URL parameters directly like so
var url = new URL(window.location.href);
var c = url.searchParams.get("condition"); // integer from 0 to 2

// URL parameters for different fading styles
export const CONDITIONS = [
    "TYPEA",
    "TYPEB",
]
export const CONDITION = CONDITIONS[c];

// This was previously used as within-subjects conditions, now it is support/unsupport
export const SUPPORT_STATUS = [
    {supported: 0},
    {supported: 1}
]

// Hard code a single position
export const LINE_POSITIONS = [0.21,0.29,0.63,0.84];
export const ACTIVE_BAND = 0;

export const INITIAL_INTENSITY = 1.0;
export const INCREMENT = 0.03;

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

const keypress_text = `
Use the 'A' key to respond visible,
Use the 'L' key to respond not visible.
`;
