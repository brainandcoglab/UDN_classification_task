import * as PIXI from "../lib/pixi-legacy.min.js"

// Modified from https://github.com/pixijs/pixijs/wiki/v5-Creating-filters
// default available: PIXI.Filter.defaultVertexSrc;
// Just passes outputFrame through as "rectangle"
let vertex_custom = `
attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;
varying vec4 rectangle;

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
    rectangle = outputFrame;
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
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
varying vec4 rectangle;

float random (vec2 seed) {
    return fract(sin(dot(seed.xy, vec2(12.9898,78.233)))*
        43758.5453123);
}

void main() {
    
    vec2 pos = (gl_FragCoord.xy - rectangle.xy);// / rectangle.zw;
    //vec2 pos = gl_FragCoord.xy;
    //vec2 pos = floor(-vTextureCoord * u_resolution + 0.5) + 0.5;
    pos.y += ceil(frameN / 1.0);
    vec2 seed = ceil(pos/1.0)/rectangle.zw;
    //seed *= 1.0 + mod(frameN/10.0, 10.0);
    
    float rnd = random( seed );
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
varying vec4 rectangle;

void main() {
    
    vec4 colour = texture2D(uSampler, vTextureCoord);
    
    vec2 coord = (gl_FragCoord.xy - rectangle.xy) / rectangle.zw;
    float intensity = (0.5 - abs(coord.x - 0.5)) * 3.0;
    gl_FragColor = vec4(colour.xyz * intensity, 1.0);
}
`;


export {vertex_custom, fragment_noise, fragment_line};
