const slider1 = document.getElementById('slider-1');
const slider2 = document.getElementById('slider-2');
const slider3 = document.getElementById('slider-3');
const slider4 = document.getElementById('slider-4');
const font1 = document.getElementById('font-1');
const font2 = document.getElementById('font-2');
const cake4freaksElementWeb = document.getElementById('cake4freaks-input-web');
const cake4freaksElementMobile = document.getElementById('cake4freaks-input-phone');
const henmaniaElementWeb = document.getElementById('henmania-input-web');
const henmaniaElementMobile = document.getElementById('henmania-input-phone');
const dropdown1 = document.getElementById('dropdown-content-1');
const dropdown2 = document.getElementById('dropdown-content-2');
const sunEl = document.getElementById('sun');
const moonEl = document.getElementById('moon');
const bodyEl = document.getElementById('body');
const dropdown3 = document.getElementById('dropdown-content-3');
const dropdown4 = document.getElementById('dropdown-content-4');
let cakeFeatures = [true, false, false, false, false];
let cakeFeaturesCSS = ['none', 'lnum', 'onum', 'liga', 'case'];
let henmaniaFeatures = [true, false, false, false, false, false];
let henmaniaFeaturesCSS = ['normal', 'onum', 'liga', 'ss01', 'ss02', 'ss03'];
const c4fnoneCheckEl = document.getElementById('c4f-none');
const c4flnumCheckEl = document.getElementById('c4f-lining-figures');
const c4fonumCheckEl = document.getElementById('c4f-oldstyle-figures');
/* const c4fpnumCheckEl = document.getElementById('c4f-proportional-figures');*/
const c4fligaCheckEl = document.getElementById('c4f-standard-ligatures');
/*const c4ftnumCheckEl = document.getElementById('c4f-tabular-figures');*/
const c4fcaseCheckEl = document.getElementById('c4f-case-sensitive');
const henNoneCheckEl = document.getElementById('hen-none');
const henOnumCheckEl = document.getElementById('hen-oldstyle-figures');
const henLigaCheckEl = document.getElementById('hen-liga-figures');
const henss01CheckEl = document.getElementById('hen-ss01-figures');
const henss02CheckEl = document.getElementById('hen-ss02-figures');
const henss03CheckEl = document.getElementById('hen-ss03-figures');
const dropdown5 = document.getElementById('dropdown-content-5');
const dropdown6 = document.getElementById('dropdown-content-6');
let cakeFeatures2 = [true, false, false, false, false];
let henmaniaFeatures2 = [true, false, false, false, false, false];
const c4fnoneCheckEl2 = document.getElementById('c4f-none2');
const c4flnumCheckEl2 = document.getElementById('c4f-lining-figures2');
const c4fonumCheckEl2 = document.getElementById('c4f-oldstyle-figures2');
/* const c4fpnumCheckEl2 = document.getElementById('c4f-proportional-figures2'); */
const c4fligaCheckEl2 = document.getElementById('c4f-standard-ligatures2');
/* const c4ftnumCheckEl2 = document.getElementById('c4f-tabular-figures2');*/
const c4fcaseCheckEl2 = document.getElementById('c4f-case-sensitive2');
const henNoneCheckEl2 = document.getElementById('hen-none2');
const henOnumCheckEl2 = document.getElementById('hen-oldstyle-figures2');
const henLigaCheckEl2 = document.getElementById('hen-liga-figures2');
const henss01CheckEl2 = document.getElementById('hen-ss01-figures2');
const henss02CheckEl2 = document.getElementById('hen-ss02-figures2');
const henss03CheckEl2 = document.getElementById('hen-ss03-figures2');
const cake4freaksFont = new FontFace('cake4freaks', 'url(static/fonts/Cake4Freaks-RegularText.otf)');
const henmaniaFont = new FontFace('henmania', 'url(static/fonts/Henmania-Black.otf)');
const featuresOptionc4f = document.getElementById('cake-features');
const featuresOptionHen = document.getElementById('hen-features');
const c4fTitle = document.getElementById('c4f-title');
const henTitle = document.getElementById('hen-title');

window.addEventListener('resize', featuresHeight);
window.addEventListener('resize', featuresHeightHen);
window.addEventListener('resize', autoResize);
window.addEventListener('resize', autoResizeHen);
window.addEventListener('resize', autoResizeCakeWeb);
window.addEventListener('resize', autoResizeHenWeb);
window.addEventListener('resize', featuresCake);
window.addEventListener('resize', featuresHen);

