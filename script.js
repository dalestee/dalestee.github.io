let particles = [];
const numberParticles = 1000;

const noiseScale = 0.001/2;

const speedX = 1;
const speedY = 1;

const rotationScale = 6;

function setup() {
  createCanvas(window.innerWidth-100, window.innerHeight);
  for(let i = 0; i < numberParticles; i ++) {
    particles.push(createVector(random(width), random(height)));
  }
  stroke(255);
  point(255)
  clear();
}

function draw() {
  background(0, 10);
  for(let i = 0; i < numberParticles; i ++) {
    let p = particles[i];
    point(p.x, p.y);
    let n = noise(p.x * noiseScale, p.y * noiseScale, frameCount * noiseScale * noiseScale);
    let a = rotationScale * n;
    p.x += cos(a)*speedX;
    p.y += sin(a)*speedY;

    if(!onScreen(p)) {
      p.x = random(width);
      p.y = random(height);
    }
  }
}

function mouseReleased() {
  noiseSeed(millis());
}

function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}
