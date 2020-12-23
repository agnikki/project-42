


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

}

function draw() {
  background(255,255,255);

  hr = hour();
  mn = minute();
  sc = second();

  angleMode(DEGREES);

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 24, 0, 360);

  stroke(255, 0, 0);
  strokeWeight(7);
  line(0,0,100,0);

  stroke( 0, 0, 255);
  strokeWeight(7);
  line(0,0,200,0);

  stroke(22,225, 6);
  strokeWeight(7);
  line(0,0,300,0);

   translate(0,0);
  drawSprites();
}