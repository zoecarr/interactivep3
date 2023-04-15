// p5 sound library https://p5js.org/reference/#/libraries/p5.sound

// let violet, iris, jasmine;
let shell, spiky, starfish, swirlyshell, sanddollar;

// //declare variable up at the top
let mySound1, mySound2, mySound3, mySound4, mySound5, mySound6;

// var dragging = false; // Is the object being dragged?


// //load sounds before you use them
function preload(){

  soundFormats('mp3', 'ogg');
  mySound1 = loadSound('audio/Plantasia.mp3');
  mySound2 = loadSound('audio/soundbowl_F.mp3');
  mySound3 = loadSound('audio/soundbowl1.mp3');
  mySound4 = loadSound('audio/soundbowl_inG.mp3');
  mySound5 = loadSound('audio/soundbowl_Fx3.mp3');
  mySound6 = loadSound('audio/soundbowl_v2.mp3');

}


function setup() {
    // make the div called "mySketch" a p5.js canvas element
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');

    //play sound when mouse is pressed on the canvas
    // cnv.mousePressed(toggleSound);

    // violet = createImg("images/violet.png");
    // violet.class('flower');
    // violet.position(200, 300);

    // iris = createImg("images/iris.png");
    // iris.class('flower');
    // iris.position(700, 300);

    // jasmine = createImg("images/jasmine.png");
    // jasmine.class('flower');
    // jasmine.position(1200, 300);

    spiky = createImg("images/spiky.png");
    spiky.class('item');
    spiky.position(20,160);

    shell = createImg("images/shell.png");
    shell.class('item');
    shell.position(580, 550);

    swirlyshell = createImg("images/swirlyshell.png");
    swirlyshell.class('item');
    swirlyshell.position(890, 190);
    
   starfish = createImg("images/starfish.png");
   starfish.class('item');
    starfish.position(50, 500);

    sanddollar = createImg("images/sanddollar.png");
    sanddollar.class('item');
    sanddollar.position(330, 20);
    
  }
  
  function draw() {
    background('#DCD1C6');
    spiky.mousePressed(makeSpiky);
    shell.mousePressed(makeShell);
    starfish.mousePressed(makeStarfish);
    sanddollar.mousePressed(makeSanddollar);
    swirlyshell.mousePressed(makeSwirlyShell);
  }


//if its plaing it will pause it when clicked and if its not it will start, pause and stop are different
  function makeSpiky() {
    if (mySound6.isPlaying()){
      mySound6.pause();
    } else {
      mySound6.play();
    }
  }

  function makeShell() {
    if (mySound2.isPlaying()){
      mySound2.pause();
    } else {
      mySound2.play();
    }
  }


  function makeStarfish() {
    if (mySound3.isPlaying()){
      mySound3.pause();
    } else {
      mySound3.play();
    }
  }

  function makeSanddollar() {
    if (mySound4.isPlaying()){
      mySound4.pause();
    } else {
      mySound4.play();
    }
  }

  function makeStarfish() {
    if (mySound5.isPlaying()){
      mySound5.pause();
    } else {
      mySound5.play();
    }

  }

    function makeSwirlyShell() {
      if (mySound1.isPlaying()){
        mySound1.pause();
      } else {
        mySound1.play();
      }
      
  }
  

  
  function windowResized() {
    // resize the canvas when the screen is resized.
    resizeCanvas(windowWidth, windowHeight);
}
