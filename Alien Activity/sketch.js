function setup() {
  createCanvas(600, 550);
}

function draw() {
  background(25, 43, 194);
  drawStars(5); // Draw 5 stars
  strokeWeight(0)
  //moon
  noStroke()
  fill(222, 226, 230)
  beginShape();
  vertex(600, 700);
  bezierVertex(650,150,-60,200,0,700);
  endShape(CLOSE);
  
  
  fill(173, 181,189) // grey shade for the circles in the moon
  ellipse(170,504,50,50);
  ellipse(270,504,50,50);
  ellipse(420,400,50,50);
  ellipse(70,504,50,50);
  ellipse(500,440,50,50);
  ellipse(300,410,90,90);
  ellipse(400,520,80,80);
  ellipse(180,390,80,80);

  
  //Face
  beginShape()
  fill(0,255,0) // green color
  ellipse(350,140,180,110)
  
  //cheeks
  fill(255, 204, 201) // pink for the cheeks
  ellipse(390,140,20,10)
  
  fill(255, 204, 201)
  ellipse(310,140,20,10)
  
  //smile
  
  fill(0);
  stroke(3);
  beginShape();
  vertex(310, 160);
  bezierVertex(320, 180, 360, 190, 390, 160);
  endShape();
  
  
  //left eye
  fill(0)
  ellipse(320,130,30,20)
  //eyesball
  fill(255)
  ellipse(315,128,11,9)
  
  //right eye
  fill(0)
  ellipse(380,130,30,20)
  //eyesball
  fill(255)
  ellipse(374,128,11,9)
  
  //left eye
  fill(0)
  ellipse(350,110,30,20)
  //eyesball
  fill(255)
  ellipse(343,109.5,11,9)
  
  
  strokeWeight(5)
  fill(0,255,0)
  line(315,90,270,35)
  line(380,90,400,35)
  
  strokeWeight(0)
  fill(0,255,0)
  ellipse(400,35,25,20)
  
  
  strokeWeight(0)
  fill(0,255,0)
  ellipse(270,35,25,20)
  endShape()
  
  //body
  fill(0,255,0);
  rect(300,200,100,130);
  
  //belt
  strokeWeight(0)
  fill(0,205,0)
  rect(305,185,90,18)
  rect(300,270,100,15)
  fill(0,90,0)
  rect(331,267,35,20)
  strokeWeight(2)
  line(365,267,333,287)
  line(332,267,365,287)
  
 
  //feets
  
  strokeWeight(1)
  fill(0,255,0);
  ellipse(310,330,70,30);
  ellipse(385,330,70,30);

  //arms
  push()
  stroke(1)
  fill(0,255,0);
  rotate(-0.5) // rotate the arms
  ellipse(250,390,30,80);
  rotate(0.9)
  ellipse(360,90,30,80);
  // a big rectangle that goverd all the canvas to look like a wrapper 
  pop()
  // the rectangle is transparent so other elements can be shown
  fill(202, 240, 248,100)
  rect(0,0,600,700)
  push()
  
  // rotating the text rectangles
  rotate(-0.6)
  rect(-100,100,340,45)
  // Text (speed)
  fill(255, 252, 49) //text color (yellow)
  stroke(1)
  textSize(15)
  textAlign(CENTER,CENTER)
  text("The Ultimate New Alien Game",45,125)
  fill(202, 240, 248,160)
  rect(-1,650,265,45)
  fill(255, 252, 49) //text color (yellow)
  stroke(1)
  text("Limited Edition",150,670)
  pop()
  
  // black frame
  noFill(0)
  strokeWeight(35)
  rect(0,0,600,550)
  
}

function drawStars(numStars) {
  // white stars color
  fill(255); 
  // no stroke for stars
  noStroke();
  
  // making and draw random stars
  for (let i = 0; i < numStars; i++) {
    let x = random(width); // Random x position 
    let y = random(height); // Random y position 
    let size = random(3, 5); // Random size for the stars
     // Draw star 
    ellipse(x, y, size, size);
  }
}

