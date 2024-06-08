
function setup() {
  // Creating a canvas of 600x600 pixels
  createCanvas(600, 600);
  
  // Setting the background to white initially
  background(255);
  
  // Generating a random color with a range for RGB values
  let Color = color(random(2), random(255), random(255));
  stroke(Color); // Setting stroke to the random color
  fill(Color); // Setting fill to the random color

  // Setting the background color to dark (almost black)
  background(20);

  // Looping through the canvas in a grid pattern
  for (let x = 0; x < width; x += 30) {
    for (let y = 0; y < height; y += 30) {
      // Randomly deciding whether to draw an ellipse or rectangle
      let shape = random(2);
      
      if (shape < 1) {
        // Generating a color for the ellipse
        let rectColorA = color(random(255, 173, 173), random(255, 255, 252), random(155, 246, 255));
        stroke(rectColorA); // Setting stroke to the ellipse color
        fill(rectColorA); // Setting fill to the ellipse color
        // Drawing an ellipse at (x, y) with width 50 and height 3
        ellipse(x, y, 50, 3);
      } else {
        // Generating a color for the rectangle
        let rectColorB = color(random(132, 255, 201), random(170, 178, 255), random(236, 160, 255));
        stroke(rectColorB); // Setting stroke to the rectangle color
        fill(rectColorB); // Setting fill to the rectangle color
        // Drawing a rectangle at (x, y) with width and height 25
        rect(x, y, 25, 25);
      }
    }
  }
}
