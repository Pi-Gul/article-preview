let test = document.querySelector('.test');
let arrowButtonsArray = document.querySelectorAll('.arrow-img-container');
let arrowButtonDark = document.querySelector('.arrow-img-container.dark');
let bar1 = document.querySelector('.bar-1');
let bar2 = document.querySelector('.bar-2');
let body = document.querySelector('body');

function toggleShareMenu(ev) {
  let bodyWidth = window.getComputedStyle(body).getPropertyValue('width');
  let bar1Display = window.getComputedStyle(bar1).getPropertyValue('display');
  let bar2Display = window.getComputedStyle(bar2).getPropertyValue('display');
  if(bodyWidth==='720px') {
    if(document.querySelector('.arrow-img-container.dark')) {
      bar2.removeChild(arrowButtonDark);
    };
    if(bar2Display==='flex') {
      bar2.style.display = 'none';
    } else if(bar2Display==='none') {
      bar2.style.display = 'flex';
    };
  } else {
    if(bar1Display==='flex') {
      bar1.style.display = 'none';
      bar2.style.display = 'flex';
    } else if(bar1Display==='none') {
      bar1.style.display = 'flex';
      bar2.style.display = 'none';
    };
  };
};

function resizeDetection(res) {
  let bodyWidth = window.getComputedStyle(body).getPropertyValue('width');
  bar1.style.display = 'flex';
  bar2.style.display = 'none';
  if(bodyWidth==='720px') {
    if(document.querySelector('.arrow-img-container.dark')) {
      bar2.removeChild(arrowButtonDark);
    };
  } else if(bodyWidth==='320px') {
    if(!document.querySelector('.arrow-img-container.dark')) {
      bar2.appendChild(arrowButtonDark);
    };
  };
};

for(let i = 0; i < arrowButtonsArray.length; i++) {
  arrowButtonsArray[i].addEventListener('click', toggleShareMenu);
};

window.onresize = resizeDetection;