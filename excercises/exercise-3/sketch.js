let input, button, result, question, submit, answer;

// let Answer1;

let c;
// let circles

let colorInput = document.getElementById('color-input');

function setup() {
    // make the div called "mySketch" a p5.js canvas element
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');

    result = createElement('p', 'type a color');
    result.style('font-size', '30px');
    result.style('margin', '0px');
    result.style('text-align', 'center');
    result.id('answer');
    answer = document.getElementById('answer');
    colorInput.appendChild(answer);

    input = createInput('');
    input.id('question');

// this puts it inside of the div in html, which allows it to show up in the window that we've created
    question = document.getElementById('question');
    colorInput.appendChild(question);

  
    button = createButton('submit');
    button.id('submit');

    //making it usable in javascript
    submit = document.getElementById('submit');
    colorInput.appendChild(submit);
    button.mousePressed(output);

  }
  
  function draw() {

  }
  
  function windowResized() {
    // resize the canvas when the screen is resized.
    resizeCanvas(windowWidth, windowHeight);
}

// function myInputEvent() {
//   console.log('you are typing: ', this.value());
// }

function output() {
  const answers = input.value();
  input.value('');

  let answer1 = createP('');
  answer1.id('answer-1')
  answer1.style('font-size', '30px');
  answer1.style('margin', '0px');

  let Answer1 = document.getElementById('answer-1');
  colorInput.appendChild(Answer1);
  Answer1.innerHTML = answers;

  //if you stop here and keep everything under this commented, the answer will be what the user inputs

  if (answers == "blue") {
    background(0,0,255);
    Answer1.innerHTML = answers;
    let a = createA('next.html', 'next');
    a.id('next');
    colorInput.appendChild(next);
    c = (100,0,250);
    circles();
  } else if (answers == "red"){
    background(255,0,0);
    Answer1.innerHTML = answers;
  } else if (answers == "green"){
    background(0,255,0);
    Answer1.innerHTML = answers;
  } else if(answers == "magenta") {
    background(255,0,255);
    Answer1.innerHTML = answers;
  }
  
  else {
    Answer1.innerHTML = "i don't know that color";
  }

  function circles(){
    fill(c);
    ellipse(200,200,200,200);
  }
}


