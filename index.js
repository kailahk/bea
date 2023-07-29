const slider1 = document.getElementById('slider-1');
const slider2 = document.getElementById('slider-2');
const slider3 = document.getElementById('slider-3');
const slider4 = document.getElementById('slider-4');
const font1 = document.getElementById('font-1');
const font2 = document.getElementById('font-2');
const cake4freaksElement = document.getElementById('cake4freaks-input');
const henmaniaElement = document.getElementById('henmania-input');
const dropdown1 = document.getElementById('dropdown-content-1');
const dropdown2 = document.getElementById('dropdown-content-2');
const sunEl = document.getElementById('sun');
const moonEl = document.getElementById('moon');
const bodyEl = document.getElementById('body');
const dropdown3 = document.getElementById('dropdown-content-3');
let cakeFeatures = [true, false, false, false, false, false];
let cakeFeaturesCSS = ['none', 'lnum', 'onum', 'pnum', 'tnum', 'case'];
const noneCheckEl = document.getElementById('none');
const lnumCheckEl = document.getElementById('lining-figures');
const onumCheckEl = document.getElementById('oldstyle-figures');
const pnumCheckEl = document.getElementById('proportional-figures');
const tnumCheckEl = document.getElementById('tabular-figures');
const caseCheckEl = document.getElementById('case-sensitive');

slider1.addEventListener('input', function () {
  cake4freaksElement.style.fontSize = this.value + 'px';
  cake4freaksElement.style.lineHeight = parseInt(this.value) * 1.2 + parseInt(slider3.value) + 'px';
});

slider2.addEventListener('input', function () {
  henmaniaElement.style.fontSize = this.value + 'px';
  henmaniaElement.style.lineHeight = parseInt(this.value) * 1.2 + parseInt(slider4.value) + 'px';
});

slider3.addEventListener('input', function () {
  cake4freaksElement.style.lineHeight = parseInt(slider1.value) * 1.2 + parseInt(this.value) + 'px';
});

slider4.addEventListener('input', function () {
  henmaniaElement.style.lineHeight = parseInt(slider2.value) * 1.2 + parseInt(this.value) + 'px';
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

dropdown3.addEventListener('click', function (evt) {
  if (evt.target.tagName === 'P') {
    if (evt.target.innerHTML === 'NONE') {
      cakeFeatures = [true, false, false, false, false, false];
      noneCheckEl.style.visibility = 'visible'
      lnumCheckEl.style.visibility = 'hidden'
      onumCheckEl.style.visibility = 'hidden'
      pnumCheckEl.style.visibility = 'hidden'
      tnumCheckEl.style.visibility = 'hidden'
      caseCheckEl.style.visibility = 'hidden'
    } else if (evt.target.innerHTML === 'LINING FIGURES') {
      if (cakeFeatures[1] === true) {
        cakeFeatures[1] = false;
        lnumCheckEl.style.visibility = 'hidden'
      } else {
        cakeFeatures[0] = false;
        noneCheckEl.style.visibility = 'hidden'
        cakeFeatures[1] = true;
        lnumCheckEl.style.visibility = 'visible'
        cakeFeatures[2] = false;
        onumCheckEl.style.visibility = 'hidden'
      }
    } else if (evt.target.innerHTML === 'OLDSTYLE FIGURES') {
      if (cakeFeatures[2] === true) {
        cakeFeatures[2] = false;
        onumCheckEl.style.visibility = 'hidden'
      } else {
        cakeFeatures[0] = false;
        noneCheckEl.style.visibility = 'hidden'
        cakeFeatures[2] = true;
        onumCheckEl.style.visibility = 'visible'
        cakeFeatures[1] = false;
        lnumCheckEl.style.visibility = 'hidden'
      }
    } else if (evt.target.innerHTML === 'PROPORTIONAL FIGURES') {
      if (cakeFeatures[3] === true) {
        cakeFeatures[3] = false;
        pnumCheckEl.style.visibility = 'hidden'
      } else {
        cakeFeatures[0] = false;
        noneCheckEl.style.visibility = 'hidden'
        cakeFeatures[3] = true;
        pnumCheckEl.style.visibility = 'visible'
        cakeFeatures[4] = false;
        tnumCheckEl.style.visibility = 'hidden'
      }
    } else if (evt.target.innerHTML === 'TABULAR FIGURES') {
      if (cakeFeatures[4] === true) {
        cakeFeatures[4] = false;
        tnumCheckEl.style.visibility = 'hidden'
      } else {
        cakeFeatures[0] = false;
        noneCheckEl.style.visibility = 'hidden'
        cakeFeatures[4] = true;
        tnumCheckEl.style.visibility = 'visible'
        cakeFeatures[3] = false;
        pnumCheckEl.style.visibility = 'hidden'
      }
    } else if (evt.target.innerHTML === 'CASE SENSITIVE') {
      if (cakeFeatures[5] === true) {
        cakeFeatures[5] = false;
        caseCheckEl.style.visibility = 'hidden'
      } else {
        cakeFeatures[0] = false;
        noneCheckEl.style.visibility = 'hidden'
        cakeFeatures[5] = true;
        caseCheckEl.style.visibility = 'visible'
      }
    }
    let currFeatures = [];
    cakeFeatures.forEach((feature, idx) => {
      if (feature === true) {
        if (currFeatures.includes(feature)) {
          return
        } else {
          currFeatures.push(cakeFeaturesCSS[idx])
        }
      }
    })
    console.log(currFeatures)
    cake4freaksElement.style.fontFeatureSettings = `"${currFeatures.join('", "')}"`;
  } else {
    return;
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
  slider3.style.backgroundColor = 'black'
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
  slider3.style.backgroundColor = 'white'
})