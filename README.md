# UDN Submarine Study 1: Online Version

# Notes on JS imports

You've got to use the .mjs file for ES6-style imports.
Applying custom shaders to stuff is super easy:

    band._pixi.filters = [filter];
    band._needUpdate = true;

# Really useful PsychoJS doc

https://docs.google.com/document/d/13jp0QAqQeFlYSjeZS0fDInvgaDzBXjGQNe4VNKbbNHQ/edit

# Performance notes

A little more stable on chrome.
[Should be okay though](https://www.researchgate.net/publication/343081686_The_timing_mega-study_comparing_a_range_of_experiment_generators_both_lab-based_and_online)

# TODO

## Important 

* [x] Basic visualisation
* [x] Set all parameters at start
* [x] Save data in output file
* [x] Show only relevant lookup table info
* [x] Give feedback on correctness
* [x] Adjusted range on x axis
* [x] Add to git repo
* [x] Highlight / Lowlight visualisation
* [x] Instructions for each phase
* [x] No feedback in test phase
* [x] Ensure no-webgl fallback works correctly (it does, no noise or anything though)
* [x] Make sure that lookup table is visible for all resolutions?
* [x] Set minimum distance of lines from other lines
* [x] Have friend / foe trials bias towards left or right, with noise appearing on the opposite side
* [x] Change keypress to A/L and keep instructions on screen (also split lookup left and right)
* [ ] Trialing: is this too easy? Log-bias seems to be very easy.
* [X] Better instructions
* [ ] Breaks?
* [ ] Lines apparently not visible on Mac, some kinda transparency issue? Hopefully not GL problem..
* [ ] Better highlight colour
* [X] Trial timeout
* [ ] Enforce full-screen for final release
* [ ] Should output warning if unsupported resolution (also if webgl unavailable)

## Desired

* [x] Some nice rivets and stuff
* [X] Fix width so that resize is easier
* [ ] Check that band space available is possible ahead of time
* [x] Scale down by available width
* [ ] Cooler lookup table
* [ ] Seedable RNG?
* [ ] Prettier "Off" condition
* [ ] Waterfall plot style updates?
* [ ] Other random lines in background?
