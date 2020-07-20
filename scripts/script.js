let test = document.querySelector('.test');
let arrowButtonsArray = document.querySelectorAll('.arrow-img-container');
let bar1 = document.querySelector('.bar-1');
let bar2 = document.querySelector('.bar-2');

function toggleShareMenu(ev) {
  bar1Display = window.getComputedStyle(bar1).getPropertyValue('display');
  bar2Display = window.getComputedStyle(bar2).getPropertyValue('display');
  if(bar1Display==='flex') {
    bar1.style.display = 'none';
    bar2.style.display = 'flex';
  } else if(bar1Display==='none') {
    bar1.style.display = 'flex';
    bar2.style.display = 'none';
  };
};

for(let i = 0; i < arrowButtonsArray.length; i++) {
  arrowButtonsArray[i].addEventListener('click', toggleShareMenu);
};