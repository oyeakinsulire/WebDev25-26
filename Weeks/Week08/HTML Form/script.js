const slider = document.getElementById('master-slider');
const shapes = document.querySelectorAll('.shape');

slider.addEventListener('input', (e) => {
  const val = e.target.value;
  
  shapes.forEach((item, index) => {
    // Every element rotates and scales based on the slider value
    item.style.transform = `rotate(${val * index * 0.1}deg) scale(${val / 50})`;
    
    // Change colors or positions randomly
    item.style.left = `${(index * 2) + (val / 2)}px`;
  });
});