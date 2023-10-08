let particles = [];
let numberParticles = 200;

let noiseScale = 0.001;

let speedX = 1;
let speedY = 1;

let rotationScale = 150;

let opacity = 10;

let color = [125,255,155];

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

function applyChanges() {
  clear()
  let numberParticlesInput = document.getElementById("particlesChoice");
  let noiseScaleInput = document.getElementById("noiseScaleChoice");
  let rotationScaleInput = document.getElementById("rotationChoice");
  let speedXInput = document.getElementById("speedXChoice");
  let speedYInput = document.getElementById("speedYChoice");
  let opacityInput = document.getElementById("opacityChoice");
  let colorInput1 = document.getElementById("redChoice");
  let colorInput2 = document.getElementById("greenChoice");
  let colorInput3 = document.getElementById("blueChoice");

  numberParticles = numberParticlesInput.value || 200;
  noiseScale = noiseScaleInput.value || 0.001;
  speedX = speedXInput.value || 1;
  speedY = speedYInput.value || 1;
  rotationScale = rotationScaleInput.value || 30;
  opacity = opacityInput.value || 10;
  color = [colorInput1.value || 0, colorInput2.value || 0, colorInput3.value || 0];
  if (color[0] < 1 && color[1] < 1 && color[2] < 1) {
    color = [0, 255, 0];
  }
  console.log(numberParticles, noiseScale, speedX, speedY, rotationScale, opacity, color)
  noiseSeed(millis());
  setup()
}

