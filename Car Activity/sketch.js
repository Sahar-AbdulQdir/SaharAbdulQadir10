function setup() {
  // Creating a canvas with a width of 700 & height of 500
  createCanvas(700, 500);
}

function draw() {
  // background color
  background(215);
  
  // Paving whic is made of rectangles with the same size filled in black and yellow
  fill(255, 195, 0) // yellow
  rect (0,370,30,20);
  
  fill(0); // black
  rect (30,370,30,20);
  
  fill(255, 195, 0)
  rect (60,370,30,20);
  
  fill(0);
  rect (90,370,30,20);
  
  fill(255, 195, 0)
  rect (440,370,30,20);
  
  fill(0);
  rect (470,370,30,20);
  
  fill(255, 195, 0)
  rect (500,370,30,20);
  
  fill(0);
  rect (530,370,30,20);
  
  
  fill(255, 195, 0)
  rect (560,370,30,20);
  
  fill(0);
  rect (590,370,30,20);
  
  fill(255, 195, 0)
  rect (620,370,30,20);
  
  fill(0);
  rect (650,370,30,20);
  
  fill(255, 195, 0)
  rect (680,370,30,20);
  
  //
  fill(205, 151, 119)
  rect (0,387,1000,4);
  
  
 // Road which is a wide rectangle colored in a gray shade
  fill(34, 35, 41)
  rect (0,390,900,215); 
  
  //Road lines which are rectangles with the same size filled in white
  fill(255);
  rect (0,435,60,10); 
  rect (100,435,60,10);
  rect (200,435,60,10);
  rect (300,435,60,10);
  rect (400,435,60,10);
  rect (500,435,60,10);
  rect (600,435,60,10);
  
   
 // body of the car 
 fill(99,104,108); // shade of grey for the car color
 rect (120,325,325,75);
 
 fill(99,104,108);
  // a triangle which is the front part of the car 
 triangle(285,225,390,325,285,325) 
 fill(99,104,108);
 noStroke(); 
  // sqaure for the top left part of the car
 square(185,225,100)
 
  //indicators are made of yellow & red rectangles
  fill(255,51,0) // red shade
  rect (107,370,13,25);
  fill(255,255,0) // yellow shade
  rect (445,335,13,25);
  
  
  //door handles are made by using 2 black ellipes
  fill(0);
  ellipse(230,340,14,14)
  fill(0);
  ellipse(300,340,14,14)
  
  //windows 
  fill(173, 232, 244); // shade of blue
  square(195,260,45)
  // second window is made of a square & a triangle
  square(248,260,45)
  triangle(293,260,293,305,340,305)
  
  // wheels are two small white ellipse inside a big black ellipse 
  fill(0)
  ellipse(200,400,50,50);
  fill(0);
  ellipse(345,400,50,50);
  fill(255)
  ellipse(200,400,20,20);
  fill(255);
  ellipse(345,400,20,20);
  
  // Speed sign
  fill(52, 58, 64)
  rect (600,190,10,180); 
  // rounded body of the sign
  fill(0)
  ellipse(606,200,70,60);
  fill(255);
  ellipse(606,200,60,50);
  // Text (speed)
  fill(0)
  textSize(15)
  textAlign(CENTER,CENTER)
  text("60 k/m",605,200)
  
  
  
  
  
}