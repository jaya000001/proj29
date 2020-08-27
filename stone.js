class Stone {
    constructor(x, y,r) {
      var options = {
           isStatic : false,
           'restitution' : 0,
           'friction' : 1,
           'density' : 1.2
      }
      this.image = loadImage('stone.png');
      this.body = Bodies.circle(x, y, r, options);
      this.r = r;
      World.add(world, this.body);
    }

    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      fill(220);
      imageMode(CENTER);
      ellipseMode(RADIUS);
      image(this.image,0, 0, this.r*2, this.r*2);
      pop();
    }
  }
  