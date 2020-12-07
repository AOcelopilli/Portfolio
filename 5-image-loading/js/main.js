const d = document,
  $img = d.querySelector(".bg"),
  $text = d.querySelector(".loading-text");
/* 
https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
 */
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

let load = 0;

let loading = setInterval(() => {
  load++;

  if (load > 99) {
    clearInterval(loading);
  } else {
    $text.innerHTML = `${load}`;
    $text.style.opacity = scale(load, 0, 100, 1, 0);
    $img.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
  }

  console.log(load);
}, 25);

d.addEventListener("DOMContentLoad", (e) => {
  loading();
});
