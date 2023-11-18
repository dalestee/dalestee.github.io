function isPrime(number) {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  function changeCanvasSize() {
    var canvas = document.getElementById("canvas");
    canvas.width = 800;
    canvas.height = 800;
  }
  
  function drawPointAtCoordinates(x,y){
    var pointSize = 3; // Change according to the size of the point.
    var ctx = document.getElementById("canvas").getContext("2d");
  
  
    ctx.fillStyle = "#ff2626"; // Red color
  
    ctx.beginPath(); //Start path
    ctx.arc(x, y, pointSize, 0, Math.PI * 2, true); // Draw a point using the arc function of the canvas with a point structure.
    ctx.fill(); // Close the path and fill.
  }
  
  function getCenterOfCanvas() {
    var canvas = document.getElementById("canvas");
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
  
    return [centerX, centerY];
  }
  
  function playSoundEffect() {
    var audio = document.getElementById("sound-effect");
    audio.currentTime = 0;
    audio.play();
  }
  
  function degreeToRadians(ang) {
    return ang * (Math.PI/180);
  }
  function rotateVector(vec, ang) {
    //angle in radians
    return [vec[0] * Math.cos(ang) - vec[1] * Math.sin(ang), vec[0] * Math.sin(ang) + vec[1] * Math.cos(ang)];
  
  };
  
  
  var frame = 1
  setInterval(() => {
    changeCanvasSize();
    var canvasCenter = getCenterOfCanvas();
    var xCenter = canvasCenter[0];
    var yCenter = canvasCenter[1];
    let zoom = 0.1;
    let speed = 3;
    
    for (var i = 0; i < frame; i++) {
      if (isPrime(i)) {
        let vector = [i,0];
      vector = rotateVector(vector,i);
      drawPointAtCoordinates(xCenter + (vector[0])*zoom, yCenter + (vector[1])*zoom);
      //playSoundEffect();
      }
    }
    frame = frame + speed;
  }, 20);