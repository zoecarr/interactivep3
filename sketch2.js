
let mySound1, mySound2, mySound3, mySound4, mySound5, mySound6;

var shape;

let img;

function preload(){

  soundFormats('mp3', 'ogg');
    mySound1 = loadSound('../excercises/exercise-4/audio/Plantasia.mp3');
    mySound2 = loadSound('../excercises/exercise-4/audio/soundbowl_F.mp3');
    mySound3 = loadSound('../excercises/exercise-4/audio/soundbowl1.mp3');
    mySound4 = loadSound('../excercises/exercise-4/audio/soundbowl_inG.mp3');
    mySound5 = loadSound('../excercises/exercise-4/audio/soundbowl_Fx3.mp3');
    mySound6 = loadSound('../excercises/exercise-4/audio/soundbowl_v2.mp3');

    shape = loadImage('/images/shapes/A.png');
    // shape = loadImage(/images/shapes/A.png);
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('mySketch2');

  // shape1 = createImg("/images/shapes/A.png");
  //   shape1.class('shapes');
}

function draw(){
  background(355);
}

function keyPressed(){
  if (key === 'a'){
    mySound1.play();
    image(shape,50,50,50,50);
  }
}