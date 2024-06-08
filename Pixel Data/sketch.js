// declaring a variable
let img;

function setup() {
  createCanvas(500, 300);
  img = loadImage("home.jpg");
   noStroke();
}

function draw() {
  // background color
  background("#FCE6DC");
  // placing the image on the center
  image(img,40,25);
  // getting the mouse position
  x = mouseX
  y = mouseY
  // having the color of the pixel with the mouse position
 home = get(x,y);
  // filling the rectangle with the color of the pixel
 fill(home);
 // drawing a rectangle at the mouse position
 rect(x, y, 50, 20);
  
  
}