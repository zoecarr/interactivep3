let days = [];

let weather, mood, desire;

let enter, entered;

let body = document.getElementById('html-body');

let spacex = 0;
let spacey = 0;

let changex = 0;
let changey = 0;

function setup() {
  // make the div called "mySketch" a p5.js canvas element
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('mySketch');

  enter = createButton('enter');
  enter.id('enter')
  entered = document.getElementById('enter');
  body.appendChild(entered);
  enter.mousePressed(add);

  background('#FAFAFA');
}

function draw() {


  // weather = document.getElementById('weather').value;
  mood = document.getElementById('mood').value;
  // desire = document.getElementById('desire').value;

}

function windowResized() {
  // resize the canvas when the screen is resized.
  resizeCanvas(windowWidth, windowHeight);
}

function glyph(){
  // if (weather == "sunny"){
  //   fill(235, 219, 52)
  // } else if ( weather == "gloomy"){
  //   fill(64, 59, 156)
  // }
  // noStroke();
  // rect(350+spacex, 400+spacey, 100, 100)

  if (mood == 'happy'){
    fill('#F1AE2C')
  } else if (mood == 'sad'){
    fill('#747C8E');
  }
    else if (mood == 'creative'){
    fill('#878549');
    }
    else if (mood == 'nostalgic'){
    fill('#C4CEB4');
    }
    else if (mood == 'loving'){
      fill('#D07A7A');
    }
    else if (mood == 'worried'){
      fill('#8FA5B7');
  }
    else if (mood == 'angry'){
      fill('#D61717');  
}
    else if (mood == 'grateful'){
      fill('#E2783C');
}
    else if (mood == 'calm'){
      fill('#E6E1DA');  
  }
  else if (mood == 'excited'){
    fill('#EBDC53');  
}
else if (mood == 'peaceful'){
  fill('#F6E5F3');  
}
else if (mood == 'scared'){
  fill('#2B2E45');  
}
else if (mood == 'jealous'){
  fill('#2C8D13');  
}
else if (mood == 'tired'){
  fill('#938B97');  
}
  noStroke();
  ellipse(700, 350, 700-changex, 700-changey);


  


  // if(desire == "hug"){
  //   stroke(87, 112, 250)
  // }else if (desire == "sleep"){
  //   stroke(17, 6, 145)
  // } else if(desire =="nature"){
  //   stroke(25, 97, 17)
  // }
  // strokeWeight(10);
  // line(250+spacex, 300+spacey, 450+spacex, 500+spacey)
  
  // spacex += 200;
  // if(spacex > 1000){
  //   spacex = 0;
  //   spacey += 200;
  // }

    changex += 50;
    changey += 50;
}




function add() {
  days.push({
    date: Date(),
    weather: weather,
    mood: mood,
    desire: desire
  })
  console.log(days);
  console.log("day submitted")

  glyph();
}
