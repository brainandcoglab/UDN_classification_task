import * as PIXI from "../lib/pixi-legacy.min.js"

// Modified from https://github.com/pixijs/pixijs/wiki/v5-Creating-filters
// default available: PIXI.Filter.defaultVertexSrc;
// Just passes outputFrame through as "rectangle"
let vertex_custom = `
attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;
varying vec2 filterCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
    filterCoord = vTextureCoord * inputSize.xy / outputFrame.zw;
}
`;

// Not sure whether scrolling or just random noise everywhere is better,
// But this can do either
let fragment_noise =  `
#ifdef GL_ES
precision mediump float;
#endif

uniform float frameN;
uniform vec2 u_resolution;
varying vec2 filterCoord;

float random (vec2 seed) {
    return fract(sin(dot(seed.xy, vec2(12.9898,78.233)))*
        43758.5453123);
}

void main() {
    
    vec2 pos = filterCoord * u_resolution * 600.0;
    pos.y -= ceil(frameN / 1.0);
    vec2 seed = mod(ceil(pos), 1000.0);
    
    float rnd = random( seed/10.0 );
    gl_FragColor = vec4(0.0,rnd-0.7, 0.0, 0.2);
}
`;
// Fragment shader for each line
let fragment_line =  `
#ifdef GL_ES
precision mediump float;
#endif

uniform sampler2D uSampler;
varying vec2 vTextureCoord;
varying vec2 filterCoord;

void main() {
    
    vec4 colour = texture2D(uSampler, vTextureCoord);
    
    float intensity = (0.5 - abs(filterCoord.x - 0.5)) * 3.0;
    gl_FragColor = vec4(colour.xyz * intensity, 1.0);
}
`;


export {vertex_custom, fragment_noise, fragment_line};
