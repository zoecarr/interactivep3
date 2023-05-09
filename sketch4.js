let c = [0, 30, 60, 80, 160, 240, 270, 330];

let keys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k']

let notes = [50, 52, 54, 55, 57, 59, 61, 62];

let x = 50;

let osc, env;

function setup() {
  let cnv = createCanvas(500, 400);
  cnv.parent('mySketch4');
  colorMode(HSB);
  
  env = new p5.Envelope(0.01, 0.1, 1, 0.5);
  
  osc = new p5.Oscillator('triangle');
  osc.start();
  osc.amp(env);
}

function draw() {
  background(220, 0, 50);
  for(let i = 0; i < 8; i++) {
    fill(0, 0, 100);
    if(keyIsPressed && key == keys[i]) {
    fill(c[i], 100,100);
      osc.freq(midiToFreq(notes[i]))
    }
   rect(25 + (x*i), 100, 40, 200);
  }
}

function keyPressed() {
  env.play();
}