
let mySound1, mySound2, mySound3, mySound4, mySound5, mySound6;

var shape;

var img;

var x;

let symmetry = 6;   

let angle = 360 / symmetry;

function preload(){

  soundFormats('mp3', 'ogg');
    mySound1 = loadSound('../excercises/exercise-4/audio/Plantasia.mp3');
    mySound2 = loadSound('../excercises/exercise-4/audio/soundbowl_F.mp3');
    mySound3 = loadSound('../excercises/exercise-4/audio/soundbowl1.mp3');
    mySound4 = loadSound('../excercises/exercise-4/audio/soundbowl_inG.mp3');
    mySound5 = loadSound('../excercises/exercise-4/audio/soundbowl_Fx3.mp3');
    mySound6 = loadSound('../excercises/exercise-4/audio/soundbowl_v2.mp3');

    shape = loadImage('../images/shapes/A.png');
    shape2 = loadImage('../images/shapes/B.png');
    shape3 = loadImage('../images/shapes/B-1.png');
    shape4 = loadImage('../images/shapes/Bb.png');
    shape5 = loadImage('../images/shapes/C.png');
    shape6 = loadImage('../images/shapes/D.png');
    shape7 = loadImage('../images/shapes/drum.png');
    shape8 = loadImage('../images/shapes/E.png');
    shape9 = loadImage('../images/shapes/F.png');
    shape10 = loadImage('../images/shapes/Gm.png');

    bg = loadImage('../images/grainbackground.png')
    // shape = loadImage(/images/shapes/A.png);
}

function setup() {

  
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('mySketch2');
  angleMode(DEGREES);
  background (bg, 100);
  blendMode(SCREEN)

}

function draw(){
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmx = pmouseX - width / 2;
    let pmy = pmouseY - height / 2;

  }

}

function keyPressed(){
  
  //A
  if (keyCode == SHIFT && key === 'a'|| key == 'A'){
    mySound2.loop();
    blendMode(MULTIPLY);
    image(shape, random(0, width), random(0, height));
  }

  if (key === 'a'|| key == 'A'){
    mySound2.play();
    blendMode(MULTIPLY);
    image(shape, random(0, width), random(0, height));
  }


  //B
  if (keyCode == SHIFT && key === 'b'|| key == 'B'){
    mySound3.loop();
    blendMode(MULTIPLY);
    image(shape2, random(0, width), random(0, height));
  }

  if (key === 'b'|| key == 'B'){
    mySound3.play();
    blendMode(MULTIPLY)
    image(shape2, random(0, width), random(0, height));

}

//B-1
if (keyCode == SHIFT && key === 'h'|| key == 'H'){
  mySound4.loop();
  blendMode(MULTIPLY);
  image(shape3, random(0, width), random(0, height));
}

if (key === 'h'|| key == 'H'){
  mySound4.play();
  blendMode(MULTIPLY)
  image(shape3, random(0, width), random(0, height));
}

//Bb
if (keyCode == SHIFT && key === 't'|| key == 'T'){
  mySound5.loop();
  blendMode(MULTIPLY);
  image(shape4, random(0, width), random(0, height));
}

if (key === 't'|| key == 'T'){
  mySound5.play();
  blendMode(MULTIPLY)
  image(shape4, random(0, width), random(0, height));
}

//C
if (keyCode == SHIFT && key === 'c'|| key == 'C'){
  mySound6.loop();
  blendMode(MULTIPLY);
  image(shape5, random(0, width), random(0, height));
}

if (key === 'c'|| key == 'C'){
  mySound6.play();
  blendMode(MULTIPLY)
  image(shape5, random(0, width), random(0, height));
}

//D
if (keyCode == SHIFT && key === 'd'|| key == 'D'){
  mySound1.loop();
  blendMode(MULTIPLY);
  image(shape6, random(0, width), random(0, height));
}

if (key === 'd'|| key == 'D'){
  mySound1.play();
  blendMode(MULTIPLY)
  image(shape6, random(0, width), random(0, height));
}

//drum
if (keyCode == SHIFT && key === 'k'|| key == 'K'){
  mySound2.loop();
  blendMode(MULTIPLY);
  image(shape7, random(0, width), random(0, height));
}

if (key === 'k'|| key == 'K'){
  mySound2.play();
  blendMode(MULTIPLY)
  image(shape7, random(0, width), random(0, height));
}

//E
if (keyCode == SHIFT && key === 'e'|| key == 'E'){
  mySound2.loop();
  blendMode(MULTIPLY);
  image(shape8, random(0, width), random(0, height));
}

if (key === 'e'|| key == 'E'){
  mySound2.play();
  blendMode(MULTIPLY)
  image(shape8, random(0, width), random(0, height));
}

//F
if (keyCode == SHIFT && key === 'f'|| key == 'F'){
  mySound2.loop();
  blendMode(MULTIPLY);
  image(shape9, random(0, width), random(0, height));
}

if (key === 'f'|| key == 'F'){
  mySound2.play();
  blendMode(MULTIPLY)
  image(shape9, random(0, width), random(0, height));
}

//Gm
if (keyCode == SHIFT && key === 'g'|| key == 'G'){
  mySound2.loop();
  blendMode(MULTIPLY);
  image(shape10, random(0, width), random(0, height));
}

if (key === 'g'|| key == 'G'){
  mySound2.play();
  blendMode(MULTIPLY)
  image(shape10, random(0, width), random(0, height));
}
}