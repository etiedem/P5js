class Ball {
  constructor(start=createVector(random(0, width), random(0, height)), mass=random(1,4)) {

    this.position = start;
    this.mass = mass;
    this.diameter = mass * 20;
    this.acceleration = createVector();
    this.velocity = p5.Vector.random2D().setMag(6);
    this.collide = false;
  }

  show() {
    noStroke();
    fill(255);
    if (this.collide === true) {
      fill(255,0,0);
    }
    circle(this.position.x, this.position.y, this.diameter);
  }

  applyForce(force) {
    let f = force.div(this.mass);
    this.acceleration.add(f);
  }

  edges() {
    if ( this.position.x - this.diameter / 2 <=0) {
      this.velocity.mult(-1,1);
      this.position = createVector(this.diameter / 2, this.position.y);
    } else if ( this.position.x >= width - this.diameter / 2) {
      this.velocity.mult(-1, 1);
      this.position = createVector(width - this.diameter / 2, this.position.y);
    }

    if (this.position.y >= height - this.diameter / 2) {
      this.velocity.mult(1, -1);
      this.position = createVector(this.position.x, height - this.diameter / 2);
    }
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }
}
