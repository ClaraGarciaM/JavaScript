
function setup() {
  createCanvas(displayWidth, displayHeight);
  background(200);
  noCursor();


}
var r=2000;
var posx=100;


function draw() {
	background(120);

  // put drawing code here
  strokeWeight(10);
  stroke(250,114,104);
  fill(random(150),random(255),random(255));

  for(let i=0; i < r; i++){
  ellipse(random(width), random(height), random(posx), random(posx));
}

}


function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
	background(200);
}



