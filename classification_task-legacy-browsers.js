/**************************** 
 * Classification_Task Test *
 ****************************/


// store info about the experiment session:
let expName = 'classification_task';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// Start code blocks for 'Before Experiment'
// Random util functions that don't fit elsewhere
import * as jl from "./src/johnlib.js"
// Generative functions (trials orders, line positions, etc)
import * as gen from "./src/generate.js"
// Band objects
import * as band from "./src/band.js"
// Inital parameters
import * as para from "./src/para.js"
// PIXI
import * as PIXI from "./lib/pixi-legacy.min.js"
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color('black'),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(introRoutineBegin());
flowScheduler.add(introRoutineEachFrame());
flowScheduler.add(introRoutineEnd());
const phasesLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(phasesLoopBegin(phasesLoopScheduler));
flowScheduler.add(phasesLoopScheduler);
flowScheduler.add(phasesLoopEnd);
flowScheduler.add(outroRoutineBegin());
flowScheduler.add(outroRoutineEachFrame());
flowScheduler.add(outroRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'data/bg.png', 'path': 'data/bg.png'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var introClock;
var text;
var key_resp_2;
var trialClock;
var image;
var key_resp;
var lookup_table_left;
var lookup_table_right;
var supported_count;
var bands;
var slider;
var feedbackClock;
var feedback_text;
var outroClock;
var outro_text;
var key_resp_5;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "intro"
  introClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Welcome to the perceptual calibration task. You will be presented with a SONAR time frequency plot on which multiple green lines will appear. In addition, a differently coloured highlight may be overlaid on each of the lines. Your task is to report whether you can see the highlight. Respond "A" for yes, "L" for no.\n\nPlease press the \'space\' key to begin.',
    font: '"Times New Roman"',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  if(para.DEBUG_ENABLED) {
      text.text += `\n\n***DEBUG ENABLED***
      Use bottom band slider to adjust highlight alpha.
      Advancing to next trial will change friend/foe colours.
      `;
  }
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : 'data/bg.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1.25, 0.9],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  lookup_table_left = new visual.TextStim({
    win: psychoJS.window,
    name: 'lookup_table_left',
    text: '<insert lookup text here>\n\n<Friend frequencies>\n\n<Foe frequencies>\n\n0123456789',
    font: '"Lucida Console"',
    units: undefined, 
    pos: [(- 0.71), 0.0], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('green'),  opacity: undefined,
    depth: -2.0 
  });
  
  lookup_table_right = new visual.TextStim({
    win: psychoJS.window,
    name: 'lookup_table_right',
    text: 'Any text\n\nincluding line breaks',
    font: '"Lucida Console"',
    units: undefined, 
    pos: [0.7, 0], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('green'),  opacity: undefined,
    depth: -3.0 
  });
  
  // set text align
  lookup_table_left.setAlignHoriz('center');
  lookup_table_right.setAlignHoriz('center');
  
  window.PIXI = PIXI;
  window.psychoJS = psychoJS;
  
  // track how many supported trials we've done
  // mainly just to decide on how much to fade
  supported_count = 0;
  
  bands = [
      new band.Band(
          psychoJS.window,
          [-0.01, 0.24], // pos
          [para.WIDTH, 0.2], // size
          para.LINE_POSITIONS,
          jl.repeat(1, para.N_LINES),
          para.NTICKS_TOP,  para.BAND_RANGES[0],
      ),
      new band.Band(
          psychoJS.window,
          [-0.01, -0.17], // pos
          [para.WIDTH, 0.2], // size
          para.LINE_POSITIONS,
          jl.repeat(1, para.N_LINES),
          para.NTICKS_BOTTOM,
          para.BAND_RANGES[1],
      )
  ];
  
  
  slider = new visual.Slider({
      win: psychoJS.window, name: 'slider',
      size: [(para.WIDTH - 0.2), 0.08], pos: [(- 0.01), (- 0.17)], units: 'height',
      labels: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0], ticks: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      granularity: 0.0, style: ["RATING"],
      color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
      fontFamily: 'Open Sans', bold: true, italic: false, depth: -5, 
      flip: false,
  });
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_text',
    text: '',
    font: '"Times New Roman"',
    units: undefined, 
    pos: [0, 0], height: 0.08,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "outro"
  outroClock = new util.Clock();
  outro_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'outro_text',
    text: '',
    font: '"Times New Roman"',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_resp_2_allKeys;
