var bird; // The player's bird character
var pipes = []; // Array storing pipe obstacles
let bg; // Variable for the background image
let gameState = 'start'; // Current state of the game: 'start', 'playing', 'won', 'lost'
let score = 0; // Player's score
let intro; // Variable for the introduction image

// Preloading images before the game starts
function preload() {
  bg = loadImage('https://static.vecteezy.com/system/resources/previews/006/316/482/non_2x/alien-planet-game-background-free-vector.jpg', 
    img => console.log("Image loaded"), 
    () => console.log("Image failed to load")
  );
  intro = loadImage('pp.png', 
    img => console.log("Intro image loaded"), 
    () => console.log("Intro image failed to load")
  );  
}

// Setting up the game environment
function setup() {
  createCanvas(windowWidth, windowHeight);
  resetGame(); // Initializing game variables and state
}

// Main game loop, rendering the game screen based on the game state
function draw() {
  background(bg);

  if (gameState === 'start') {
    showStartScreen(); // Displaying the start screen
  } else if (gameState === 'playing') {
    playGame(); // Running game logic while playing
  } else if (gameState === 'won') {
    showWinScreen(); // Displaying the win screen
  } else if (gameState === 'lost') {
    showLoseScreen(); // Displaying the lose screen
  }
}

// Handling key presses for game interaction
function keyPressed() {
  if (gameState === 'start' && key === ' ') {
    gameState = 'playing'; // Starting the game
  } else if (gameState === 'playing' && key === ' ') {
    bird.up(); // Making the bird jump
    console.log("SPACE");
  } else if ((gameState === 'won' || gameState === 'lost') && key === ' ') {
    resetGame(); // Resetting the game if won or lost
    gameState = 'start';
  }
}

// Resetting the game to the initial state
function resetGame() {
  bird = new Bird(); // Creating a new bird object
  pipes = []; // Resetting pipes array
  pipes.push(new Pipe()); // Adding the first pipe
  score = 0; // Resetting score
}

// Displaying the start screen
function showStartScreen() {
  background("#D4A0DD5");
  textSize(32);
  textFont("Honk", 90);
  fill(255);
  textAlign(CENTER, CENTER);
  text('Press SPACE to Start', width / 2, height / 2 - 120);
  image(intro, width / 2 - 250, 300);
  intro.resize(600, 400);
}

// Displaying the win screen
function showWinScreen() {
  textSize(32);
  fill(255);
  textAlign(CENTER, CENTER);
  text('You Won!', width / 2, height / 2);
  text('Press SPACE to Restart', width / 2, height / 2 + 40);
  text('Score: ' + score, width / 2, height / 2 + 80);
}

// Displaying the lose screen
function showLoseScreen() {
  background("#9970E2");
  textSize(92);
  fill(255);
  textAlign(CENTER, CENTER);
  text('Game Over', width / 2, height / 2 - 150);
  text('Press SPACE to Restart', width / 2, height / 2 + 10);
  text('Score: ' + score, width / 2, height / 2 + 120);
}

// Main game logic while playing
function playGame() {
  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      gameState = 'lost'; // Changing state to lost if bird hits a pipe
      console.log("HIT");
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1); // Removing pipe if it goes offscreen
      score++;
      if (score >= 8) {
        gameState = 'won'; // Changing state to won if score reaches 8
      }
    }
  }

  bird.update();
  bird.show();

  if (frameCount % 75 == 0) {
    pipes.push(new Pipe()); // Adding new pipe at intervals
  }

  showScore(); // Displaying the score
}

// Displaying the current score on screen
function showScore() {
  textSize(32);
  fill("#FFFFFF7");
  strokeWeight(2);
  textAlign(LEFT, TOP);
  text('Score: ' + score, 10, 10);
}

// Constructor function for the bird character
function Bird() {
  this.y = height / 2;
  this.x = 64;
  this.gravity = 0.6;
  this.lift = -15;
  this.velocity = 0;

  this.show = function() {
    fill("#64077467");
    stroke("#BE6CCF");
    strokeWeight(2);
    ellipse(this.x, this.y, 32, 32); // Drawing the bird
  }

  this.up = function() {
    this.velocity += this.lift; // Making the bird jump
  }

  this.update = function() {
    this.velocity += this.gravity;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height; // Preventing bird from falling off the bottom
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0; // Preventing bird from flying off the top
      this.velocity = 0;
    }
  }
}

// Constructor function for the pipe obstacles
function Pipe() {
  this.spacing = 175;
  this.top = random(height / 6, 3 / 4 * height);
  this.bottom = height - (this.top + this.spacing);
  this.x = width;
  this.w = 80;
  this.speed = 4;
  this.highlight = false;

  this.hits = function(bird) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        this.highlight = true;
        return true; // Returning true if bird hits the pipe
      }
    }
    this.highlight = false;
    return false;
  }

  this.show = function() {
    fill(this.highlight ? ["#DD72F0"] : ["#E9AEF3"]);
    stroke("#D95FF3");
    strokeWeight(5);
    rect(this.x, 0, this.w, this.top, 10); // Drawing the top part of the pipe
    rect(this.x, height - this.bottom, this.w, this.bottom, 10); // Drawing the bottom part of the pipe
  }

  this.update = function() {
    this.x -= this.speed; // Moving the pipe to the left
  }

  this.offscreen = function() {
    return (this.x < -this.w); // Checking if the pipe is offscreen
  }
}
