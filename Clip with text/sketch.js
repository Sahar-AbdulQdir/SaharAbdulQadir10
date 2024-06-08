function setup() {
  createCanvas(500, 500);
  background(255, 240, 243);
  
  //background styling
  stroke(255, 179, 193)
  strokeWeight(5)
  rotate(45);
  rect(0,-400,500,15)
  rect(0,-370,500,15)
  rect(0,-340,500,15)
  rect(0,-310,500,15)
  rect(20,-280,500,15)
  rect(60,-250,500,15)
  rect(120,-220,500,15)
  rect(20,-190,700,15)
  rect(20,-160,690,15)
  rect(10,-130,690,15)
  rect(20,-100,630,15)
  rect(20,-70,630,15)
  rect(10,-40,620,15)
  rect(-10,-10,610,15)
  rect(30,20,600,15)
  rect(70,50,500,15)
  rect(50,80,500,15)
  rect(50,110,500,15)
  rect(60,140,500,15)
  rect(60,170,500,15)
  rect(60,200,500,15)
  rect(60,230,500,15)
  
  
  //
  stroke(255, 117, 143)
  strokeWeight(5)
  rotate(-45);
  rect(15,0,15,500)
  rect(45,0,15,500)
  rect(75,0,15,500)
  rect(105,0,15,500)
  rect(135,0,15,500)
  rect(165,0,15,500)
  rect(195,0,15,500)
  rect(225,0,15,500)
  rect(255,0,15,500)
  rect(285,0,15,500)
  rect(315,0,15,500)
  rect(345,0,15,500)
  rect(375,0,15,500)
  rect(405,0,15,500)
  rect(435,0,15,500)
  rect(465,0,15,500)
  rect(495,0,15,500)
    
 
  translate(width/15,height/285)
  cnv4 = createGraphics(width, height); 
  ctx2 = cnv4.canvas.getContext("2d");
  cnv4.stroke(255, 204, 213)
  cnv4.strokeWeight(10)
  cnv4.fill(255)
  cnv4.rect(40,190,340,140,10)
  ctx2.clip();
  

  cnv4.fill(255, 179, 193); 
  cnv4.push(); // start of isolated transformation
 // move the origin to the center of the rectangle
  cnv4.rotate(45); // rotate by 45 degrees
  cnv4.noStroke()
  cnv4.rect(240, 30, 90, 12); // draw the rectangle with the new origin
  cnv4.rect(250, -10, 100, 12); 
  cnv4.rect(260, -40, 100, 12); 
  cnv4.rect(280, -70, 100, 12);
  cnv4.rect(340, -110, 70, 12); 
  cnv4.rect(360, -160, 40, 7); 
  cnv4.pop(); // end of isolated transformation
  cnv4.noStroke()
  cnv4.fill(255, 179, 193); 
  cnv4.rect(20,185,75,25);
  cnv4.rect(20,310,75,25);
  cnv4.rect(310,185,75,25);
  cnv4.rect(310,310,75,25);
  image(cnv4, 0, 0);
  // and now for the text:
  cnv3 = createGraphics(width, height);
  
  
  cnv3.fill(255, 143, 163); 
  cnv3.stroke(255) 
  cnv3.strokeWeight(5)
  cnv3.rect(50,200,320,120,20)// last value is to make a rounded corners 
  cnv3.erase();
  cnv3.textSize(70);
  cnv3.fill(255, 117, 143)
  cnv3.stroke(255)  
  cnv3.text('HELLO!', 95, 280);
  
  image(cnv3, 0, 0);
}