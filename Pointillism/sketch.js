// Declaring variables for positioning x & y and one for the image
var tree, x, y;

function preload () {
  // Loading image
  tree = loadImage("tree.jpg");
}

function setup() {
  // Creating canvas
  createCanvas(440, 350);
  // Setting background color
  background("#E7FFCB");
  noStroke();
}

function draw() {
  // Setting the x and y to a random value to use later as a value for rectangle location
  x = random(width);
  y = random(height);
  
  // Getting the color from the image at the position (x, y)
  var c = tree.get(x, y);
  fill(c[0], c[1], c[2], 400);
  
  // Drawing a rectangle at (x, y) with width 50 and height 20
  rect(x, y, 50, 20);
}
