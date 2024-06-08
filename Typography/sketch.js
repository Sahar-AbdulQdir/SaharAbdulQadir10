function setup() {
   // Create a canvas of 600x400 pixels
  createCanvas(600, 400); 
  
  let c1 = color("#2D4ACD"); // start color (blue)
  let c2 = color("#F4B0B5"); // end color (pink)
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 2); // map y-coordinate to a value between 0 and 2
    let c = lerpColor(c1, c2, inter);
    // Setting the stroke color
    stroke(c); 
    // Draw a horizontal line at y
    // this line paint the background
    line(0, y, width, y); 
  }
}

function draw() {
  // Setting the stroke color to white
  stroke("#FFFFFF"); 
  // Setting the fill color to black
  fill("#000000"); 
  // Setting th stroke weight to 5
  strokeWeight(5); 
  // Setting th font and size
  textFont("Poetsen One", 75); 
  // Align text to the center
  textAlign(CENTER); 
  //displaying text   
  let message = "Bathspa"; 
  let spacing = 40; // Spacing between characters

  for (let i = 0; i < message.length; i++) {
    let x = 175 + i * spacing; // Calculate x position for each character
    let y = 200 + sin(frameCount * 0.2 + i) * 5; // Calculate y position with a sine wave effect
    text(message.charAt(i), x, y); // Draw each character at (x, y)
  }

  // Draw horizontal black rectangles at the top
  fill("#000000");
  stroke("#000000");
  strokeWeight(0.9);
  rect(20, 100, 560, 10);
  rect(20, 80, 560, 10);
  rect(20, 60, 560, 10);
  rect(20, 40, 560, 10);
  rect(20, 20, 560, 10);
  
  // Draw vertical black rectangles on the right
  rect(450, 0, 10, 380);
  rect(470, 0, 10, 380);
  rect(490, 0, 10, 380);
  rect(510, 0, 10, 380);
  rect(530, 0, 10, 380);
  rect(550, 0, 10, 380);
  rect(570, 0, 10, 380);
  
  // Draw horizontal black rectangles at the bottom
  rect(20, 250, 560, 10);
  rect(20, 270, 560, 10);
  rect(20, 290, 560, 10);
  rect(20, 310, 560, 10);
  rect(20, 330, 560, 10);
  rect(20, 350, 560, 10);
  rect(20, 370, 560, 10);
  
  // Draw vertical black rectangles on the left
  rect(10, 20, 10, 380);
  rect(30, 20, 10, 380);
  rect(50, 20, 10, 380);
  rect(70, 20, 10, 380);
  rect(90, 20, 10, 380);
  rect(110, 20, 10, 380);
  rect(130, 20, 10, 380);
  
  // Draw black rectangles at the borders
  rect(0, 0, 10, 400); // Left border
  rect(0, 0, 450, 20); // Top border
  rect(140, 380, 460, 20); // Bottom border
  rect(580, 0, 20, 400); // Right border
}
