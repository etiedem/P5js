class Spark {
  constructor(pos, c) {
    let v_ = p5.Vector.random2D();
    this.position = pos.copy();
    this.diameter = 10;
    this.acceleration = createVector();
    this.velocity = v_.mult(random(2, 10));
    this.gravity = createVector(0, 0.2);
    this.c = c;
    this.lifetime = random(150, 255);
    this.offscreen = false;
    this.alpha = 1;
  }

  show() {
    noStroke();
    let newalpha = lerp(this.alpha, 0, 0.02);
    this.alpha = newalpha;
    this.c.setAlpha(this.alpha);
    fill(this.c);
    ellipse(this.position.x, this.position.y, this.diameter);
  }

  update() {
    this.acceleration.add(this.gravity);
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
    this.lifetime -= 6;
    if (
      this.position.y >= windowHeight ||
      this.position.x > windowWidth ||
      this.position.x < 0
    ) {
      this.offscreen = true;
    }
  }
}
