let particles = [];
let numberParticles = 200;

let noiseScale = 0.001;

let speedX = 1;
let speedY = 1;

let rotationScale = 150;

let opacity = 10;

let color = [20,44,240];

function setup() {
  createCanvas(1000, 685);
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

function randomize() {
  clear()
  numberParticles = Math.floor(Math.random() * 1000);
  noiseScale = Math.random() / 1000;
  speedX = Math.random() * 10;
  speedY = Math.random() * 10;
  rotationScale = Math.random() * 100;
  color = [Math.random() * 255, Math.random() * 255, Math.random() * 255];
  opacity = Math.random() * 50;
  console.log("color: "+color)
}

function applyChanges() {
  clear()
  let noiseScaleInput = document.getElementById("noiseScaleChoice");
  let rotationScaleInput = document.getElementById("rotationChoice");
  let speedXInput = document.getElementById("speedXChoice");
  let speedYInput = document.getElementById("speedYChoice");
  let colorInput1 = document.getElementById("redChoice");
  let colorInput2 = document.getElementById("greenChoice");
  let colorInput3 = document.getElementById("blueChoice");

  noiseScale = noiseScaleInput.value || 0.001;
  speedX = speedXInput.value || 1;
  speedY = speedYInput.value || 1;
  rotationScale = rotationScaleInput.value || 30;
  color = [colorInput1.value || 0, colorInput2.value || 0, colorInput3.value || 0];

  console.log(numberParticles, noiseScale, speedX, speedY, rotationScale, opacity, color);

  if (color[0] < 1 && color[1] < 1 && color[2] < 1) {
    color = [20, 40, 240];
  }

  console.log(numberParticles, noiseScale, speedX, speedY, rotationScale, opacity, color)
  noiseSeed(millis());
  setup()
}

