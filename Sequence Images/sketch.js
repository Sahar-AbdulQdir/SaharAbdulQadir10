//declaring variable
// number of images
let bg;
var frames_num = 6
var frame = 0
// array to hold the images
var images = new Array(frames_num) 


function preload() {
  bg = loadImage("BG.png")
  // loading images in sequence
  images[0] = loadImage("img1.png");
  images[1] = loadImage("img2.png");
  images[2] = loadImage("img3.png");
  images[3] = loadImage("img4.png");
  images[4] = loadImage("img5.png");
  images[5] = loadImage("img6.png");
  

}


function setup() {

  createCanvas(600, 400);
  // speed of the images showing
  frameRate(15);
}

function draw () {
  // background color
  background (bg,255);
  frame ++;
  // loop back to the first image
  if (frame == frames_num ) frame = 0
  // show image at 340 as x value and -15 as y value
  image(images[frame] , 340, -15) ;
}

