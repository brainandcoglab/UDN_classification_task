# UDN Submarine Study 1: Honours 2023 Edition

This branch will implement the monochromatic highlight and variable noise levels.

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
* [X] Canvas fallback if WebGL fails is not working correctly - actually it works, but the lines are visible beyond their border... I just set webgl as a requirement, too much work to ensure fallback works.
* [X] Lowlighting cue confusing / hard to see
* [X] Not everyone clicked through to the end? Make sure instructions exist - should be okay, added timer to final screen

### Possible other issues:

* [ ] Things don't all update correctly on resize
* [ ] People could still potentially wait during the "press space to continue" bits...
* [ ] Some people found it excessively difficult 

### Prelaunch checklist

* [ ] Ensure automatic fullscreen
* [ ] Sync hons2022 repository with Pavlovia
* [ ] Ensure 8/64 trials, 65-80 per group
* [ ] Ensure condition parameters are set up correctly
* [ ] Ensure updated information sheet uploaded
* [ ] Balance participant gender via Prolific
* [ ] Add condition to postprocessing, at least one plot per condition

### More stuff to do:

* [X] Check out the mean accuracy for last experiment over the course of baseline (divide into 4 or so) - at what point does the inflection occur? - if that's around 32 that'd be good. 
    * So - seemed like actually they performed pretty much great from the get-go... So honestly it probably won't matter too much. But they do actually reach the peak around 32 trials (on average)
* [X] Worried about difficulty, so will add lookup tables into the baseline phase - 32 lookup supported, 32 without, ideally
* [X] Then, can remove practice and any reference to it <- have removed it all
* [X] Test brave results - worked fine? I wonder if it was a font issue? Doesn't appear to be.. things are somehow just the wrong scale...
* [X] try and identify browser - record user agent
* [X] Timer on-screen for breaks?
* [X] Add instructions on how long it will take, and to find a quiet place without distractions, you'll get 2 2 minute breaks, etc... 
* [ ] Send out to peeps + lab for piloting once done

* Calculate LR bias trick probability afterwards?
* Addition of ~6 catch trials made previous slightly easier...


### Main updates

* Fixed an issue in which overlay outline would not properly align with edges of other shapes
* Changed number of trials per phase to 64, i.e., 4 blocks of 16 in which each possible configuration is seen
* Confined area in which random line generation occurs
* Allowed passing of condition as URL parameter (e.g. ?condition=[0|1|2])
* Updated initial questions to include colour temp. software question

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
