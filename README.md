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
* [X] Better instructions
* [X] Lines apparently not visible on Mac, some kinda transparency issue? Hopefully not GL problem..
* [X] Trial timeout
* [X] Longer timer for practice
* [X] Record if webGL available

## Desired

* [x] Some nice rivets and stuff
* [X] Fix width so that resize is easier
* [x] Scale down by available width
* [ ] Check that band space available is possible ahead of time
* [ ] Cooler lookup table
* [ ] Seedable RNG? Have list of known good seeds from which a choice is made. Solves all issues.
* [ ] Prettier "Off" condition
* [ ] Waterfall plot style updates?
* [ ] Other random lines in background?
* [ ] Better highlight colour

## Before launch

* [X] Update n trials to total around 15-20 minutes - update text appropriately - wanna test another time
* [X] Add total time in output file
* [X] Ensure all lines are output correctly
* [X] Add reminder of which colour is which for highlight
* [X] Ensure we don't bail out before random lines are chosen
* [X] Slow waterfall plot scroll somewhat
* [X] Add questionnaires:
    * [X] SWAT
    * [X] machine trust score 
    * [X] Gaming questions <- still need to make the button only work if filled in
* [X] Test colour-blindness friendliness - part of questionnaire? Yes, just ask are you colourblind. Prolific can ask if you have normal or corrected-to-normal (includes you can see colour).
* [X] Change to Space to continue rather than any key to avoid accidents
* [X] Fix all buttons using PIXI onclick override
* [X] Show example in trust questions
* [X] Increase SWAT text size
* [ ] Highlight overlay style
* [ ] Enforce full-screen for final release