'use strict';

class Enemy{

  constructor(level, canvas, x, y, speed, range){
    this.level = level;
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.sizeX = 50;
    this.sizeY = 60;
    this.x = x;
    this.y = y;
    this.direction = 1;
    this.speed = speed;
    this.range = range;
    this.start = x;
  };
  
  update(){
    this.x = this.x + this.speed * this.direction;

    if (this.direction > 0){
      if(this.x > this.start +this.range){
        this.setDirection(-1);
      }
    } else if(this.direction < 0){
      if(this.x < this.start -this.range){
        this.setDirection(1);
      }
    }
  }
  
  draw(){
    this.context.fillStyle = "red";
    this.context.fillRect(this.x-this.sizeX/2, this.y-this.sizeY/2, this.sizeX, this.sizeY);
  };
  
  setDirection(direction){
    this.direction = direction; 
  };
}

