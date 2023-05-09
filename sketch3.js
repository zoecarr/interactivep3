let osc, env;
let amp;
let freq, pitch;
let fft;

let t1 = 0.1; // attack time in seconds
let l1 = 0.7; // attack level 0.0 to 1.0
let t2 = 0.3; // decay time in seconds
let l2 = 0.1; // decay level  0.0 to 1.0

// let symmetry = 6;   

// let angle = -0

function setup() {
let cnv = createCanvas(windowWidth, windowHeight);
cnv.parent('mySketch2');
// push();
// translate(width /2, windowHeight/2);
// cnv.rotate(angle);
// pop();
angleMode(DEGREES);
background(300);
blendMode(HARD_LIGHT);

noStroke();
osc= new p5.Oscillator();
env = new p5.Envelope();
env.setADSR(t1, l1, t2, l2);

amp = new p5.Amplitude();
let vol = amp.getLevel();
// env.play();
osc.amp(env);
osc.start();
// env.play();





// midiToFreq();
}

function draw() {


  // translate(width / 2, height / 2);

  // let spectrum = fft.analyze();

  // beginShape();
  // for (i = 0; i < spectrum.length; i++) {
  //   vertex(i, map(spectrum[i], 0, 255, height, 0));
  // }
  // endShape();

  
// let c = map(mouseX, 0, width, 0, width);
// let b = map(mouseY, 0, width, 0, width);

osc.freq(midiToFreq(freq));

// ellipse (c, 400, b)
// let pitch = map(mouseX, 0, width, 100, 500);
// let volume = map(mouseY, 0, height, 1, 0);
// env.freq(pitch);
// env.amp(volume);


// if (keyIsDown(49)){
//    env.play();
//    ellipse (c, 400, b);

// }

// if (keyIsDown(50)){
//   oscsq.start();
//   ellipse (c, 400, b);
// }

// if (keyIsDown(51)){
//   oscsaw.start();
//   ellipse (c, 400, b);
// }

// if (keyIsDown(52)){
//  ellipse (c, 400, b);
}
// }

