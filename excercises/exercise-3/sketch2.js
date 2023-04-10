let mic;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(255,255,255);
  
  let vol = mic.getLevel();
  fill(20,20,20);
  circle(width/2, height/2, vol*width*3);

    // get the current volume
  // 0 gives you the left channel and 1 the right channel
  volumeLeft = mic.getLevel(0);
  volumeRight = mic.getLevel(1);
  // volume ranges from 0-1, but we want the circle bigger
  // this maps the vol (from 0-1 to 10-600
  diameterLeft = map(volumeLeft, 0, 1, 10, 600);
  diameterRight = map(volumeRight, 0, 1, 10, 600);

  fill(0,255,0);
  ellipse(width / 2, height / 2, diameterRight);
  fill(0,0,255);
  ellipse(width / 2, height / 2, diameterLeft);
  noStroke();
}

function mousePressed() {
  userStartAudio();
}