var introComponents;
function introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'intro'-------
    t = 0;
    introClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    introComponents = [];
    introComponents.push(text);
    introComponents.push(key_resp_2);
    
    introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function introRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'intro'-------
    // get current time
    t = introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function introRoutineEnd() {
  return async function () {
    //------Ending Routine 'intro'-------
    introComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var phases;
var currentLoop;
function phasesLoopBegin(phasesLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    phases = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: para.PHASES,
      seed: undefined, name: 'phases'
    });
    psychoJS.experiment.addLoop(phases); // add the loop to the experiment
    currentLoop = phases;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    phases.forEach(function() {
      const snapshot = phases.getSnapshot();
    
      phasesLoopScheduler.add(importConditions(snapshot));
      const trialsLoopScheduler = new Scheduler(psychoJS);
      phasesLoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      phasesLoopScheduler.add(trialsLoopScheduler);
      phasesLoopScheduler.add(trialsLoopEnd);
      phasesLoopScheduler.add(endLoopIteration(phasesLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: para.RUN_ORDER[phase],
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      const snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd());
      trialsLoopScheduler.add(feedbackRoutineBegin(snapshot));
      trialsLoopScheduler.add(feedbackRoutineEachFrame());
      trialsLoopScheduler.add(feedbackRoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


async function phasesLoopEnd() {
  psychoJS.experiment.removeLoop(phases);

  return Scheduler.Event.NEXT;
}


var _key_resp_allKeys;
var colour;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    image.setAutoDraw(true);
    
    bands[para.ACTIVE_BAND].setLines(para.LINE_POSITIONS, [1,1,1,1]);
    
    var lookup_left = "Highlight\npresent\n(Press A)";
    var lookup_right = "Highlight\nabsent\n(Press L)";
    
    // Set active band
    for(var i = 0; i < 1; i++) {
        let band = bands[i];   
        band.active = para.ACTIVE_BAND == i;
        band.rectangle.opacity = 1.0 - band.active;
        band.rectangle._needUpdate = true;
        band.setAutoDraw(true);
    }
    // TODO: allow this to be set before?
    // So, I will actually use a run order, but it'll be randomized
    
    var colour = phase;
    if (para.DEBUG_ENABLED) {
        colour = trials.thisN%2;
    }
    bands[para.ACTIVE_BAND].toggleSupport(true, "FADING",colour, 1-intensity);
    
    lookup_table_left.text = lookup_left;
    lookup_table_right.text = lookup_right;
    
    if (para.DEBUG_ENABLED) {
        slider.setRating(para.INITIAL_INTENSITY);
        slider.setMarkerPos(para.INITIAL_INTENSITY);
        slider._needUpdate = true;
        slider.setAutoDraw(true);
    } else {
        slider.setAutoDraw(false);
    }
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(image);
    trialComponents.push(key_resp);
    trialComponents.push(lookup_table_left);
    trialComponents.push(lookup_table_right);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var rating;
function trialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trial'-------
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['a', 'l'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *lookup_table_left* updates
    if (t >= 0.0 && lookup_table_left.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      lookup_table_left.tStart = t;  // (not accounting for frame time here)
      lookup_table_left.frameNStart = frameN;  // exact frame index
      
      lookup_table_left.setAutoDraw(true);
    }

    
    // *lookup_table_right* updates
    if (t >= 0.0 && lookup_table_right.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      lookup_table_right.tStart = t;  // (not accounting for frame time here)
      lookup_table_right.frameNStart = frameN;  // exact frame index
      
      lookup_table_right.setAutoDraw(true);
    }

    // Update uniforms
    for(var i = 0; i < bands.length; i++) {
        var band = bands[i];
        band.uniforms.frameN = frameN;
    }
    
    if (para.DEBUG_ENABLED) {
        let rating = slider.getRating();
        if (typeof rating === 'undefined') {
            rating = para.INITIAL_INTENSITY;
        }
        var band = bands[para.ACTIVE_BAND];
        band.toggleSupport(true, "FADING", trials.thisN%2, 1-rating);
    
        band.rectangle._needUpdate = true;
        band.xaxis.scalebar._needUpdate = true;
        //band.setAutoDraw(true);
    }
    
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd() {
  return async function () {
    //------Ending Routine 'trial'-------
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    image.setAutoDraw(false);
    for(var i = 0; i < 1; i++) {
        let band = bands[i];
        band.active = false;
        band.setAutoDraw(false);
    }
    bands[para.ACTIVE_BAND].toggleSupport(false, "FADING", phase, intensity);
    slider.setAutoDraw(false);
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'feedback'-------
    t = 0;
    feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.400000);
    // update component parameters for each repeat
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(feedback_text);
    
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function feedbackRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'feedback'-------
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback_text* updates
    if (t >= 0.0 && feedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_text.tStart = t;  // (not accounting for frame time here)
      feedback_text.frameNStart = frameN;  // exact frame index
      
      feedback_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd() {
  return async function () {
    //------Ending Routine 'feedback'-------
    feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_5_allKeys;
var outroComponents;
function outroRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'outro'-------
    t = 0;
    outroClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    
    
    outro_text.text = `Thank you very much for participating!
    
    Please press any key to complete the experiment.`;
    // keep track of which components have finished
    outroComponents = [];
    outroComponents.push(outro_text);
    outroComponents.push(key_resp_5);
    
    outroComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function outroRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'outro'-------
    // get current time
    t = outroClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *outro_text* updates
    if (t >= 0.0 && outro_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      outro_text.tStart = t;  // (not accounting for frame time here)
      outro_text.frameNStart = frameN;  // exact frame index
      
      outro_text.setAutoDraw(true);
    }

    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }

    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: [], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    outroComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function outroRoutineEnd() {
  return async function () {
    //------Ending Routine 'outro'-------
    outroComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    psychoJS.experiment.addData('globalClockTime', globalClock.getTime());
    psychoJS.experiment.nextEntry();
    // the Routine "outro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
