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

* On startup the wrong field is selected... Also tab doesn't work. following this up - it's always the last text entry that's highlighted. Annoying.
    * Okay, I made the first field focused. However, the tab thing is a little harder. It's because of this "substitution" thing that happens, see [psychojs source](https://github.com/psychopy/psychojs/blob/main/src/visual/TextInput.js). If you disable the code in the substituteText setter you can prevent the DOM input from being hidden (which also prevents the field being tabbed to). However, doing this seems to break other visual stuff which relies on the substitution. I think the purpose of this substitution is to allow canvas stuff to appear over the top of a field? Which, sure okay that's cool, but I think the fact accessibility is broken is a way bigger issue... Anyway, maybe there's a good way to fix but not really the biggest deal.
