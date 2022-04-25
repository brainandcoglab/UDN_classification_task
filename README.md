# UDN Submarine Study 1: Honours 2022 Edition

This branch will implement all changes required for two follow-up experiments - fading/TAC and the controls.

## Notes

- Need to do some config to ensure this branch is the ["default" on Pavlovia](https://discourse.psychopy.org/t/ability-to-choose-a-different-branch-for-piloting-on-pavlovia/16202/4)
- Followups: monolight, fading to uniformative light

- Don't think FPS is that accurate - it gets recorded initially, but not over entire exp.

## TODO

### Required

* [X] Get condition from URL parameters - obtained in para.js
* [X] Implement fading condition - More or less implemented - I think I need to test whether the increment per trial works.
* [X] Enforce rapid SWAT response - would like something on screen, but a two minute timer exists.
* [X] Decide on way to split conditions: For now I'll go with splitting into different groups in Prolific because I can pass conditions as URL parameters - and I'm pretty sure I can prevent people starting more than one of the experiments. Could also integrate something else - either look at complete Pavlovia data or run a service hosted somewhere that manages things - but somewhat fragile and unnecessary.
* [X] No lookup on baseline
* [X] Ensure all combinations of lines for 64 trials?
* [X] Ensure text makes sense
* [X] Ensure fading cue works correctly, integrate results from calibration study

### Piloting issues

* [X] A or L key press instructions in lowlight refer to blue and red
* [X] Instructions for each condition and generally can be confusing
* [ ] Canvas fallback if WebGL fails is not working correctly
* [X] Lowlighting cue confusing / hard to see
* [ ] Not everyone clicked through to the end? Make sure instructions exist
* [ ] People could still potentially wait during the "press space to continue" bits...
* [ ] Some people found it excessively difficult 

### Prelaunch checklist

* [ ] Ensure automatic fullscreen
* [ ] Sync hons2022 repository with Pavlovia
* [ ] Ensure 8/64 trials
* [ ] Ensure condition parameters are set up correctly
* [ ] Ensure updated information sheet uploaded
* [ ] Balance participant gender via Prolific


### Main updates

* Fixed an issue in which overlay outline would not properly align with edges of other shapes
* Changed number of trials per phase to 64, i.e., 4 blocks of 16 in which each possible configuration is seen
* Confined area in which random line generation occurs
* Allowed passing of condition as URL parameter (e.g. ?condition=[0|1|2])

### Desired (kept from main branch)

* [ ] Check that band space available is possible ahead of time - hard with constraints
* [ ] Cooler lookup table
* [ ] Seedable RNG? Have list of known good seeds from which a choice is made. Solves all issues.

### To discuss

* Number of lines?
* Are we using monochromatic highlight?
* Catch trials?
* It's hard w/o lookup - maybe don't switch pattern after practice?
* Fading of highlight occurs on every supported trial. But this means it isn't necesarrily even across the classifications. Should I have an independent fade for both classifications instead, perhaps?
* Several options for fading appearance.
* Trust questionnaire?

### Issues

* On startup the wrong field is selected... Also tab doesn't work. following this up - it's always the last text entry that's highlighted. Annoying.
    * Okay, I made the first field focused. However, the tab thing is a little harder. It's because of this "substitution" thing that happens, see [psychojs source](https://github.com/psychopy/psychojs/blob/main/src/visual/TextInput.js). I made it make the DOM version invisible via opacity instead of the display attribute, thus enabling tab navigation. The radio buttons are still a mystery though.
* The timer is not very good if you can't see how much time you have left. I want to either have a countdown clock or an analog display.