function featuresCake() {
  if (c4fTitle.innerHTML.includes('CAKE4FREAKS')) {
    if (window.innerWidth <= 750) {
      c4fTitle.style.marginLeft = '0px';
    } else {
      c4fTitle.style.marginLeft = '0px';
      dropdown1.style.left = '305px';
    }
  }
  if (c4fTitle.innerHTML.includes('HENMANIA')) {
    if (window.innerWidth <= 750) {
      c4fTitle.style.marginLeft = '-24px';
    } else {
      c4fTitle.style.marginLeft = '0px';
      dropdown1.style.left = '265px';
    }
  }
}

function featuresHen() {
  if (henTitle.innerHTML.includes('CAKE4FREAKS')) {
    if (window.innerWidth <= 750) {
      henTitle.style.marginLeft = '0px'
    } else {
      dropdown2.style.left = '305px'
    }
  }
  if (henTitle.innerHTML.includes('HENMANIA')) {
    if (window.innerWidth <= 750) {
      henTitle.style.marginLeft = '-23px'
    } else {
      dropdown2.style.left = '265px'
      henTitle.style.marginLeft = '0px'
    }
  }
}

function autoResize() {
  cake4freaksElementMobile.style.height = '103px';
  cake4freaksElementMobile.style.height = cake4freaksElementMobile.scrollHeight + 'px';
  featuresHeight();
}

function autoResizeHen() {
  henmaniaElementMobile.style.height = '103px';
  henmaniaElementMobile.style.height = henmaniaElementMobile.scrollHeight + 'px';
  featuresHeightHen();
}

function autoResizeCakeWeb() {
  cake4freaksElementWeb.style.height = '103px';
  cake4freaksElementWeb.style.height = cake4freaksElementWeb.scrollHeight + 'px';
}

function autoResizeHenWeb() {
  henmaniaElementWeb.style.height = '103px';
  henmaniaElementWeb.style.height = henmaniaElementWeb.scrollHeight + 'px';
}

function featuresHeight() {
  if (window.innerWidth <= 750) {
    featuresOptionc4f.style.top = '210px';
    featuresOptionc4f.style.top = cake4freaksElementMobile.scrollHeight + 77 + 'px';
  } else {
    featuresOptionc4f.style.top = '0px'; 
  }
}

function featuresHeightHen() {
  if (window.innerWidth <= 750) {
    featuresOptionHen.style.top = '210px';
    featuresOptionHen.style.top = henmaniaElementMobile.scrollHeight + 77 + 'px';
  } else {
    featuresOptionHen.style.top = '0px'; 
  }
}

slider1.addEventListener('input', function () {
  cake4freaksElementWeb.style.fontSize = this.value + 'px';
  cake4freaksElementMobile.style.fontSize = this.value + 'px';
  cake4freaksElementWeb.style.lineHeight = parseInt(this.value) * 1.2 + parseInt(slider3.value) + 'px';
  cake4freaksElementMobile.style.lineHeight = parseInt(this.value) * 1.2 + parseInt(slider3.value) + 'px';
  cake4freaksElementWeb.style.height = '103px';
  cake4freaksElementWeb.style.height = cake4freaksElementWeb.scrollHeight + 'px';
  cake4freaksElementMobile.style.height = '103px';
  cake4freaksElementMobile.style.height = cake4freaksElementMobile.scrollHeight + 'px';
  featuresHeight();
});

slider2.addEventListener('input', function () {
  henmaniaElementWeb.style.fontSize = this.value + 'px';
  henmaniaElementWeb.style.lineHeight = parseInt(this.value) * 1.2 + parseInt(slider4.value) + 'px';
  henmaniaElementMobile.style.fontSize = this.value + 'px';
  henmaniaElementMobile.style.lineHeight = parseInt(this.value) * 1.2 + parseInt(slider4.value) + 'px';
  henmaniaElementMobile.style.height = '103px';
  henmaniaElementMobile.style.height = henmaniaElementMobile.scrollHeight + 'px';
  henmaniaElementWeb.style.height = '103px';
  henmaniaElementWeb.style.height = henmaniaElementWeb.scrollHeight + 'px';
  featuresHeightHen();
});

slider3.addEventListener('input', function () {
  cake4freaksElementWeb.style.lineHeight = parseInt(slider1.value) * 1.2 + parseInt(this.value) + 'px';
  cake4freaksElementMobile.style.lineHeight = parseInt(slider1.value) * 1.2 + parseInt(this.value) + 'px';
  cake4freaksElementMobile.style.height = '103px';
  cake4freaksElementMobile.style.height = cake4freaksElementMobile.scrollHeight + 'px';
  cake4freaksElementWeb.style.height = '103px';
  cake4freaksElementWeb.style.height = cake4freaksElementWeb.scrollHeight + 'px';
  featuresHeight();
});

