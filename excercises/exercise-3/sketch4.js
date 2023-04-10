
//PART ONE, USER CLICKS< RECTANGLE APPEARS AND DROPS DOWN, ONLY ONE RECTANGLE AT A TIME
let hasClicked = false
let xpos = 0
let ypos = 0

function setup() {
  createCanvas(400,400);

}

function draw() {
  background(50);
  rectMode(CENTER);
  noStroke();
  fill(255);
  rect(mouseX, mouseY, 50, 25);
  if (hasClicked){
    rect(xpos, ypos, 50, 25);
    ypos +=1;
  }
}

function mousePressed(){
  hasClicked = true;
  xpos = mouseX;
  ypos = mouseY;
}



