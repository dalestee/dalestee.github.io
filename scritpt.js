var dot = document.getElementById("bob");
var offset = 0
var inc = 1

function dotInit(){
  document.addEventListener("mousemove", function(event) {
    var x = event.clientX;
    var y = event.clientY;
    dot.style.left = x +10 + "px";
    dot.style.top = y -offset + "px";
    offset+=inc
    if (offset > 20)inc = -2
    if (offset < -20)inc = 2
  });
  dot.style.backgroundImage = "url('/media/bobAnimation/bobSleep_0.png')"
}

function inconHover(){
  var icons = document.getElementsByClassName("icons");
  for (var i = 0; i < icons.length; i++) {
    icons[i].addEventListener("mouseover", function(event) {
      dot.style.backgroundColor = "blue"
    });
    icons[i].addEventListener("mouseout", function(event) {
      dot.style.backgroundColor = "red"
    });
  }
}

document.addEventListener("mousemove", function(ev){
  console.log(`Movement X: ${ev.movementX}, Y: ${ev.movementY}`);
}, false);

dotInit()
//inconHover()
