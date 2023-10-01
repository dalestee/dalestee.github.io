// script.js
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('animationCanvas');
  const ctx = canvas.getContext('2d');
  
  // Set canvas dimensions to match the main content
  const main = document.querySelector('main');
  canvas.width = main.offsetWidth;
  canvas.height = main.offsetHeight;
  
  // Animation loop
  function animate() {
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw your animations here
      ctx.fillStyle = 'red';
      ctx.fillRect(50, 50, 100, 100); // Example: Draw a red square
      
      // Request animation frame
      requestAnimationFrame(animate);
  }
  
  // Start the animation loop
  animate();
});