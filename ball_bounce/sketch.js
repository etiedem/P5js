let balls = [];
let gravity;
let frictionScale = 0.01;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 10; i++) {
    balls.push(new Ball());
  }
}

function draw() {
  background(30);
  for (let ball of balls) {
    let gravity = createVector(0, 1 * ball.mass);
    let friction = ball.velocity.copy();
    friction.mult(-1).normalize().mult(frictionScale);

    if (ball.position.y + ball.diameter / 2 >= height) {
      ball.applyForce(friction);
    }
    ball.applyForce(gravity);

    for (let b of balls) {
      if (
        ball != b &&
        ball.position.dist(b.position) <= ball.diameter / 2 + b.diameter / 2
      ) {
        ball.collide = true;
        b.collide = true;
        ball.applyForce(friction);
        ball.velocity.mult(createVector(-1, -1));
        b.velocity.mult(createVector(-1, -1));
      }
    }

    ball.update();
    ball.edges();
    ball.show();
    ball.collide = false;
  }
}
