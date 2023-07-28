const slider1 = document.getElementById('slider-1');
const slider2 = document.getElementById('slider-2');
const cake4freaksElement = document.getElementById('cake4freaks-input');
const henmaniaElement = document.getElementById('henmania-input');
const dropdown1 = document.getElementById('dropdown-content-1');
const dropdown2 = document.getElementById('dropdown-content-2');

slider1.addEventListener('input', function () {
  cake4freaksElement.style.fontSize = this.value + 'px';
});

slider2.addEventListener('input', function () {
  henmaniaElement.style.fontSize = this.value + 'px';
});

dropdown1.addEventListener('click', function (evt) {
  if (evt.target.innerHTML === "CAKE4FREAKS") {
    cake4freaksElement.style.fontFamily = "Cake4Freaks-Regular";
  } else {
    cake4freaksElement.style.fontFamily = "Henmania-Black";
  }
});

dropdown2.addEventListener('click', function (evt) {
  if (evt.target.innerHTML === "CAKE4FREAKS") {
    henmaniaElement.style.fontFamily = "Cake4Freaks-Regular";
  } else {
    henmaniaElement.style.fontFamily = "Henmania-Black";
  }
});