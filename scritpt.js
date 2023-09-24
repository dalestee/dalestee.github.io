function initDot() {
    var dot = document.getElementById("dot");
    document.addEventListener("mousemove", function(event) {
      var x = event.clientX;
      var y = event.clientY;
      dot.style.left = x + "px";
      dot.style.top = y + "px";
    });
  }