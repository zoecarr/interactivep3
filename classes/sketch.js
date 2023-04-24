
let bubbles = [];

let lamb;
let flowers = [];

function preload() {
  lamb = loadImage('images/lamb.png');
  
//FOR LOOP: repeating an action a ceratain number of times, each time it uses the 'i' variable 

// ${i} - string literal: for plugging a variable into a string, popu
for (let i = 0; i < 3; i++) {
    flowers[i] = loadImage(`images/flower${i}.png`);
  }
}

function setup() {

  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('mySketch');
//i = 0; i < 50; change the 50 to change how many flowers are on the screen!
  for (let i = 0; i < 1000; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(50, 150);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked(mouseX, mouseY);
  }
}


function draw() {
  cursor(ARROW);
background(0);
  for (let i = 0; i < bubbles.length; i++) {
    //bubbles[i].move();
    bubbles[i].show();
    bubbles[i].hover(mouseX, mouseY);
  }
}

//BUBBLE: "root of all of the flowers"
//naming a class: oneword and capitalized

//"this.x is specifying the specific instance of that thing in the group, used for one thing not the entire root"
class Bubble {

  // constructor(define the properties) "this.flowe=random(flowers) means they will create random flowers from the array"
  constructor(x, y, r, img) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.flower = random(flowers);
  }

  clicked(px, py) {
    //let d = dist(px, py, this.x, this.y);
    //if (d < this.r) {
    if (
      //look for the area the image is considering image mode being centered
      //cursor is between the radius and teh opposite one, for x and y axes
      px > this.x-this.r/2 &&
      px < this.x + this.r/2 &&
      py > this.y-this.r/2 &&
      py < this.y + this.r/2
    ) {
      this.flower = lamb; //random(flowers);
    }
  }

  //first function with arguments,(px,py) can use them as arguments because they have been declared
  hover(px,py){
    if (
      //look for the area the image is considering image mode being centered
      px > this.x-this.r/2 &&
      px < this.x + this.r/2 &&
      py > this.y-this.r/2 &&
      py < this.y + this.r/2
    ) {
      cursor('grab');
    }
  }

  move() {
    // this.x = this.x + random(-2, 2);
    // this.y = this.y + random(-2, 2);

    //rotate based on cursor
   
    //math to get the angle of rotation
    let angle = atan2(mouseY - this.y, mouseX - this.x);
    rotate(angle);
  }

  show() {

    //image(this.flower, this.x , this.y, this.r, this.r);
    
    push();
    translate(this.x, this.y);
    this.move();
    imageMode(CENTER);
    image(this.flower, 0 , 0, this.r, this.r);
    pop();
  }

}

function windowResized() {
  // resize the canvas when the screen is resized.
  resizeCanvas(windowWidth, windowHeight);
  background(0)

}