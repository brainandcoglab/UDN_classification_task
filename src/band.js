import * as PIXI from "../nolib/pixi-legacy.min.js"
import { util, visual } from '../nolib/psychojs-2021.2.3.js';
import * as jl from "./johnlib.js"
// Shaders
import * as shaders from "./shaders.js"

function Axis(window, pos, size=[1.0, 1.0], nticks=6, range=[0,1], tick_height=0.02, text_height=0.02) {

    let scale_vertices = [];
    let xtick_labels = [];
    
    for (let i = 0; i < nticks; i++) {
        let x = i * (1.0 / (nticks - 1));
        scale_vertices.push([x - 0.5, 0]);
        scale_vertices.push([x - 0.5, -tick_height]);
        scale_vertices.push([x - 0.5, 0]);
        
        let val = (range[1] - range[0]) * x + range[0];
        
        let ticklabel = new visual.TextStim({
            win: window, name: 'text',
            text: val.toFixed(0), font: '"Lucida Console"', units: undefined,
            pos: [pos[0] + size[0] * (x - 0.5), pos[1] - (tick_height*2)], height: text_height,
            wrapWidth: undefined, ori: 0.0,
            color: new util.Color('green'),  opacity: undefined,
            depth: -2.0 
        });
        xtick_labels.push(ticklabel);
    }
    let scalebar = new visual.ShapeStim ({
        win: window, name: 'scalebar', 
        vertices: scale_vertices,
        closeShape: false,
        ori: 0.0, pos: pos, size: size,
        lineWidth: 1.0, lineColor: new util.Color('green'),
        fillColor: null,
        opacity: undefined, depth: -3, interpolate: true,
    });
    
    this.scalebar = scalebar;
    this.xtick_labels = xtick_labels;
    
    this.setAutoDraw = function(b) {
        for (var i = 0; i < this.xtick_labels.length; i++) {
            this.xtick_labels[i].setAutoDraw(b);
        }
        this.scalebar.setAutoDraw(b);
    };
}

function Lines(window, pos, size, lines, is_signal) {
    this.lines = lines;
    this.is_signal = is_signal;
    this.overlays = [];
    this.rects = [];
    this.border = []; // prevent lines appearing off the edge of screens
    let linew = 0.03;
    let zero = pos[0] - size[0] / 2.0;
    for (var i = 0; i < 2; i++) { 
        // Just a black line
        let off = i ? -linew/3.9 : size[0]+linew/3.9;
        this.border.push(new visual.ShapeStim({
            "win": window,
            "name": "line",
            "size": [linew/2, size[1]],
            "vertices": jl.RECT_VERTICES, 
            "ori": 0.0, 
            "pos": [zero+off, pos[1]],
            "lineWidth": 0.0,
            "colorSpace": "rgb",
            "lineColor": null,
            "fillColor": "black",
            "opacity": null,
            "depth": (-2.0),
            "interpolate": true
        }));
    }
    this.filter = new PIXI.Filter(shaders.vertex_custom, shaders.fragment_line);
    this.alpha_filter = new PIXI.filters.AlphaFilter(0.5);
    for (var i = 0; i < this.lines.length; i++) {
        let x = this.lines[i] / size[0];
        let line = new visual.ShapeStim({
            "win": window,
            "name": "line",
            "size": [linew, size[1]],
            "vertices": jl.RECT_VERTICES, 
            "ori": 0.0, 
            "pos": [zero + x, pos[1]],
            "lineWidth": 0.0,
            "colorSpace": "rgb",
            "lineColor": new util.Color('green'),
            "fillColor": new util.Color('green'),
            "opacity": 1.0,
            "depth": (-2.0),
            "interpolate": false
        });
        let newupdate = (function(_super, parent) {
            function extendedUpdate() {
                _super.call(this);
                this._pixi.filters = [parent.filter];
            }
            return extendedUpdate;
        })(line._updateIfNeeded, this);
        line._updateIfNeeded = newupdate;
        this.rects.push(line);
        let overlay = new visual.ShapeStim({
            "win": window,
            "name": "overlay",
            "size": [linew*1.04, size[1]],
            "vertices": jl.RECT_VERTICES, 
            "ori": 0.0, 
            "pos": [zero + x, pos[1]],
            "lineWidth": 5.0,
            "closeShape": true,
            "colorSpace": "rgb",
            "lineColor": new util.Color('darkred'),
            "fillColor": null,
            "opacity": 0.0,
            "depth": -3.0,
            "interpolate": true
        });
        overlay._alignment = 1.0;
        let oupdate = (function(_super, parent) {
            function extendedUpdate() {
                _super.call(this);
                this._pixi.filters = [parent.alpha_filter];
            }
            return extendedUpdate;
        })(overlay._updateIfNeeded, this);
        overlay._updateIfNeeded = oupdate;
        this.overlays.push(overlay);
    }
    
    this.setLines = function(pos, size, lines, is_signal) {
        this.lines = lines;
        this.is_signal = is_signal;
        for (var i = 0; i < this.lines.length; i++) {
            let x = this.lines[i] / size[0];
            let zero = pos[0] - size[0] / 2.0;
            this.rects[i].pos = [zero + x, pos[1]];
            this.overlays[i].pos = this.rects[i].pos;
        }
    };
    this.setAutoDraw = function(b) {
        for (var i = 0; i < this.rects.length; i++) {
            this.rects[i].setAutoDraw(b);
        }
        for (var i = 0; i < this.overlays.length; i++) {
            this.overlays[i].setAutoDraw(b);
        }
        for (var i = 0; i < this.border.length; i++) {
            this.border[i].setAutoDraw(b);
        }
        
    };
}