slider4.addEventListener('input', function () {
  henmaniaElementWeb.style.lineHeight = parseInt(slider2.value) * 1.2 + parseInt(this.value) + 'px';
  henmaniaElementMobile.style.lineHeight = parseInt(slider2.value) * 1.2 + parseInt(this.value) + 'px';
  henmaniaElementMobile.style.height = '103px';
  henmaniaElementMobile.style.height = henmaniaElementMobile.scrollHeight + 'px';
  henmaniaElementWeb.style.height = '103px';
  henmaniaElementWeb.style.height = henmaniaElementWeb.scrollHeight + 'px';
  featuresHeightHen();
});

dropdown1.addEventListener('click', function (evt) {
  if (evt.target.innerHTML === "CAKE4FREAKS") {
    cakeFeatures = [true, false, false, false, false];
    henmaniaFeatures2 = [true, false, false, false, false, false];
    cake4freaksElementWeb.style.fontFamily = "Cake4Freaks-Regular";
    cake4freaksElementMobile.style.fontFamily = "Cake4Freaks-Regular";
    cake4freaksElementWeb.style.fontFeatureSettings = "normal"
    cake4freaksElementMobile.style.fontFeatureSettings = "normal"
    dropdown3.style.visibility = "visible";
    dropdown6.style.visibility = "hidden";
    c4fnoneCheckEl.style.visibility = 'visible'
    henNoneCheckEl2.style.visibility = 'hidden'
    henOnumCheckEl2.style.visibility = 'hidden'
    henLigaCheckEl2.style.visibility = 'hidden'
    henss01CheckEl2.style.visibility = 'hidden'
    henss02CheckEl2.style.visibility = 'hidden'
    henss03CheckEl2.style.visibility = 'hidden'
    c4flnumCheckEl.style.visibility = 'hidden'
    c4fonumCheckEl.style.visibility = 'hidden'
    c4fcaseCheckEl.style.visibility = 'hidden'
    c4fTitle.innerHTML = 'CAKE4FREAKS <span class="wip">(wip) </span>&#x2195;'
  } else if (evt.target.innerHTML === "HENMANIA") {
    cakeFeatures = [true, false, false, false, false];
    henmaniaFeatures2 = [true, false, false, false, false, false];
    cake4freaksElementWeb.style.fontFamily = "Henmania-Black";
    cake4freaksElementMobile.style.fontFamily = "Henmania-Black";
    cake4freaksElementWeb.style.fontFeatureSettings = "normal"
    cake4freaksElementMobile.style.fontFeatureSettings = "normal"
    dropdown3.style.visibility = "hidden";
    dropdown6.style.visibility = "visible";
    henNoneCheckEl2.style.visibility = 'visible'
    henOnumCheckEl2.style.visibility = 'hidden'
    henLigaCheckEl2.style.visibility = 'hidden'
    henss01CheckEl2.style.visibility = 'hidden'
    henss02CheckEl2.style.visibility = 'hidden'
    henss03CheckEl2.style.visibility = 'hidden'
    c4fnoneCheckEl.style.visibility = 'hidden'
    c4flnumCheckEl.style.visibility = 'hidden'
    c4fonumCheckEl.style.visibility = 'hidden'
    c4fligaCheckEl.style.visibility = 'hidden'
    c4fcaseCheckEl.style.visibility = 'hidden'
    c4fTitle.innerHTML = 'HENMANIA <span class="wip">(wip) </span>&#x2195;'
  }
  featuresCake();
  autoResize();
  autoResizeCakeWeb();
});

