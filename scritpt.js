function dotInit(){
  var dot = document.getElementById("dot");
  document.addEventListener("mousemove", function(event) {
    var x = event.clientX;
    var y = event.clientY;
    dot.style.left = x + 10 + "px";
    dot.style.top = y + 10 + "px";
});
}
dotInit()
