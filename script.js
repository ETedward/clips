var backgroundstreet = document.getElementById('background-street');

var e = 1;
var d = 0;

document.addEventListener('aos:in:trigger-3', ({ detail }) => {
  console.log('animated trigger3', detail);
  backgroundstreet.style.zIndex = 1;
  if (e == 1) {
    backgroundstreet.style.opacity = 1;
  }
  else {
    backgroundstreet.style.opacity = 0;
  }
  e = 1 - e;
});

document.addEventListener('aos:in:color', ({ detail }) => {
    console.log('animated color', detail);
    backgroundstreet.style.zIndex = 1;
    backgroundstreet.style.filter = "grayscale(100%)";
  });

document.addEventListener('aos:in:end-graphic', ({ detail }) => {
    console.log('animated out', detail);
    backgroundstreet.style.zIndex = 0;
    if (d == 0) {
      backgroundstreet.style.opacity = '0';
    }
    else {
      backgroundstreet.style.opacity = '1';
    }
    d = 1 - d;
  });