let input;
let img;

var image;

function setup() {
  createCanvas(windowWidth, windowHeight)
  input = createFileInput(handleFile);
  input.position(0,0);
}

function draw() {
  background(255);
  if (img) {
    image(img, 0, 0, width, height);

  } 
  var tileCountX = mouseX / 3 + 1;
  var tileCountY = mouseY / 3 + 1;
  var stepX = width / tileCountX;
  var stepY = height / tileCountY;
  for (var gridY = 0; gridY < height; gridY += stepY) {
    for (var gridX = 0; gridX < width; gridX += stepX) {
      image(img, gridX, gridY, stepX, stepY);
    }
  }
}

function handleFile(file) {
  print(file);
  if (file.type === 'image') {
    img = createImg(file.data, '');
    img.hide();
  } else {
    img = null;
  }
}

