var bird;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  bird = new Bird();
  }

function draw() {
  background(220);
  rect(width/2,height/2,width/2,height/2);
  bird.show();
}

function Bird(){
  this.x = width/16;
  this.y = height/2;

  this.show = function(){
    fill(255);
    ellipse(this.x, this.y, width/16, width/16);
  }


}