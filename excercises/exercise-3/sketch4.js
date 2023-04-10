
//PART ONE, USER CLICKS< RECTANGLE APPEARS AND DROPS DOWN, ONLY ONE RECTANGLE AT A TIME
// let hasClicked = false
// let xpos = 0
// let ypos = 0

// function setup() {
//   createCanvas(400,400);
// }

// function draw() {
//   background(50);
//   rectMode(CENTER);
//   noStroke();
//   fill(255);
//   rect(mouseX, mouseY, 50, 25);
//   if (hasClicked){
//     rect(xpos, ypos, 50, 25);
//     ypos +=1;
//   }
// }

// function mousePressed(){
//   hasClicked = true;
//   xpos = mouseX;
//   ypos = mouseY;
// }

// // WITH AN ARRAY
// // USER CLICKS AND 3 RECTANGLE DROP DOWN
// let rectY = [0,15,30];

// function setup(){
//   createCanvas(400, 400);
// }

// function draw() {
//   background(50);
//   rectMode(CENTER);
//   noStroke();
//   fill(255);
  
//   for (let i =0; i < rectY.length; i ++){
//     rect((i+1)*100, rectY[i], 50, 25);
//     rectY[i] +=1;
//   }
//   }

// // MORE ADVANCED ARRAY
// // USER CLICKS AND RECATNGLES APPEAR IN CENTER< STAY ON SCREEN WHILE THEY DROP DOWN

// let rectY = []; // start with empty list

//  function setup() {
//  createCanvas(400, 400);
// }

// function draw() {
//  background(50);
//  noStroke();
//  rectMode(CENTER);
//  fill(255);

//  for (let i = 0; i < rectY.length; i++) {
//  rect(200, rectY[i], 50, 25);
//  rectY[i] += 1;
//  }
// }

// function mousePressed() {
//  rectY.push(0);
//  }


 //RECTANGLE APPEARS AT THE POSITION OF THE MOUSE CLICK AND STAY ON SCREEN AS THEY FALL (VALUES STORED)

// let rectX = []; // start with empty list
// let rectY = [];

//  function setup() {
//  createCanvas(400, 400);
// }

// function draw() {
//  background(50);
//  noStroke();
//  rectMode(CENTER);
//  fill(255);

//  for (let i = 0; i < rectY.length; i++) {
//  rect(rectX[i], rectY[i], 50, 25);
//  rectY[i] += 1;
//  }
// }

// //COMBINING INTO ONE SINGLE ARRAY
// //DOES THE SAME THING AS PREVIOUS< COMBINES rectX and rectY
// function mousePressed() {
//  rectY.push(mouseY);
//  rectX.push(mouseX);
//  }

//  let rectXY = [];
//  function setup() {
//  createCanvas(400, 400);
// }

// function draw() {
//  background(50);
//  noStroke();
//  rectMode(CENTER);
//  fill(255);
//  for (let i = 0; i < rectXY.length; i++) {
//  rect(rectXY[i][0], rectXY[i][1], 50, 25);
//  rectXY[i][1] += 1;
//  }
// }

// function mousePressed() {
//  rectXY.push([mouseX, mouseY]);
// }


//RANDOMIZING FILL COLOR
let rectXY = []; // start with empty list
 function setup() {
 createCanvas(400, 400);
}

function draw() {
 background(50);
 noStroke();
 rectMode(CENTER);
 fill(255);
 for (let i = 0; i < rectXY.length; i++) {
 fill(rectXY[i][2]);
 rect(rectXY[i][0], rectXY[i][1], 50, 25);
 rectXY[i][1] += 1;
 }
}
function mousePressed() {
 rectXY.push([mouseX, mouseY, random(255)]);

}

//
