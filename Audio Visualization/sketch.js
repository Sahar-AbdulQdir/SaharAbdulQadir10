// Setting up variables for the button, sound, amplitude analyzer, and volume array
let Button;
let Sound;
let amp;
let volume = [];

function preload() {
  // Loading the sound file
  Sound = loadSound('sound1.mp3');
}

function setup() {
  // Creating the canvas
  createCanvas(600, 600);
  // Setting the angle mode to degrees
  angleMode(DEGREES);
  // Setting the fill color for the button
  fill("#7C2789");
  
  // Creating the button and setting up the event listener for it
  Button = createButton('Play again');
  Button.mousePressed(Song);
  
  // Playing the sound
  Sound.play();
  // Initializing the amplitude analyzer
  amp = new p5.Amplitude();
}

function draw() {
  // Creating a gradient background
  let c1 = color("#0F1872"); // Start color 
  let c2 = color("#B8B8B8"); // End color 
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 2);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
  stroke(2);
  
  // Getting the current volume level
  let vol = amp.getLevel();
  // Pushing the volume level to the array
  volume.push(vol);
  
  // Setting the stroke color and weight
  stroke("#0F1872");
  strokeWeight(5);
  noFill();
  
  // Translating to the center of the canvas
  translate(width / 2, height / 2);
  // Beginning the shape
  beginShape();
  for (let i = 0; i < 360; i++) {
    let r = map(volume[i], 0, 1, 5, 400);
    // Calculating the x and y coordinates for the shape
    let x = r * 5 * cos(i);
    let y = r * 4 / sin(i);
    
    // Creating the vertex
    vertex(x, y);  
  }
  endShape();
  
  // Limiting the volume array length
  if (volume.length > 360) {
    // Removing elements from the volume array to control the speed
    volume.splice(1, 2);
  }
}

// Function to play or pause the sound when the button is pressed
function Song() {
  if (Sound.isPlaying()) {
    Sound.pause();
  } else {
    Sound.play();
  }
}
