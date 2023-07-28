const slider1 = document.getElementById('slider-1');
const slider2 = document.getElementById('slider-2');
const cake4freaksElement = document.getElementById('cake4freaks-input');
const henmaniaElement = document.getElementById('henmania-input');

slider1.addEventListener('input', function() {
  cake4freaksElement.style.fontSize = this.value + 'px';
});

slider2.addEventListener('input', function() {
  henmaniaElement.style.fontSize = this.value + 'px';
})