function keyPressed(){

  
  let a = 240

let c = map(mouseX, 0, width, 0, 360);
let b = map(mouseY, 0, width, 0, 360);

// ellipse (c, 400, b)
// let pitch = map(mouseX, 0, width, 100, 500);
// let volume = map(mouseY, 0, height, 1, 0);
// osc.freq(pitch);
// osc.amp(volume);
// osc.start();
env.play(osc);

let x = random(width);
let y =random(height);

  if (key == '1'){
   
    osc.setType('sine');
    osc.freq(midiToFreq(50));
     env.play(osc);
    fill (235, 64, 52, a);
    ellipse (x,y, c);
  }
  if (key == '2'){
    env.play(osc);
    osc.setType('sine');
    osc.freq(midiToFreq(51));
    fill (237, 134, 7, a);
    ellipse (x,y, c);
  }
  if (key == '3'){
    env.play(osc);
    osc.setType('sine');
    osc.freq(midiToFreq(52));
    fill (252, 238, 81, a);
    ellipse (x,y, c);
  }

  if (key == '4'){
    env.play(osc);
    osc.setType('sine');
    osc.freq(midiToFreq(54));
    fill (50, 125, 52, a);
    ellipse (x,y, c);
  }

  if (key == '5'){
    env.play();
    osc.setType('sine');
    osc.freq(midiToFreq(55));
    fill (33, 105, 207, a); 
    ellipse (x,y, c);
  }

  if (key == '6'){
    env.play();
    osc.setType('sine');
    osc.freq(midiToFreq(57));
    fill (0, 36, 120, a);
    ellipse (x,y, c);
  }
  if (key == '7'){
    env.play();
    osc.setType('sine');
    osc.freq(midiToFreq(59));
    fill (134, 105, 194, a);
    ellipse (x,y, c);
  }

  if (key == '8'){
    env.play();
    osc.setType('sine');
    osc.freq(midiToFreq(60));
    fill (167, 112, 181, a);
    ellipse (x,y, c);
  }

  if (key == '9'){
    osc.setType('sine');
    osc.freq(500);
    osc.freq(midiToFreq(61));
    fill (240, 77, 210, a);
    ellipse (x,y, c);
  }
  
  if (key == '0'){
    osc.setType('sine');
    osc.freq(midiToFreq(70));
    fill (240, 22, 65, a);
    ellipse (x,y, c);
  }


  if (key == 'q'){
    env.play(osc);
    osc.setType('square');
    osc.freq(midiToFreq(50));
    fill (235, 64, 52, a);
    square (x,y, c);
  }
  if (key == 'w'){
    env.play(osc);
    osc.setType('square');
    osc.freq(midiToFreq(51));
    fill (237, 134, 7, a);
    square (x,y, c);
  }
  if (key == 'e'){
    env.play(osc);
    osc.setType('square');
    osc.freq(midiToFreq(52));
    fill (252, 238, 81, a);
    square (x,y, c);
  }

  if (key == 'r'){
    env.play(osc);
    osc.setType('square');
    osc.freq(midiToFreq(54));
    fill (50, 125, 52, a);
    square (x,y, c);
  }

  if (key == 't'){
    env.play(osc);
    osc.setType('square');
    osc.freq(midiToFreq(55));
    fill (33, 105, 207, a); 
    square (x,y, c);
  }

  if (key == 'y'){
    env.play(osc);
    osc.setType('square');
    osc.freq(midiToFreq(57));
    fill (0, 36, 120, a);
    square (x,y, c);
  }
  
  
  if (key == 'u'){
    env.play(osc);
    osc.setType('square');
    osc.freq(midiToFreq(59));
    fill (134, 105, 194, a);
    rect(x,y,c);
  }

  if (key == 'i'){
    env.play(osc);
    osc.setType('square');
    osc.freq(midiToFreq(60));
    fill (167, 112, 181, a);
    square (x,y, c);
  }

  if (key == 'o'){
    env.play(osc);
    osc.setType('square');
    osc.freq(500);
    osc.freq(midiToFreq(61));
    fill (240, 77, 210, a);
    square (x,y, c);
  }
  
  if (key == 'p'){
    env.play(osc);
    osc.setType('square');
    osc.freq(midiToFreq(62));
    fill (240, 22, 65, a);
    square (x,y, c);
  }

  if (key == 'a'){
    env.play(osc);
    osc.setType('sawtooth');
    osc.freq(midiToFreq(50));
    fill (235, 64, 52, a);
    rect (x,y, x, y);
  }

  if (key == 's'){
    env.play(osc);
    osc.setType('sawtooth');
    osc.freq(midiToFreq(51));
    fill (237, 134, 7, a);
    rect (x,y, x,y);
  }
  if (key == 'd'){
    env.play(osc);
    osc.setType('sawtooth');
    osc.freq(midiToFreq(52));
    fill (252, 238, 81, a);
    rect (x,y, x,y);
  }

  if (key == 'f'){
    env.play(osc);
    osc.setType('sawtooth');
    osc.freq(midiToFreq(54));
    fill (50, 125, 52, a);
    rect (x,y, x,y);
  }

  if (key == 'g'){
    env.play(osc);
    osc.setType('sawtooth');
    osc.freq(midiToFreq(55));
    fill (33, 105, 207, a); 
    rect (x,y, x,y);

  }

  if (key == 'h'){
    env.play(osc);
    osc.setType('sawtooth');
    osc.freq(midiToFreq(57));
    fill (0, 36, 120, a);
    rect (x,y, x,y);
  }
  
  
  if (key == 'j'){
    env.play(osc);
    osc.setType('sawtooth');
    osc.freq(midiToFreq(59));
    fill (134, 105, 194, a);
    rect (x,y, x,y);
  }

  if (key == 'k'){
    env.play(osc);
    osc.setType('sawtooth');
    osc.freq(midiToFreq(60));
    fill (167, 112, 181, a);
    rect (x,y, x,y);
  }

  if (key == 'l'){
    env.play(osc);
    osc.setType('sawtooth');
    osc.freq(500);
    osc.freq(midiToFreq(61));
    fill (240, 77, 210, a);
    rect (x,y, x,y);
  }
  
  if (key == ';'){
    env.play(osc);
    osc.setType('sawtooth');
    osc.freq(midiToFreq(62));
    fill (240, 22, 65, a);
    rect (x,y, x,y);
  }

  if (key == 'z'){
    env.play(osc);
    osc.setType('triangle');
    osc.freq(midiToFreq(50));
    fill (240, 22, 65, a);
    triangle(x,y,x+c,y-c, x-c, y-c,);
  }

  if (key == 'x'){
    env.play(osc);
    osc.setType('triangle');
    osc.freq(midiToFreq(51));
    fill (237, 134, 7, a);
    triangle(x,y,x+c,y-c, x-c, y-c,);
  }
  if (key == 'c'){
    env.play(osc);
    osc.setType('triangle');
    osc.freq(midiToFreq(52));
    fill (252, 238, 81, a);
    triangle(x,y,x+c,y-c, x-c, y-c,);
  }

  if (key == 'v'){
    env.play(osc);
    osc.setType('triangle');
    osc.freq(midiToFreq(54));
    fill (50, 125, 52, a);
    triangle(x,y,x+c,y-c, x-c, y-c,);
  }

  if (key == 'b'){
    env.play(osc);
    osc.setType('triangle');
    osc.freq(midiToFreq(55));
    fill (33, 105, 207, a); 
    triangle(x,y,x+c,y-c, x-c, y-c,);

  }

  if (key == 'n'){
    env.play(osc);
    osc.setType('triangle');
    osc.freq(midiToFreq(57));
    fill (0, 36, 120, a);
    triangle(x,y,x+c,y-c, x-c, y-c,);
  }
  
  
  if (key == 'm'){
    env.play(osc);
    osc.setType('triangle');
    osc.freq(midiToFreq(59));
    fill (134, 105, 194, a);
    triangle(x,y,x+c,y-c, x-c, y-c,);  }

  if (key == ','){
    env.play(osc);
    osc.setType('triangle');
    osc.freq(midiToFreq(60));
    fill (167, 112, 181, a);
    triangle(x,y,x+c,y-c, x-c, y-c,);  }

  if (key == '.'){
    env.play(osc);
    osc.setType('triangle');
    osc.freq(500);
    osc.freq(midiToFreq(61));
    fill (240, 77, 210, a);
    triangle(x,y,x+c,y-c, x-c, y-c,);  }
  
  if (key == '/'){
    env.play(osc);
    osc.setType('triangle');
    osc.freq(midiToFreq(62));
    fill (240, 22, 65, a);
    triangle(x,y,x+c,y-c, x-c, y-c,);  }
 
   if (keyCode == ENTER) {
    saveCanvas('myCanvas', 'jpg');
  }
  }

// function mousePressed(){
// if (env.isPlaying){
//   env.pause();
// }
// else {
//   env.play();
// }


  


// function keyDown(key === '1'){
// 	osctri.start();
// }

// function keyIsReleased(){
// 	osctri.stop();
// }
