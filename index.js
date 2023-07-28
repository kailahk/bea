const slider1 = document.getElementById('slider-1');
const slider2 = document.getElementById('slider-2');
const font1 = document.getElementById('font-1');
const font2 = document.getElementById('font-2');
const cake4freaksElement = document.getElementById('cake4freaks-input');
const henmaniaElement = document.getElementById('henmania-input');
const dropdown1 = document.getElementById('dropdown-content-1');
const dropdown2 = document.getElementById('dropdown-content-2');
const sunEl = document.getElementById('sun');
const moonEl = document.getElementById('moon');
const bodyEl = document.getElementById('body');

slider1.addEventListener('input', function () {
  cake4freaksElement.style.fontSize = this.value + 'px';
  cake4freaksElement.style.lineHeight = parseInt(this.value)*1.2 + 'px';
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

sunEl.addEventListener('click', function () {
  sunEl.setAttribute('src', 'https://i.imgur.com/Y9d7Vav.png')
  moonEl.setAttribute('src', 'https://i.imgur.com/iOW2dL3.png')
  bodyEl.style.backgroundColor = 'white';
  bodyEl.style.color = 'black';
  cake4freaksElement.style.backgroundColor = 'white';
  cake4freaksElement.style.color = 'black';
  henmaniaElement.style.backgroundColor = 'white';
  henmaniaElement.style.color = 'black';
  font1.style.border = '1px solid black';
  font2.style.border = '1px solid black';
  dropdown1.style.backgroundColor = 'white';
  dropdown1.style.border = '1px solid black';
  dropdown2.style.backgroundColor = 'white';
  dropdown2.style.border = '1px solid black';
  [...dropdown1.children].forEach((child) => {
    child.style.color = "black"
  });
  [...dropdown2.children].forEach((child) => {
    child.style.color = "black"
  });
  slider1.style.backgroundColor = 'black'
  slider2.style.backgroundColor = 'black'
})

moonEl.addEventListener('click', function () {
  sunEl.setAttribute('src', 'https://i.imgur.com/hiCtBB5.png')
  moonEl.setAttribute('src', 'https://i.imgur.com/nVRAPPY.png')
  bodyEl.style.backgroundColor = 'black';
  bodyEl.style.color = 'white';
  cake4freaksElement.style.backgroundColor = 'black';
  cake4freaksElement.style.color = 'white';
  henmaniaElement.style.backgroundColor = 'black';
  henmaniaElement.style.color = 'white';
  font1.style.border = '1px solid white';
  font2.style.border = '1px solid white';
  dropdown1.style.backgroundColor = 'black';
  dropdown1.style.border = '1px solid black';
  dropdown2.style.backgroundColor = 'black';
  dropdown2.style.border = '1px solid black';
  [...dropdown1.children].forEach((child) => {
    child.style.color = "white"
  });
  [...dropdown2.children].forEach((child) => {
    child.style.color = "white"
  });
  slider1.style.backgroundColor = 'white'
  slider2.style.backgroundColor = 'white'
})