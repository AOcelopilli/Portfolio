const d = document,
  $progBar = d.getElementById("progress"),
  $circles = d.querySelectorAll(".circle"),
  $prev = d.getElementById("prev"),
  $next = d.getElementById("next");
let slide = 1;

const validation = () => {
  let percent = ((slide - 1) / ($circles.length - 1)) * 100;

  $progBar.style.width = `${percent}%`;

  $circles.forEach((el, ind) => {
    if (ind < slide) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });

  if (slide > 1) {
    $prev.disabled = false;
  } else {
    $prev.disabled = true;
  }

  if (slide == $circles.length) {
    $next.disabled = true;
  } else {
    $next.disabled = false;
  }
};

d.addEventListener("click", (e) => {
  if (e.target == $prev) {
    slide--;
    validation();
  } else if (e.target == $next) {
    slide++;
    validation();
  }
});
