let particles = [];
const num = 2000;

let count = 0;

const noiseScale = 0.1/2;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for(let i = 0; i < num; i ++) {
    particles.push(createVector(random(width), random(height)));
  }
  stroke(255);
  stroke(0,255,0)
  clear();
}

function draw() {
  background(0, 10);
  count += 0.01;
  if(count > 0.2) {
    noiseSeed(millis());
    count = 0;
  }
  for(let i = 0; i < num; i ++) {
    let p = particles[i];
    point(p.x, p.y);
    let n = noise(p.x * noiseScale, p.y * noiseScale, frameCount * noiseScale * noiseScale);
    let a = TAU * n;
    p.x += cos(a);
    p.y += sin(a);
    if(!onScreen(p)) {
      p.x = random(width);
      p.y = random(height);
    }
  }
}

function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}