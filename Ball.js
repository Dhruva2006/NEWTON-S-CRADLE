class Ball {
    constructor(x, y, Diameter) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
      }
      //this.body = Bodies.rectangle(x, y, width, height, options);
      this.body = Bodies.circle(x, y, Diameter, options)
      this.radius = Diameter;
      //this.width = width;
      //this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(4);
      stroke("black");
      fill("red");
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  };
  