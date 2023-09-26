
var dot = document.getElementById("dot");
var offset = 0
var vel = 0
document.addEventListener("mousemove", function(event) {
  var x = event.clientX;
  var y = event.clientY;
  dot.style.left = x +10 + "px";
  dot.style.top = y -offset + "px";
  offset+=inc
  if (offset > 10)inc = -1
  if (offset < -10)inc = 1
});