dropdown2.addEventListener('click', function (evt) {
  if (evt.target.innerHTML === "CAKE4FREAKS") {
    cakeFeatures2 = [true, false, false, false, false];
    henmaniaFeatures = [true, false, false, false, false, false];
    henmaniaElementWeb.style.fontFamily = "Cake4Freaks-Regular";
    henmaniaElementWeb.style.fontFeatureSettings = "normal"
    henmaniaElementMobile.style.fontFamily = "Cake4Freaks-Regular";
    henmaniaElementMobile.style.fontFeatureSettings = "normal"
    dropdown4.style.visibility = "hidden";
    dropdown5.style.visibility = "visible";
    henNoneCheckEl.style.visibility = 'hidden'
    henOnumCheckEl.style.visibility = 'hidden'
    henLigaCheckEl.style.visibility = 'hidden'
    henss01CheckEl.style.visibility = 'hidden'
    henss02CheckEl.style.visibility = 'hidden'
    henss03CheckEl.style.visibility = 'hidden'
    c4fnoneCheckEl2.style.visibility = 'visible'
    c4flnumCheckEl2.style.visibility = 'hidden'
    c4fonumCheckEl2.style.visibility = 'hidden'
    c4fligaCheckEl2.style.visibility = 'hidden'
    c4fcaseCheckEl2.style.visibility = 'hidden'
    henTitle.innerHTML = 'CAKE4FREAKS <span class="wip">(wip) </span>&#x2195;'
  } else if (evt.target.innerHTML === "HENMANIA") {
    henmaniaFeatures = [true, false, false, false, false, false];
    cakeFeatures2 = [true, false, false, false, false];
    henmaniaElementWeb.style.fontFamily = "Henmania-Black";
    henmaniaElementWeb.style.fontFeatureSettings = "normal";
    henmaniaElementMobile.style.fontFamily = "Henmania-Black";
    henmaniaElementMobile.style.fontFeatureSettings = "normal";
    dropdown4.style.visibility = "visible";
    dropdown5.style.visibility = "hidden";
    henNoneCheckEl.style.visibility = 'visible'
    henOnumCheckEl.style.visibility = 'hidden'
    henLigaCheckEl.style.visibility = 'hidden'
    henss01CheckEl.style.visibility = 'hidden'
    henss02CheckEl.style.visibility = 'hidden'
    henss03CheckEl.style.visibility = 'hidden'
    c4fnoneCheckEl2.style.visibility = 'hidden'
    c4flnumCheckEl2.style.visibility = 'hidden'
    c4fonumCheckEl2.style.visibility = 'hidden'
    c4fligaCheckEl2.style.visibility = 'hidden'
    c4fcaseCheckEl2.style.visibility = 'hidden'
    henTitle.innerHTML = 'HENMANIA <span class="wip">(wip) </span>&#x2195;'
  }
  featuresHen();
  autoResizeHen();
  autoResizeHenWeb();
});

