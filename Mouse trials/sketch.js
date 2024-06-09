
var d = 50; // Declaring a variable d with value 50

function setup() {
  createCanvas(600, 400); // Creating a canvas of size 600x400 pixels

  // Start color (purple)
  let c1 = color("#DF4DF8"); 
  // End color (pink)
  let c2 = color("#FFE3E5"); 

  // Looping through each pixel row on the canvas
  for (let y = 0; y < height; y++) {
    // Mapping the y position to a value between 0 and 2
    let inter = map(y, 0, height, 0, 2);
    // Interpolating between c1 and c2 based on inter
    let c = lerpColor(c1, c2, inter);
    // Setting the stroke color to the interpolated color
    stroke(c);
    // Drawing a horizontal line across the canvas at the current y position
    line(0, y, width, y);
  }

  // Setting the stroke color to semi-transparent black
  stroke(0, 100);
}

function draw() {
  // Array of colors to choose from for the shapes
  let colors = [
    "#FFCBF2", "#F3C4FB", "#ECBCFD", "#E5B3FE", "#E2AFFF", 
    "#DEAAFF", "#D8BBFF", "#D0D1FF", "#C8E7FF", "#C0FDFF", 
    "#FFCBF2", "#F3C4FB", "#ECBCFD", "#E5B3FE", "#E2AFFF", 
    "#DEAAFF", "#D8BBFF", "#D0D1FF", "#C8E7FF", "#C0FDFF"
  ];

  // Randomly selecting a color from the array
  let rectColor = random(colors);

  // Setting x and y to the current mouse position
  x = mouseX;
  y = mouseY;

  // Setting the fill color to the randomly selected color
  fill(color(rectColor));

  // Drawing the first shape with bezier curves
  beginShape();
  vertex(x, y); // Starting vertex at mouse position
  bezierVertex(200, 130, 453, 333, x, y); // Control points and ending point at mouse position
  endShape(CLOSE);

  // Drawing the second shape with bezier curves
  beginShape();
  vertex(x, y); // Starting vertex at mouse position
  bezierVertex(400, 230, 53, 33, x, y); // Control points and ending point at mouse position
  endShape(CLOSE);
}
