let particles = [];
const numberParticles = 500;

const noiseScale = 0.01/2;

const speedX = 1;
const speedY = 1;

const rotationScale = 50;

const opacity = 0;

const color = [125,255,155];

function setup() {
  createCanvas(800, 400);
  for(let i = 0; i < numberParticles; i ++) {
    particles.push(createVector(random(width), random(height)));
  }
  stroke(color[0],color[1],color[2]);
  point(255)
  clear();
}

function draw() {
  background(0, opacity);
  particles.forEach(p => {
    point(p.x, p.y);
    let n = noise(p.x * noiseScale, p.y * noiseScale, frameCount * noiseScale * noiseScale);
    p.x += cos(rotationScale * n)*speedX;
    p.y += sin(rotationScale * n)*speedY;

    if(!onScreen(p)) {
      p.x = random(width);
      p.y = random(height);
    }
  });
}

function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}


