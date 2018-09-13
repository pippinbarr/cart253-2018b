var codeImage;

function preload() {
  codeImage = loadImage("assets/images/code.png");
}

function setup() {
  createCanvas(600,600);
}

function draw() {
  image(codeImage,mouseX,mouseY);
}
