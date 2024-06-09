let img;
let img2;
let img3;

function preload() {
  // Loading images before the setup function runs
  img = loadImage("IC2.jpeg");
  img2 = loadImage("Ice.jpeg");
  img3 = loadImage("Bg1-1.jpeg");
}

function setup() {
  createCanvas(700, 700); // Creating a canvas of size 700x700 pixels
  background(img3); // Setting the background to img3

  img.resize(200, 200); // Resizing the first image

  let cnv5 = createGraphics(500, 500); // Creating a graphics buffer

  // Drawing three circles to create the mask
  let circleSize = 100; // Setting the size of the circles
  let centerX = cnv5.width / 4;
  let centerY = cnv5.height / 2;
  
  // Drawing the first circle
  cnv5.circle(220, 135, 200);

  // Drawing a triangle to create the mask
  cnv5.triangle(230, 480, 120, 123, 315, 100);

  img.mask(cnv5); // Applying the mask to the first image
  image(img, 400, 210); // Displaying the masked image on the canvas

  // Creating a graphics buffer for the second image
  let cnv2 = createGraphics(500, 500);

  // Drawing three circles to create the mask
  let circleSize2 = 100; // Setting the size of the circles
  let centerX2 = cnv2.width / 2;
  let centerY2 = cnv2.height / 2;
  
  // Drawing three circles
  cnv2.circle(130, 142, 180); // First circle
  cnv2.circle(250, 130, 210); // Second circle
  cnv2.circle(360, 140, 190); // Third circle

  // Drawing a triangle to create the mask
  cnv2.triangle(240, 480, 100, 210, 410, 220);

  img2.mask(cnv2); // Applying the mask to the second image
  image(img2, 200, 200); // Displaying the masked image on the canvas
}
