console.log("Hello!");

let r = 200; //change this for radius!

function setup() {
  createCanvas(windowWidth, windowHeight);
  dia = width / 2;
  colorMode(HSB, 360, 100, 100);
  noStroke();
  ellipseMode(RADIUS);
  frameRate(3);
}

function draw() {
  for (let i = r/2; i <= (width - r/2); i += r) { //this does rows
  	//counter1++;
  	let counter2 = 0;
    for (let j = r/2; j <= (height - (r/2)); j += r) { //this does columns
    		drawGradient(i,j);
    }
  }
}

function drawGradient(x, y) {
  let h = random(0, 360);
  for (let rad = r/2; rad > 0; --rad) {
    fill(h, 90, 90);
    ellipse(x, y, rad, rad);
    h = (h + 1) % 360;
  }
}

function mousePressed(){
  noLoop();
}

function mouseReleased(){
  loop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
