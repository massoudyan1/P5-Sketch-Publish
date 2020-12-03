var bird;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  ellipseMode(CENTER);
  bird = new Bird();
  }

function draw() {
  background(20);
  
  bird.update();
  bird.show();

  
}

function keyPressed() {
  if (keyCode === 32) {
    bird.up();
  }
}

function Bird(){
  this.x = width/10;
  this.y = height/2;
  
  this.gravity = 0.5;
  this.vel= 0;
  
  this.size = width/15;
    
  
  this.up = function(){
    this.vel += -this.gravity*70;
  }
  
  this.show = function(){
    fill(255);
    ellipse(this.x, this.y, this.size, width/15);
  }

  this.update = function(){
    this.vel += this.gravity;
    this.y += this.vel;
    
    if(this.vel > 8){
      this.vel = 8;
    }else if(this.vel < -8){
      this.vel = -8;
    }
    
   if(this.y > height-this.size/2){
      this.y = height-this.size/2;
      this.vel = 0;
    }
    if(this.y < this.size/2){
      this.y = this.size/2;
    }
    
  } 

}