function Band(window, pos, size=[1.0, 0.2], lines, is_signal, nticks, range) {
    
    this.lines = new Lines(window, pos, size, lines, is_signal);
    this.setLines = function(lines, is_signal) {
        this.lines.setLines(this.rectangle.pos, this.rectangle.size, lines, is_signal);
    };
    this.active = true;
    this.rectangle = new visual.ShapeStim({
        "win": window,
        "name": "rect",
        "size": size,
        "vertices": jl.RECT_VERTICES, 
        "ori": 0.0, 
        "pos": pos,
        "lineWidth": 1.0,
        "colorSpace": "rgb",
        "lineColor": "black",
        "fillColor": "black",
        "opacity": 0.0,
        "depth": (- 3.0),
        "interpolate": true
    });
    this.uniforms = {
        frameN: 0.0,
        u_resolution: [0.0, 0.0],
     };
    this.filter = new PIXI.Filter(shaders.vertex_custom, shaders.fragment_noise, this.uniforms);
    //this._oldupdate = this.rectangle._updateIfNeeded;
    this._newupdate = (function(_super, parent) {
        function extendedUpdate() {
            _super.call(this);
            if (parent.active) {
                // update uniforms and set filter (shader program)
                let height = window.size[1];
                let band_w = this.size[0];
                let band_h = this.size[1];
                parent.uniforms.u_resolution = [band_w, band_h];
                this._pixi.filters = [parent.filter];
            } else {
                this._pixi.filters = [];
            }
        }
        return extendedUpdate;
    })(this.rectangle._updateIfNeeded, this);
    this.rectangle._updateIfNeeded = this._newupdate;
    
    this.xaxis = new Axis(window, [pos[0], pos[1]-size[1]/2], [size[0], 1.0], nticks, range);
    
    this.setMonochrome = function(b, col) {
        for(var i = 0; i < this.lines.is_signal.length; i++) {
            if (b && this.lines.is_signal[i]) {
                this.lines.overlays[i].opacity = 0.0;
                this.lines.rects[i].fillColor = col;
                this.lines.overlays[i].lineColor = col;
            } else {
                this.lines.overlays[i].opacity = 0.0;
                this.lines.rects[i].fillColor = "green";
            }
        }
    };
    this.setHighlight = function(b, v) {
        for(var i = 0; i < this.lines.is_signal.length; i++) {
            if (b && this.lines.is_signal[i]) {
                this.lines.overlays[i].opacity = 1.0;
                this.lines.rects[i].fillColor = v ? "red" : "blue";
                this.lines.overlays[i].lineColor = v ? new util.Color('#ff6969') : new util.Color('#4b7ccc');
            } else {
                this.lines.overlays[i].opacity = 0.0;
                this.lines.rects[i].fillColor = "green";
            }
        }
    };
    this.setFade = function(b, v, o) {
        if (b) {
            this.lines.alpha_filter.alpha = o;
        } else {
            this.lines.alpha_filter.alpha = 0.0;
        }
        for(var i = 0; i < this.lines.is_signal.length; i++) {
            if (b && this.lines.is_signal[i]) {
                this.lines.overlays[i].opacity = 1.0;
                this.lines.overlays[i].fillColor = v ? new util.Color('#ff6969') : new util.Color('#4b7cff');
                this.lines.overlays[i].lineColor = v ? new util.Color('#ff1010') : new util.Color('#1010ff');
            } else {
                this.lines.overlays[i].opacity = 0.0;
                this.lines.rects[i].fillColor = "green";
            }
        }
    }
    this.setLowlight = function(b) {
        for(var i = 0; i < this.lines.is_signal.length; i++) {
            if (b && !this.lines.is_signal[i]) {
                this.lines.rects[i].fillColor = [-1,-0.6,-1];
            } else {
                this.lines.rects[i].fillColor = "green";
            }
        }
    };

    // Toggle the selected support condition on or off
    this.toggleSupport = function(binary, condition, vessel, alpha) {
        
        // Because each condition has its own toggle we have to pass it on
        switch(condition) {
            case "HIGHLIGHT":
                this.setHighlight(binary, vessel);
                break;
            case "LOWLIGHT":
                this.setLowlight(binary);
                break;
            case "MONOCHROME":
                this.setMonochrome(binary, "orange");
                break;
        }
    }
        
    this.setAutoDraw = function(b) {
        this.lines.setAutoDraw(b);
        this.rectangle.setAutoDraw(b);
        this.xaxis.setAutoDraw(b);
    }; 
}

export {Axis, Lines, Band};
