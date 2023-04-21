let shell, spiky, starfish, swirlyshell, sanddollar;
let sampleIsLooping = false;

// //declare variable up at the top
let mySound1, mySound2, mySound3, mySound4, mySound5, mySound6;


function preload(){

    soundFormats('mp3', 'ogg');
    mySound1 = loadSound('../excercises/exercise-4/audio/Plantasia.mp3');
    mySound2 = loadSound('../excercises/exercise-4/audio/soundbowl_F.mp3');
    mySound3 = loadSound('../excercises/exercise-4/audio/soundbowl1.mp3');
    mySound4 = loadSound('../excercises/exercise-4/audio/soundbowl_inG.mp3');
    mySound5 = loadSound('../excercises/exercise-4/audio/soundbowl_Fx3.mp3');
    mySound6 = loadSound('../excercises/exercise-4/audio/soundbowl_v2.mp3');
  
  }

  
function setup(){
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');

    spiky = createImg("../excercises/exercise-4/images/spiky.png");
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
    spiky.doubleClicked(loopSpiky);
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

  function loopSpiky(){
    if (sampleIsLooping) {
        mySound6.loop();
  
        sampleIsLooping = true
        text('Click to stop', width/2, height/2)
      }
        else {
          mySound6.stop();
    
          sampleIsLooping = false;
          text('Click to loop!', width / 2, height / 2);
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

  function doubleClicked() {
    if (sampleIsLooping) {
      mySound1.loop();

      sampleIsLooping = true
      text('Click to stop', width/2, height/2)
    }
      else {
        mySound1.stop();
  
        sampleIsLooping = false;
        text('Click to loop!', width / 2, height / 2);
  }
}
  
  


  
  function windowResized() {
    // resize the canvas when the screen is resized.
    resizeCanvas(windowWidth, windowHeight);
  }
