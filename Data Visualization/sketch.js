// The csv data is loaded from https://worldpopulationreview.com
let worldMap;
let populationTable;

function preload() {
  // Loading the world map image
  worldMap = loadImage('https://cdn.pixabay.com/photo/2017/01/12/13/23/map-1974699_1280.png');
  // Loading the population data CSV file
  populationTable = loadTable('populationData.csv', 'csv', 'header');
}

function setup() {
  // Creating the canvas with the dimensions of the world map image
  createCanvas(worldMap.width, worldMap.height);
  // Setting the background color to black
  background("#000000");
}

function draw() {
  // Drawing the world map image on the canvas
  image(worldMap, 0, 0);
  noStroke();
  textAlign(CENTER, CENTER);
  
  // Finding the maximum population from the data
  let maxPopulation = 0;
  for (let row of populationTable.rows) {
    maxPopulation = max(maxPopulation, int(row.get('pop2024')));
  }

  // Defining coordinates for the countries on the map
  let coordinates = {
    "India": [890, 360],
    "China": [930, 240],
    "United States": [240, 190],
    "Indonesia": [1050, 440],
    "Pakistan": [835, 320],
    "Nigeria": [630, 360],
    "Brazil": [430, 480],
    "Bangladesh": [920, 340],
    "Russia": [870, 150],
    "Ethiopia": [740, 390],
    "Mexico": [220, 330],
    "Japan": [1110, 260],
    "Philippines": [1120, 400],
    "Egypt": [710, 350],
    "DR Congo": [700, 430],
    "Vietnam": [990, 380],
    "Iran": [800, 300],
    "Turkey": [720, 270],
    "Germany": [650, 210],
    "Thailand": [970, 370]
  };

  // Looping through the population data and drawing circles on the map
  for (let row of populationTable.rows) {
    let country = row.get('country');
    let population = int(row.get('pop2024'));
    let [x, y] = coordinates[country];
    fill(255, 255, 255, 127);
    stroke("#FFFFFF");
    strokeWeight(2);
    // Mapping the population to the radius of the circle
    let radius = map(population, 0, maxPopulation, 10, 50);
    textFont("Acme");
    // Drawing the circle representing the population
    ellipse(x, y, radius, radius);
    noStroke();
    fill(255);
    textSize(12);
    // Displaying the country name and population
    text(`${country}, ${population}`, x, y - radius / 2 - 10);
  }

  // Drawing the title text
  textSize(25);
  text("Top 20 Countries Population 2024", 230, 45);
  
  textFont("Wavefont");
  textSize(50);
  text("CountriesPopulation", 460, 35);
}
