class Particle {
  constructor() {
    this.position = createVector(random(width), height);
    this.diameter = 20;
    this.acceleration = createVector();
    this.velocity = createVector(0, random(-35, -50));
    this.gravity = createVector(0, 1);
    this.explode = false;
    this.c = color(random(255),255,255);
    this.sparks = [];
  }

  show() {
    if (this.velocity.y < 0) {
      noStroke();
      fill(this.c);
      ellipse(this.position.x, this.position.y, this.diameter);
    } else {
      for (let i = this.sparks.length - 1; i >= 0; i--) {
        this.sparks[i].update();
        this.sparks[i].show();

        if (this.sparks[i].offscreen === true || this.sparks[i].lifetime < 1) {
          this.sparks.splice(i, 1);
        }
      }
    }
  }

  update() {
    if (this.velocity.y >= 0 && this.explode != true) {
      this.explode = true;
      this.spark();
    } else if (this.explode === false) {
      this.acceleration.add(this.gravity);
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
      this.acceleration.mult(0);
    }
  }

  spark() {
    for (let i = 0; i < 100; i++) {
      this.sparks.push(new Spark(this.position, this.c));
    }
  }
}
