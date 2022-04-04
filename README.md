# UDN Submarine Study 1: Honours 2022 Edition

This branch will implement all changes required for two follow-up experiments - fading/TAC and the controls.

## Notes

- Need to do some config to ensure this branch is the ["default" on Pavlovia](https://discourse.psychopy.org/t/ability-to-choose-a-different-branch-for-piloting-on-pavlovia/16202/4)
- Followups: monolight, fading to uniformative light

- Don't think FPS is that accurate - it gets recorded initially, but not over entire exp.

## TODO

### Required

* [X] Get condition from URL parameters - obtained in para.js
* [ ] Implement fading condition - More or less implemented - I think I need to test whether the increment per trial works.
* [ ] Enforce rapid SWAT response
* [X] Decide on way to split conditions: For now I'll go with splitting into different groups in Prolific because I can pass conditions as URL parameters - and I'm pretty sure I can prevent people starting more than one of the experiments. Could also integrate something else - either look at complete Pavlovia data or run a service hosted somewhere that manages things - but somewhat fragile and unnecessary.

### Desired (kept from main branch)

* [ ] Check that band space available is possible ahead of time
* [ ] Cooler lookup table
* [ ] Seedable RNG? Have list of known good seeds from which a choice is made. Solves all issues.
* [ ] Prettier "Off" condition
* [ ] Waterfall plot style updates?
* [ ] Other random lines in background?
* [ ] Better highlight colour

### To discuss

* Number of lines?
* Are we using monochromatic highlight?
* Catch trials?
* It's hard w/o lookup - maybe don't switch pattern after practice?
* Fading of highlight occurs on every supported trial. But this means it isn't necesarrily even across the classifications. Should I have an independent fade for both classifications instead, perhaps?
* Several options for fading appearance.

### Issues

* On startup the wrong field is selected... Also tab doesn't work
