let particles = [];
let count = 0;

function setup() {
  colorMode(HSB);
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 20; i++) {
    particles.push(new Particle());
  }
}

function create_particle() {
  if (random() > 0.3) {
    particles.push(new Particle());
  }
}

function draw() {
  background('rgba(5%,5%,5%,.3)');
  count++;
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].explode === true && particles[i].sparks.length === 0) {
      particles.splice(i, 1);
      if (count < 1000) {
        particles.push(new Particle());
      } else {
        create_particle();
      }
    }
  }
}
