// this is an image with a two filters applied on it
// first filter is already shown even if you didn't hover over it
// second filter will only be applied when you hover over the right side which is another copy of the same picture
var sky; // Declare variable for the image to load it

function preload() {
  // Load the image
  sky = loadImage("OIP.jpg");
}

function setup() {
  createCanvas(370, 230);
}

function draw() {
  // Check if the mouse is over the left half of the canvas
  if (mouseX < width / 2) {
    // Draw the original image on the left half of the canvas
    image(sky, 0, 0, width / 2, height);
    
    // Create a copy of the image for the left half
    var filteredSkyLeft = sky.get(0, 0, sky.width / 2, sky.height);
    
    // Apply filter only to the left half
    var vLeft = map(mouseX, 0, width / 2, 0, 5);
    filteredSkyLeft.filter(GRAY);
    
    // Draw the filtered image on the left half of the canvas
    image(filteredSkyLeft, 0, 0, width / 2, height);
  } else {
    // Draw the original image on the left half of the canvas
    image(sky, 0, 0, width / 2, height);
  }
  
  // Check if the mouse is over the right half of the canvas
  if (mouseX > width / 2) {
    // Create a copy of the image for the right half for another filter effect
    var filteredSkyRight = sky.get(sky.width / 2, 0, sky.width / 2, sky.height);
    
    // Apply the second filter only to the right half
    var vRight = map(mouseX, width / 2, width, 0, 5);
    filteredSkyRight.filter(POSTERIZE); 
    
    // Draw the filtered image on the right half of the canvas
    image(filteredSkyRight, width / 2, 0, width / 2, height);
  } else {
    // Draw the original image on the right half of the canvas
    image(sky, width / 2, 0, width / 2, height);
  }
}