dropdown3.addEventListener('click', function (evt) {
  if (evt.target.tagName === 'P') {
    if (evt.target.innerHTML === 'NONE') {
      cakeFeatures = [true, false, false, false, false];
      c4fnoneCheckEl.style.visibility = 'visible'
      c4flnumCheckEl.style.visibility = 'hidden'
      c4fonumCheckEl.style.visibility = 'hidden'
      c4fligaCheckEl.style.visibility = 'hidden'
      c4fcaseCheckEl.style.visibility = 'hidden'
    } else if (evt.target.innerHTML === 'LINING FIGURES') {
      if (cakeFeatures[1] === true) {
        cakeFeatures[1] = false;
        c4flnumCheckEl.style.visibility = 'hidden'
      } else {
        cakeFeatures[0] = false;
        c4fnoneCheckEl.style.visibility = 'hidden'
        cakeFeatures[1] = true;
        c4flnumCheckEl.style.visibility = 'visible'
        cakeFeatures[2] = false;
        c4fonumCheckEl.style.visibility = 'hidden'
      }
    } else if (evt.target.innerHTML === 'OLDSTYLE FIGURES') {
      if (cakeFeatures[2] === true) {
        cakeFeatures[2] = false;
        c4fonumCheckEl.style.visibility = 'hidden'
      } else {
        cakeFeatures[0] = false;
        c4fnoneCheckEl.style.visibility = 'hidden'
        cakeFeatures[2] = true;
        c4fonumCheckEl.style.visibility = 'visible'
        cakeFeatures[1] = false;
        c4flnumCheckEl.style.visibility = 'hidden'
      } /*
    } else if (evt.target.innerHTML === 'PROPORTIONAL FIGURES') {
      if (cakeFeatures[3] === true) {
        cakeFeatures[3] = false;
        c4fpnumCheckEl.style.visibility = 'hidden'
      } else {
        cakeFeatures[0] = false;
        c4fnoneCheckEl.style.visibility = 'hidden'
        cakeFeatures[3] = true;
        c4fpnumCheckEl.style.visibility = 'visible'
        cakeFeatures[4] = false;
        c4ftnumCheckEl.style.visibility = 'hidden'
      } */
    } else if (evt.target.innerHTML === 'STANDARD LIGATURES') {
      if (cakeFeatures[3] === true) {
        cakeFeatures[3] = false;
        c4fligaCheckEl.style.visibility = 'hidden'
      } else {
        cakeFeatures[0] = false;
        c4fnoneCheckEl.style.visibility = 'hidden'
        cakeFeatures[3] = true;
        c4fligaCheckEl.style.visibility = 'visible'
      }
      /*
    } else if (evt.target.innerHTML === 'TABULAR FIGURES') {
      if (cakeFeatures[4] === true) {
        cakeFeatures[4] = false;
        c4ftnumCheckEl.style.visibility = 'hidden'
      } else {
        cakeFeatures[0] = false;
        c4fnoneCheckEl.style.visibility = 'hidden'
        cakeFeatures[4] = true;
        c4ftnumCheckEl.style.visibility = 'visible'
        cakeFeatures[3] = false;
      } */
    } else if (evt.target.innerHTML === 'CASE SENSITIVE') {
      if (cakeFeatures[4] === true) {
        cakeFeatures[4] = false;
        c4fcaseCheckEl.style.visibility = 'hidden'
      } else {
        cakeFeatures[0] = false;
        c4fnoneCheckEl.style.visibility = 'hidden'
        cakeFeatures[4] = true;
        c4fcaseCheckEl.style.visibility = 'visible'
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
    cake4freaksElementWeb.style.fontFeatureSettings = `"${currFeatures.join('", "')}"`;
    cake4freaksElementMobile.style.fontFeatureSettings = `"${currFeatures.join('", "')}"`;
    if (currFeatures.length === 0 || currFeatures[0] === 'none') {
      c4fnoneCheckEl.style.visibility = 'visible'
      cake4freaksElementWeb.style.fontFeatureSettings = 'normal'
      cake4freaksElementMobile.style.fontFeatureSettings = 'normal'
    } else {
      c4fnoneCheckEl.style.visibility = 'hidden'
    }
  } else {
    return;
  }
  cake4freaksElementMobile.style.height = '103px';
  cake4freaksElementMobile.style.height = cake4freaksElementMobile.scrollHeight + 'px';
  cake4freaksElementWeb.style.height = '103px';
  cake4freaksElementWeb.style.height = cake4freaksElementWeb.scrollHeight + 'px';
  featuresHeight();
});

dropdown4.addEventListener('click', function (evt) {
  if (evt.target.tagName === 'P') {
    if (evt.target.innerHTML === 'NONE') {
      henmaniaFeatures = [true, false, false, false, false, false];
      henNoneCheckEl.style.visibility = 'visible'
      henOnumCheckEl.style.visibility = 'hidden'
      henLigaCheckEl.style.visibility = 'hidden'
      henss01CheckEl.style.visibility = 'hidden'
      henss02CheckEl.style.visibility = 'hidden'
      henss03CheckEl.style.visibility = 'hidden'
    } else if (evt.target.innerHTML === 'OLDSTYLE FIGURES') {
      if (henmaniaFeatures[1] === true) {
        henmaniaFeatures[1] = false;
        henOnumCheckEl.style.visibility = 'hidden'
      } else {
        henmaniaFeatures[0] = false;
        henNoneCheckEl.style.visibility = 'hidden'
        henmaniaFeatures[1] = true;
        henOnumCheckEl.style.visibility = 'visible'
      }
    } else if (evt.target.innerHTML === 'LIGATURES') {
      if (henmaniaFeatures[2] === true) {
        henmaniaFeatures[2] = false;
        henLigaCheckEl.style.visibility = 'hidden'
      } else {
        henmaniaFeatures[0] = false;
        henNoneCheckEl.style.visibility = 'hidden'
        henmaniaFeatures[2] = true;
        henLigaCheckEl.style.visibility = 'visible'
      }
    } else if (evt.target.innerHTML === 'ALT g') {
      if (henmaniaFeatures[3] === true) {
        henmaniaFeatures[3] = false;
        henss01CheckEl.style.visibility = 'hidden'
      } else {
        henmaniaFeatures[0] = false;
        henNoneCheckEl.style.visibility = 'hidden'
        henmaniaFeatures[3] = true;
        henss01CheckEl.style.visibility = 'visible'
      }
    } else if (evt.target.innerHTML === 'ALT uvwy') {
      if (henmaniaFeatures[4] === true) {
        henmaniaFeatures[4] = false;
        henss02CheckEl.style.visibility = 'hidden'
      } else {
        henmaniaFeatures[0] = false;
        henNoneCheckEl.style.visibility = 'hidden'
        henmaniaFeatures[4] = true;
        henss02CheckEl.style.visibility = 'visible'
      }
    } else if (evt.target.innerHTML === 'ALT e') {
      if (henmaniaFeatures[5] === true) {
        henmaniaFeatures[5] = false;
        henss03CheckEl.style.visibility = 'hidden'
      } else {
        henmaniaFeatures[0] = false;
        henNoneCheckEl.style.visibility = 'hidden'
        henmaniaFeatures[5] = true;
        henss03CheckEl.style.visibility = 'visible'
      }
    }
    let currFeatures = [];
    henmaniaFeatures.forEach((feature, idx) => {
      if (feature === true) {
        if (currFeatures.includes(feature)) {
          return
        } else {
          currFeatures.push(henmaniaFeaturesCSS[idx])
        }
      }
    })
    henmaniaElementWeb.style.fontFeatureSettings = `"${currFeatures.join('", "')}"`;
    henmaniaElementMobile.style.fontFeatureSettings = `"${currFeatures.join('", "')}"`;
    if (currFeatures.length === 0 || currFeatures[0] === 'normal') {
      henNoneCheckEl.style.visibility = 'visible'
      henmaniaElementWeb.style.fontFeatureSettings = 'normal'
      henmaniaElementMobile.style.fontFeatureSettings = 'normal'
    } else {
      henNoneCheckEl.style.visibility = 'hidden'
    }
  } else {
    return;
  }
  henmaniaElementMobile.style.height = '103px';
  henmaniaElementMobile.style.height = henmaniaElementMobile.scrollHeight + 'px';
  henmaniaElementWeb.style.height = '103px';
  henmaniaElementWeb.style.height = henmaniaElementWeb.scrollHeight + 'px';
  featuresHeightHen();
});

dropdown5.addEventListener('click', function (evt) {
  if (evt.target.tagName === 'P') {
    if (evt.target.innerHTML === 'NONE') {
      cakeFeatures2 = [true, false, false, false, false, false];
      c4fnoneCheckEl2.style.visibility = 'visible'
      c4flnumCheckEl2.style.visibility = 'hidden'
      c4fonumCheckEl2.style.visibility = 'hidden'
      c4fligaCheckEl2.style.visibility = 'hidden'
      c4fcaseCheckEl2.style.visibility = 'hidden'
    } else if (evt.target.innerHTML === 'LINING FIGURES') {
      if (cakeFeatures2[1] === true) {
        cakeFeatures2[1] = false;
        c4flnumCheckEl2.style.visibility = 'hidden'
      } else {
        cakeFeatures2[0] = false;
        c4fnoneCheckEl2.style.visibility = 'hidden'
        cakeFeatures2[1] = true;
        c4flnumCheckEl2.style.visibility = 'visible'
        cakeFeatures2[2] = false;
        c4fonumCheckEl2.style.visibility = 'hidden'
      }
    } else if (evt.target.innerHTML === 'OLDSTYLE FIGURES') {
      if (cakeFeatures2[2] === true) {
        cakeFeatures2[2] = false;
        c4fonumCheckEl2.style.visibility = 'hidden'
      } else {
        cakeFeatures2[0] = false;
        c4fnoneCheckEl2.style.visibility = 'hidden'
        cakeFeatures2[2] = true;
        c4fonumCheckEl2.style.visibility = 'visible'
        cakeFeatures2[1] = false;
        c4flnumCheckEl2.style.visibility = 'hidden'
      } /*
    } else if (evt.target.innerHTML === 'PROPORTIONAL FIGURES') {
      if (cakeFeatures2[3] === true) {
        cakeFeatures2[3] = false;
        c4fpnumCheckEl2.style.visibility = 'hidden'
      } else {
        cakeFeatures2[0] = false;
        c4fnoneCheckEl2.style.visibility = 'hidden'
        cakeFeatures2[3] = true;
        c4fpnumCheckEl2.style.visibility = 'visible'
        cakeFeatures2[4] = false;
        c4ftnumCheckEl2.style.visibility = 'hidden'
      } */
    } else if (evt.target.innerHTML === 'STANDARD LIGATURES') {
      if (cakeFeatures2[3] === true) {
        cakeFeatures2[3] = false;
        c4fligaCheckEl2.style.visibility = 'hidden'
      } else {
        cakeFeatures2[0] = false;
        c4fnoneCheckEl2.style.visibility = 'hidden'
        cakeFeatures2[3] = true;
        c4fligaCheckEl2.style.visibility = 'visible'
      } /*
    } else if (evt.target.innerHTML === 'TABULAR FIGURES') {
      if (cakeFeatures2[4] === true) {
        cakeFeatures2[4] = false;
        c4ftnumCheckEl2.style.visibility = 'hidden'
      } else {
        cakeFeatures2[0] = false;
        c4fnoneCheckEl2.style.visibility = 'hidden'
        cakeFeatures2[4] = true;
        c4ftnumCheckEl2.style.visibility = 'visible'
        cakeFeatures2[3] = false;
      } */
    } else if (evt.target.innerHTML === 'CASE SENSITIVE') {
      if (cakeFeatures2[4] === true) {
        cakeFeatures2[4] = false;
        c4fcaseCheckEl2.style.visibility = 'hidden'
      } else {
        cakeFeatures2[0] = false;
        c4fnoneCheckEl2.style.visibility = 'hidden'
        cakeFeatures2[4] = true;
        c4fcaseCheckEl2.style.visibility = 'visible'
      }
    }
    let currFeatures = [];
    cakeFeatures2.forEach((feature, idx) => {
      if (feature === true) {
        if (currFeatures.includes(feature)) {
          return
        } else {
          currFeatures.push(cakeFeaturesCSS[idx])
        }
      }
    })
    console.log(currFeatures);
    henmaniaElementWeb.style.fontFeatureSettings = `"${currFeatures.join('", "')}"`;
    henmaniaElementMobile.style.fontFeatureSettings = `"${currFeatures.join('", "')}"`;
    if (currFeatures.length === 0 || currFeatures[0] === 'normal') {
      c4fnoneCheckEl2.style.visibility = 'visible'
      henmaniaElementWeb.style.fontFeatureSettings = 'normal'
    } else {
      c4fnoneCheckEl2.style.visibility = 'hidden'
    }
  } else {
    return;
  }
  henmaniaElementMobile.style.height = '103px';
  henmaniaElementMobile.style.height = henmaniaElementMobile.scrollHeight + 'px';
  henmaniaElementWeb.style.height = '103px';
  henmaniaElementWeb.style.height = henmaniaElementWeb.scrollHeight + 'px';
  featuresHeightHen();
});

dropdown6.addEventListener('click', function (evt) {
  if (evt.target.tagName === 'P') {
    if (evt.target.innerHTML === 'NONE') {
      henmaniaFeatures2 = [true, false, false, false, false, false];
      henNoneCheckEl2.style.visibility = 'visible'
      henOnumCheckEl2.style.visibility = 'hidden'
      henLigaCheckEl2.style.visibility = 'hidden'
      henss01CheckEl2.style.visibility = 'hidden'
      henss02CheckEl2.style.visibility = 'hidden'
      henss03CheckEl2.style.visibility = 'hidden'
    } else if (evt.target.innerHTML === 'OLDSTYLE FIGURES') {
      if (henmaniaFeatures2[1] === true) {
        henmaniaFeatures2[1] = false;
        henOnumCheckEl2.style.visibility = 'hidden'
      } else {
        henmaniaFeatures2[0] = false;
        henNoneCheckEl2.style.visibility = 'hidden'
        henmaniaFeatures2[1] = true;
        henOnumCheckEl2.style.visibility = 'visible'
      }
    } else if (evt.target.innerHTML === 'LIGATURES') {
      if (henmaniaFeatures2[2] === true) {
        henmaniaFeatures2[2] = false;
        henLigaCheckEl2.style.visibility = 'hidden'
      } else {
        henmaniaFeatures2[0] = false;
        henNoneCheckEl2.style.visibility = 'hidden'
        henmaniaFeatures2[2] = true;
        henLigaCheckEl2.style.visibility = 'visible'
      }
    } else if (evt.target.innerHTML === 'ALT g') {
      if (henmaniaFeatures2[3] === true) {
        henmaniaFeatures2[3] = false;
        henss01CheckEl2.style.visibility = 'hidden'
      } else {
        henmaniaFeatures2[0] = false;
        henNoneCheckEl2.style.visibility = 'hidden'
        henmaniaFeatures2[3] = true;
        henss01CheckEl2.style.visibility = 'visible'
      }
    } else if (evt.target.innerHTML === 'ALT uvwy') {
      if (henmaniaFeatures2[4] === true) {
        henmaniaFeatures2[4] = false;
        henss02CheckEl2.style.visibility = 'hidden'
      } else {
        henmaniaFeatures2[0] = false;
        henNoneCheckEl2.style.visibility = 'hidden'
        henmaniaFeatures2[4] = true;
        henss02CheckEl2.style.visibility = 'visible'
      }
    } else if (evt.target.innerHTML === 'ALT e') {
      if (henmaniaFeatures2[5] === true) {
        henmaniaFeatures2[5] = false;
        henss03CheckEl2.style.visibility = 'hidden'
      } else {
        henmaniaFeatures2[0] = false;
        henNoneCheckEl2.style.visibility = 'hidden'
        henmaniaFeatures2[5] = true;
        henss03CheckEl2.style.visibility = 'visible'
      }
    }
    let currFeatures = [];
    henmaniaFeatures2.forEach((feature, idx) => {
      if (feature === true) {
        if (currFeatures.includes(feature)) {
          return
        } else {
          currFeatures.push(henmaniaFeaturesCSS[idx])
        }
      }
    })
    cake4freaksElementWeb.style.fontFeatureSettings = `"${currFeatures.join('", "')}"`;
    cake4freaksElementMobile.style.fontFeatureSettings = `"${currFeatures.join('", "')}"`;
    if (currFeatures.length === 0 || currFeatures[0] === 'normal') {
      henNoneCheckEl2.style.visibility = 'visible'
      cake4freaksElementWeb.style.fontFeatureSettings = 'normal'
      cake4freaksElementMobile.style.fontFeatureSettings = 'normal'
    } else {
      c4fnoneCheckEl.style.visibility = 'hidden'
    }
  } else {
    return;
  }
  cake4freaksElementMobile.style.height = '103px';
  cake4freaksElementMobile.style.height = cake4freaksElementMobile.scrollHeight + 'px';
  cake4freaksElementWeb.style.height = '103px';
  cake4freaksElementWeb.style.height = cake4freaksElementWeb.scrollHeight + 'px';
  featuresHeight();
});


sunEl.addEventListener('click', function () {
  sunEl.setAttribute('src', 'https://i.imgur.com/9Mittl6.png')
  moonEl.setAttribute('src', 'https://i.imgur.com/qww9fRO.png')
  bodyEl.style.backgroundColor = 'white';
  bodyEl.style.color = 'black';
  cake4freaksElementWeb.style.backgroundColor = 'white';
  cake4freaksElementMobile.style.backgroundColor = 'white';
  cake4freaksElementWeb.style.color = 'black';
  cake4freaksElementMobile.style.color = 'black';
  henmaniaElementWeb.style.backgroundColor = 'white';
  henmaniaElementWeb.style.color = 'black';
  henmaniaElementMobile.style.backgroundColor = 'white';
  henmaniaElementMobile.style.color = 'black';
  font1.style.borderTop = '1px solid black';
  font1.style.borderBottom = '1px solid black';
  font2.style.borderTop = '1px solid black';
  font2.style.borderBottom = '1px solid black';
  dropdown1.style.backgroundColor = 'white';
  dropdown1.style.border = '1px solid black';
  dropdown2.style.backgroundColor = 'white';
  dropdown2.style.border = '1px solid black';
  dropdown3.style.backgroundColor = 'white';
  dropdown3.style.border = '1px solid black';
  dropdown4.style.backgroundColor = 'white';
  dropdown4.style.border = '1px solid black';
  dropdown5.style.backgroundColor = 'white';
  dropdown5.style.border = '1px solid black';
  dropdown6.style.backgroundColor = 'white';
  dropdown6.style.border = '1px solid black';
  [...dropdown1.children].forEach((child) => {
    child.style.color = "black"
  });
  [...dropdown2.children].forEach((child) => {
    child.style.color = "black"
  });
  [...dropdown3.children].forEach((child) => {
    child.style.color = "black"
  });
  [...dropdown4.children].forEach((child) => {
    child.style.color = "black"
  });
  [...dropdown5.children].forEach((child) => {
    child.style.color = "black"
  });
  [...dropdown6.children].forEach((child) => {
    child.style.color = "black"
  });
  slider1.style.backgroundColor = 'black'
  slider2.style.backgroundColor = 'black'
  slider3.style.backgroundColor = 'black'
  slider4.style.backgroundColor = 'black'
})

moonEl.addEventListener('click', function () {
  sunEl.setAttribute('src', 'https://i.imgur.com/hiCtBB5.png')
  moonEl.setAttribute('src', 'https://i.imgur.com/nVRAPPY.png')
  bodyEl.style.backgroundColor = 'black';
  bodyEl.style.color = 'white';
  cake4freaksElementWeb.style.backgroundColor = 'black';
  cake4freaksElementWeb.style.color = 'white';
  cake4freaksElementMobile.style.backgroundColor = 'black';
  cake4freaksElementMobile.style.color = 'white';
  henmaniaElementWeb.style.backgroundColor = 'black';
  henmaniaElementWeb.style.color = 'white';
  henmaniaElementMobile.style.backgroundColor = 'black';
  henmaniaElementMobile.style.color = 'white';
  font1.style.borderTop = '1px solid white';
  font1.style.borderBottom = '1px solid white';
  font2.style.borderTop = '1px solid white';
  font2.style.borderBottom = '1px solid white';
  dropdown1.style.backgroundColor = 'black';
  dropdown1.style.border = '1px solid white';
  dropdown2.style.backgroundColor = 'black';
  dropdown2.style.border = '1px solid white';
  dropdown3.style.backgroundColor = 'black';
  dropdown3.style.border = '1px solid white';
  dropdown4.style.backgroundColor = 'black';
  dropdown4.style.border = '1px solid white';
  dropdown5.style.backgroundColor = 'black';
  dropdown5.style.border = '1px solid white';
  dropdown6.style.backgroundColor = 'black';
  dropdown6.style.border = '1px solid white';
  [...dropdown1.children].forEach((child) => {
    child.style.color = "white"
  });
  [...dropdown2.children].forEach((child) => {
    child.style.color = "white"
  });
  [...dropdown3.children].forEach((child) => {
    child.style.color = "white"
  });
  [...dropdown4.children].forEach((child) => {
    child.style.color = "white"
  });
  [...dropdown5.children].forEach((child) => {
    child.style.color = "white"
  });
  [...dropdown6.children].forEach((child) => {
    child.style.color = "white"
  });
  slider1.style.backgroundColor = 'white'
  slider2.style.backgroundColor = 'white'
  slider3.style.backgroundColor = 'white'
  slider4.style.backgroundColor = 'white'
})