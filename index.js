// Get references to the slider and the element whose font-size will be changed
const slider = document.getElementById('slider');
const nameElement = document.getElementById('new-font');

// Add an event listener to the slider for the "input" event
slider.addEventListener('input', function() {
  // Update the font-size of the element based on the slider value
  nameElement.style.fontSize = this.value + 'px';
});
