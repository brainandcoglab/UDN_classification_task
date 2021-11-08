/**************************** 
 * Classification_Task Test *
 ****************************/

import { core, data, sound, util, visual } from './lib/psychojs-2021.2.3.js';
const { PsychoJS } = core;
const { TrialHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


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
import * as PIXI from "../lib/pixi-legacy.min.js"
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
flowScheduler.add(init_qsRoutineBegin());
flowScheduler.add(init_qsRoutineEachFrame());
flowScheduler.add(init_qsRoutineEnd());
flowScheduler.add(introRoutineBegin());
flowScheduler.add(introRoutineEachFrame());
flowScheduler.add(introRoutineEnd());
const tutorialLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(tutorialLoopBegin(tutorialLoopScheduler));
flowScheduler.add(tutorialLoopScheduler);
flowScheduler.add(tutorialLoopEnd);
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
    {'name': 'data/bg.png', 'path': 'data/bg.png'},
    {'name': 'data/intial_qs.csv', 'path': 'data/intial_qs.csv'}
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


var init_qsClock;
var form;
var button;
var welc_text;
var introClock;
var text;
var key_resp_2;
var tuteClock;
var tute_resp;
var tute_left;
var tute_right;
var tutebg;
var tute_stage;
var tute_config;
var polygon;
var textbox;
var instructionsClock;
var instructions_text;
var key_resp_4;
var trialClock;
var image;
var key_resp;
var lookup_table_left;
var lookup_table_right;
var bands;
var feedbackClock;
var feedback_text;
var debriefClock;
var debrief_text;
var key_resp_3;
var outroClock;
var outro_text;
var key_resp_5;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "init_qs"
  init_qsClock = new util.Clock();
  form = new visual.Form({
    win : psychoJS.window, name:'form',
    items : 'data/intial_qs.csv',
    textHeight : 0.03,
    font : '"Times New Roman"',
    randomize : false,
    size : [1, 0.7],
    pos : [0, 0],
    style : 'custom...',
    itemPadding : 0.05
  });
  form = new visual.Form({
      win : psychoJS.window, name:'form',
      items : 'data/intial_qs.csv',
      textHeight : 0.03,
      font : '"Times New Roman"',
      randomize : false,
      size : [1, 0.7],
      pos : [0, 0],
      //responseColor : 'black',
      itemPadding : 0.05
  });
  // Fix the text colour 'cos GUI wont' do it
  //form.responseColor = 'black';
  // Make the broken scrollbar invisible
  form._scrollbar.size = [0,0];
  form._scrollbar.markerColor = 'black';
  form._scrollbar.lineColor = 'black';
  form._scrollbar.fillColor = 'black';
  // THIS IS A NON-GENERIC HACK
  form._visual.responseStims[2].color = 'black';
  button = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button',
    text: 'Click here to continue',
    pos: [0.5, (- 0.4)], letterHeight: 0.03,
    size: [0.35, 0.1]
  });
  button.clock = new util.Clock();
  
  welc_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'welc_text',
    text: 'Welcome! Please answer the questions below to get started.',
    font: '"Times New Roman"',
    units: undefined, 
    pos: [0, 0.4], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "intro"
  introClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'In this experiement, you will be taking on the role of a SONAR operator. You will be classifying different ship types using SONAR signals which appear as vertical lines on a simulated display. This experiment will be testing different ways of supporting SONAR operators to make decisions. \n\nThere will be four sections of the experiment, in which you will recieve different types of assistance to make classifications. Please try your best to classify the vessels. The experiment will likely take around 30 minutes in total to complete.\n\nPlease press any key to continue to the tutorial.',
    font: '"Times New Roman"',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "tute"
  tuteClock = new util.Clock();
  tute_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  tute_left = new visual.TextStim({
    win: psychoJS.window,
    name: 'tute_left',
    text: 'Friend\n(Press A):\n2.50 Hz\n4.00 Hz\n6.50 Hz\n8.00 Hz',
    font: '"Lucida Console"',
    units: undefined, 
    pos: [(- 0.71), 0.0], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('green'),  opacity: undefined,
    depth: -1.0 
  });
  
  tute_right = new visual.TextStim({
    win: psychoJS.window,
    name: 'tute_right',
    text: 'Foe\n(Press L):\n3.20 Hz\n5.50 Hz\n7.80 Hz\n9.00 Hz',
    font: '"Lucida Console"',
    units: undefined, 
    pos: [0.7, 0], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('green'),  opacity: undefined,
    depth: -2.0 
  });
  
  // set text align
  tute_left.setAlignHoriz('center');
  tute_right.setAlignHoriz('center');
  
  tutebg = new util.Color([-.9,-.9,-.9]);
  
  tute_stage = 0;
  
  tute_config = [
  [`This is your SONAR display console. You will notice that there are two different frequency "bands". Each band represents a different frequency range in Hertz (Hz).
  
  (Press any key to continue)`, [0.0, -0.1], [0.8, 0.3]],
  
  [`On each trial, one of the bands will become active and display simulated SONAR signals. This time, the bottom band has been activated.
  
  (Press any key to continue)`, [0.0, 0.3], [0.8, 0.2]],
  
  [`You will initally need to use the lookup tables, found to the left and right of the console, to determine whether this signal is from a friend or a foe vessel. Can you classify the current vessel?
  
  (Press any key to continue)`, [-0.35, 0.3], [0.8, 0.2]],
  
  [`If you thought that this was a Friend vessel, you were correct! If you were wrong, pay attention to the frequencies listed on the left, and what frequencies are present in the lower band.
  
  (Press any key to continue)`, [-0.35, 0.3], [0.8, 0.2]],
  
  [`You will be given 10 seconds on each trial to classify a vessel. Respond using the A key for friend, or L key for foe. You'll be told if you were correct or not.
  Later on in the experiment, the lookup tables will be removed, and other types of assistance will be provided, but you'll learn more about that later.
  
  (Press any key to continue)`, [0.0, 0.1], [0.8, 0.3]],
  
  
  ]
  polygon = new visual.Rect ({
    win: psychoJS.window, name: 'polygon', 
    width: [0.8, 0.3][0], height: [0.8, 0.3][1],
    ori: 0.0, pos: [0, (- 0.1)],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color(tutebg),
    opacity: 0.7, depth: -4, interpolate: true,
  });
  
  textbox = new visual.TextStim({
    win: psychoJS.window,
    name: 'textbox',
    text: 'This is your SONAR display console. You will notice that there are two different "bands". Each band represents a different frequency range.\n\n(Press any key to continue)',
    font: '"Times New Roman"',
    units: undefined, 
    pos: [0.0, (- 0.1)], height: 0.03,  wrapWidth: 0.7, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  instructions_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions_text',
    text: '',
    font: '"Times New Roman"',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
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
  // Check if we're using WebGL
  let webgl = psychoJS.window._renderer.type == PIXI.RENDERER_TYPE.WEBGL;
  psychoJS.experiment.addData('usingWebGL', webgl);
  psychoJS.experiment.nextEntry();
  
  bands = [
      new band.Band(
          psychoJS.window,
          [-0.01, 0.24], // pos
          [para.WIDTH, 0.2], // size
          para.VESSEL_SIGNATURES[0][0],
          jl.repeat(1, para.N_LINES),
          para.NTICKS_TOP,  para.BAND_RANGES[0],
      ),
      new band.Band(
          psychoJS.window,
          [-0.01, -0.17], // pos
          [para.WIDTH, 0.2], // size
          para.VESSEL_SIGNATURES[0][1],
          jl.repeat(1, para.N_LINES),
          para.NTICKS_BOTTOM,
          para.BAND_RANGES[1],
      )
  ];
  
  psychoJS.experiment.addData('practice_signatures_friend', para.PRACTICE_SIGNATURES[0]); 
  psychoJS.experiment.addData('practice_signatures_foe', para.PRACTICE_SIGNATURES[1]); 
  
  psychoJS.experiment.addData('signatures_friend', para.VESSEL_SIGNATURES[0]);
  psychoJS.experiment.addData('signatures_foe', para.VESSEL_SIGNATURES[1]);
  
  psychoJS.experiment.addData('band_ranges_top', para.BAND_RANGES[0]);
  psychoJS.experiment.addData('band_ranges_bottom', para.BAND_RANGES[1]);
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_text',
    text: 'good work!',
    font: '"Times New Roman"',
    units: undefined, 
    pos: [0, 0], height: 0.08,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "debrief"
  debriefClock = new util.Clock();
  debrief_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'debrief_text',
    text: '<Phase-specific debrief text goes here>',
    font: '"Times New Roman"',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "outro"
  outroClock = new util.Clock();
  outro_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'outro_text',
    text: 'Thank you very much for participating!',
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
var button_callback;
var init_qsComponents;
function init_qsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'init_qs'-------
    t = 0;
    init_qsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    button.fillColor = 'darkgrey';
    button.font = 'Times New Roman'
    
    button_callback = function() {
        
        if (form.formComplete()) {
            continueRoutine = false;
        } else {
            continueRoutine = true;
        }
    }
    // keep track of which components have finished
    init_qsComponents = [];
    init_qsComponents.push(form);
    init_qsComponents.push(button);
    init_qsComponents.push(welc_text);
    
    for (const thisComponent of init_qsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function init_qsRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'init_qs'-------
    // get current time
    t = init_qsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *form* updates
    if (t >= 0.0 && form.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      form.tStart = t;  // (not accounting for frame time here)
      form.frameNStart = frameN;  // exact frame index
      
      form.setAutoDraw(true);
    }

    if (form.formComplete()) {
        button.fillColor = 'darkblue';
    } else {
        button.fillColor = 'darkgrey';
    }
    
    // *button* updates
    if (t >= 0 && button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button.tStart = t;  // (not accounting for frame time here)
      button.frameNStart = frameN;  // exact frame index
      
      button.setAutoDraw(true);
    }

    if (button.status === PsychoJS.Status.STARTED) {
      // check whether button has been pressed
      if (button.isClicked) {
        if (!button.wasClicked) {
          // store time of first click
          button.timesOn.push(button.clock.getTime());
          // store time clicked until
          button.timesOff.push(button.clock.getTime());
        } else {
          // update time clicked until;
          button.timesOff[button.timesOff.length - 1] = button.clock.getTime();
        }
        if (!button.wasClicked) {
          // end routine when button is clicked
          continueRoutine = false;
          button_callback();
        }
        // if button is still clicked next frame, it is not a new click
        button.wasClicked = true;
      } else {
        // if button is clicked next frame, it is a new click
        button.wasClicked = false
      }
    } else {
      // keep clock at 0 if button hasn't started / has finished
      button.clock.reset();
      // if button is clicked next frame, it is a new click
      button.wasClicked = false;
    }
    
    // *welc_text* updates
    if (t >= 0.0 && welc_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welc_text.tStart = t;  // (not accounting for frame time here)
      welc_text.frameNStart = frameN;  // exact frame index
      
      welc_text.setAutoDraw(true);
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
    for (const thisComponent of init_qsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function init_qsRoutineEnd() {
  return async function () {
    //------Ending Routine 'init_qs'-------
    for (const thisComponent of init_qsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    form.addDataToExp(psychoJS.experiment, 'columns');
    form.addDataToExp(psychoJS.experiment, 'rows');
    // the Routine "init_qs" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


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
    
    for (const thisComponent of introComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
      let theseKeys = key_resp_2.getKeys({keyList: [], waitRelease: false});
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
    for (const thisComponent of introComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of introComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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


var tutorial;
var currentLoop;
function tutorialLoopBegin(tutorialLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    tutorial = new TrialHandler({
      psychoJS: psychoJS,
      nReps: tute_config.length, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'tutorial'
    });
    psychoJS.experiment.addLoop(tutorial); // add the loop to the experiment
    currentLoop = tutorial;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTutorial of tutorial) {
      const snapshot = tutorial.getSnapshot();
      tutorialLoopScheduler.add(importConditions(snapshot));
      tutorialLoopScheduler.add(tuteRoutineBegin(snapshot));
      tutorialLoopScheduler.add(tuteRoutineEachFrame());
      tutorialLoopScheduler.add(tuteRoutineEnd());
      tutorialLoopScheduler.add(endLoopIteration(tutorialLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function tutorialLoopEnd() {
  psychoJS.experiment.removeLoop(tutorial);

  return Scheduler.Event.NEXT;
}


var phases;
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
    for (const thisPhase of phases) {
      const snapshot = phases.getSnapshot();
      phasesLoopScheduler.add(importConditions(snapshot));
      phasesLoopScheduler.add(instructionsRoutineBegin(snapshot));
      phasesLoopScheduler.add(instructionsRoutineEachFrame());
      phasesLoopScheduler.add(instructionsRoutineEnd());
      const trialsLoopScheduler = new Scheduler(psychoJS);
      phasesLoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      phasesLoopScheduler.add(trialsLoopScheduler);
      phasesLoopScheduler.add(trialsLoopEnd);
      phasesLoopScheduler.add(debriefRoutineBegin(snapshot));
      phasesLoopScheduler.add(debriefRoutineEachFrame());
      phasesLoopScheduler.add(debriefRoutineEnd());
      phasesLoopScheduler.add(endLoopIteration(phasesLoopScheduler, snapshot));
    }
    
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
    for (const thisTrial of trials) {
      const snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd());
      trialsLoopScheduler.add(feedbackRoutineBegin(snapshot));
      trialsLoopScheduler.add(feedbackRoutineEachFrame());
      trialsLoopScheduler.add(feedbackRoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    }
    
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


var _tute_resp_allKeys;
var tute_foe_text;
var tuteComponents;
function tuteRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'tute'-------
    t = 0;
    tuteClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    tute_resp.keys = undefined;
    tute_resp.rt = undefined;
    _tute_resp_allKeys = [];
    image.setAutoDraw(true);
    
    
    textbox.fillColor = tutebg;
    textbox.text = tute_config[tute_stage][0];
    textbox.pos = tute_config[tute_stage][1];
    textbox.wrapWidth = tute_config[tute_stage][2][0] - 0.1;
    
    polygon.pos = tute_config[tute_stage][1];
    polygon.shape = tute_config[tute_stage][2];
    
    let tute_lines = [0.21,0.29,0.63,0.84];
    
    let range = para.BAND_RANGES[1];
    let tute_friend_text = "Friend\n(Press A):\n";
    for (var i = 0; i < tute_lines.length; i++) {
        let x = tute_lines[i];
        let val = (range[1] - range[0]) * x + range[0];
        tute_friend_text += val.toFixed(0) + " Hz\n";
    } 
    tute_foe_text = "Foe\n(Press L):\n" +
    "324 Hz\n" +
    "552 Hz\n" +
    "787 Hz\n" +
    "902 Hz";
    
    bands[1].setLines(tute_lines, [1,1,1,1]);
    switch(tute_stage) {
        case 0:
            tute_left.text = "";
            tute_right.text = "";
            // Set active band
            for(var i = 0; i < bands.length; i++) {
                let band = bands[i];
                band.active = 0;
                band.rectangle.opacity = 1.0 - band.active;
                band.rectangle._needUpdate = true;
                band.setAutoDraw(true);
            }
            break;
        case 1:
            bands[1].active = 1;
            bands[1].rectangle.opacity = 0.0;
            bands[1].rectangle._needUpdate = true;
            bands[1].xaxis.scalebar._needUpdate = true;
            bands[1].setAutoDraw(true);
            break;
        case 2:
            tute_left.text = tute_friend_text;
            tute_right.text = tute_foe_text;
            break;
        default:
            break;
    }
    // keep track of which components have finished
    tuteComponents = [];
    tuteComponents.push(tute_resp);
    tuteComponents.push(tute_left);
    tuteComponents.push(tute_right);
    tuteComponents.push(polygon);
    tuteComponents.push(textbox);
    
    for (const thisComponent of tuteComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function tuteRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'tute'-------
    // get current time
    t = tuteClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *tute_resp* updates
    if (t >= 0.5 && tute_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tute_resp.tStart = t;  // (not accounting for frame time here)
      tute_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { tute_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { tute_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { tute_resp.clearEvents(); });
    }

    if (tute_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = tute_resp.getKeys({keyList: [], waitRelease: false});
      _tute_resp_allKeys = _tute_resp_allKeys.concat(theseKeys);
      if (_tute_resp_allKeys.length > 0) {
        tute_resp.keys = _tute_resp_allKeys[_tute_resp_allKeys.length - 1].name;  // just the last key pressed
        tute_resp.rt = _tute_resp_allKeys[_tute_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *tute_left* updates
    if (t >= 0.0 && tute_left.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tute_left.tStart = t;  // (not accounting for frame time here)
      tute_left.frameNStart = frameN;  // exact frame index
      
      tute_left.setAutoDraw(true);
    }

    
    // *tute_right* updates
    if (t >= 0.0 && tute_right.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tute_right.tStart = t;  // (not accounting for frame time here)
      tute_right.frameNStart = frameN;  // exact frame index
      
      tute_right.setAutoDraw(true);
    }

    // Update uniforms
    for(var i = 0; i < bands.length; i++) {
        var band = bands[i];
        band.uniforms.frameN = frameN;
    }
    
    // *polygon* updates
    if (t >= 0.5 && polygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon.tStart = t;  // (not accounting for frame time here)
      polygon.frameNStart = frameN;  // exact frame index
      
      polygon.setAutoDraw(true);
    }

    
    // *textbox* updates
    if (t >= 0.5 && textbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox.tStart = t;  // (not accounting for frame time here)
      textbox.frameNStart = frameN;  // exact frame index
      
      textbox.setAutoDraw(true);
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
    for (const thisComponent of tuteComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function tuteRoutineEnd() {
  return async function () {
    //------Ending Routine 'tute'-------
    for (const thisComponent of tuteComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('tute_resp.keys', tute_resp.keys);
    if (typeof tute_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('tute_resp.rt', tute_resp.rt);
        routineTimer.reset();
        }
    
    tute_resp.stop();
    
    
    tute_stage++;
    
    if (tute_stage == tute_config.length) {
        image.setAutoDraw(false);
        for(var i = 0; i < bands.length; i++) {
            let band = bands[i];
            band.active = false;
            band.setAutoDraw(false);
        }
    }
    // the Routine "tute" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_4_allKeys;
var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instructions'-------
    t = 0;
    instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    instructions_text.text = para.instructions[phase];
    debrief_text.text = para.debrief[phase];
    
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(instructions_text);
    instructionsComponents.push(key_resp_4);
    
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructionsRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instructions'-------
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions_text* updates
    if (t >= 0.0 && instructions_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_text.tStart = t;  // (not accounting for frame time here)
      instructions_text.frameNStart = frameN;  // exact frame index
      
      instructions_text.setAutoDraw(true);
    }

    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }

    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: [], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
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
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd() {
  return async function () {
    //------Ending Routine 'instructions'-------
    for (const thisComponent of instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
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
    
    bands[active_band].setLines(lines, is_signal);
    
    var lookup_left = para.LOOKUP_TEXT[0][active_band];
    var lookup_right = para.LOOKUP_TEXT[1][active_band];
    switch(phase) {
        case 0: // PRACTICE PHASE
            lookup_left = para.PRACTICE_LOOKUP_TEXT[0][active_band];
            lookup_right = para.PRACTICE_LOOKUP_TEXT[1][active_band];
            break;
        case 1: // BASELINE PHASE
            break;
        case 2: // TRAINING PHASE
            lookup_left = "Friend\n(Press A)";
            lookup_right = "Foe\n(Press L)";
            if (active_band == para.HIGHLIGHT) {
                lookup_left = "Friend\n(Blue)\n(Press A)";
                lookup_right = "Foe\n(Red)\n(Press L)";  
            }
            bands[para.HIGHLIGHT].setHighlight(true, vessel);
            bands[para.LOWLIGHT].setLowlight(true);
            break;
        case 3: // TEST PHASE
            lookup_left = "Friend\n(Press A)";
            lookup_right = "Foe\n(Press L)";
            break;
    }
    
    // Set active band
    for(var i = 0; i < bands.length; i++) {
        let band = bands[i];   
        band.active = active_band == i;
        band.rectangle.opacity = 1.0 - band.active;
        band.rectangle._needUpdate = true;
        band.setAutoDraw(true);
    }
    
    lookup_table_left.text = lookup_left;
    lookup_table_right.text = lookup_right;
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(image);
    trialComponents.push(key_resp);
    trialComponents.push(lookup_table_left);
    trialComponents.push(lookup_table_right);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
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

    frameRemains = 0.0 + para.DURATION_MAP[phase] - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image.setAutoDraw(false);
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

    frameRemains = 0.0 + para.DURATION_MAP[phase] - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['a', 'l'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp.keys == para.VESSEL_MAP[vessel]) {
            key_resp.corr = 1;
        } else {
            key_resp.corr = 0;
        }
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

    frameRemains = 0.0 + para.DURATION_MAP[phase] - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (lookup_table_left.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      lookup_table_left.setAutoDraw(false);
    }
    
    // *lookup_table_right* updates
    if (t >= 0.0 && lookup_table_right.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      lookup_table_right.tStart = t;  // (not accounting for frame time here)
      lookup_table_right.frameNStart = frameN;  // exact frame index
      
      lookup_table_right.setAutoDraw(true);
    }

    frameRemains = 0.0 + para.DURATION_MAP[phase] - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (lookup_table_right.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      lookup_table_right.setAutoDraw(false);
    }
    // Update uniforms
    for(var i = 0; i < bands.length; i++) {
        var band = bands[i];
        band.uniforms.frameN = frameN;
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
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp.keys === undefined) {
      if (['None','none',undefined].includes(para.VESSEL_MAP[vessel])) {
         key_resp.corr = 1;  // correct non-response
      } else {
         key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    psychoJS.experiment.addData('key_resp.corr', key_resp.corr);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    image.setAutoDraw(false);
    for(var i = 0; i < bands.length; i++) {
        let band = bands[i];
        band.active = false;
        band.setAutoDraw(false);
    }
    if (key_resp.corr) {
        feedback_text.text = "Correct";
    } else {
        feedback_text.text = "Incorrect";
    }
    
    switch(phase) {
        case 0: // PRACTICE PHASE
            break;
        case 1: // BASELINE PHASE
            break;
        case 2: // TRAINING PHASE
            bands[para.HIGHLIGHT].setHighlight(false);
            bands[para.LOWLIGHT].setLowlight(false);
            break;
        case 3: // TEST PHASE
            feedback_text.text = ""; // No feedback on test
            break;
    }
    
    // For some reason it can't add array data automatically
    psychoJS.experiment.addData('lines_presented', lines); 
    psychoJS.experiment.addData('is_signal_presented', is_signal);
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
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(feedback_text);
    
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


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

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_3_allKeys;
var debriefComponents;
function debriefRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'debrief'-------
    t = 0;
    debriefClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    debriefComponents = [];
    debriefComponents.push(debrief_text);
    debriefComponents.push(key_resp_3);
    
    for (const thisComponent of debriefComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function debriefRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'debrief'-------
    // get current time
    t = debriefClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *debrief_text* updates
    if (t >= 0.0 && debrief_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      debrief_text.tStart = t;  // (not accounting for frame time here)
      debrief_text.frameNStart = frameN;  // exact frame index
      
      debrief_text.setAutoDraw(true);
    }

    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: [], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
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
    for (const thisComponent of debriefComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function debriefRoutineEnd() {
  return async function () {
    //------Ending Routine 'debrief'-------
    for (const thisComponent of debriefComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "debrief" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
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
    // keep track of which components have finished
    outroComponents = [];
    outroComponents.push(outro_text);
    outroComponents.push(key_resp_5);
    
    for (const thisComponent of outroComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    for (const thisComponent of outroComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of outroComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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
