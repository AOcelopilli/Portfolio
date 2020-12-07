const d = document,
  $container = d.querySelector(".container"),
  $menu = d.querySelector(".menu-btns"),
  $open = d.getElementById("open"),
  $close = d.getElementById("close");

d.addEventListener("click", (e) => {
  if (e.target.parentNode == $open) {
    $container.classList.add("show-nav");
    $menu.classList.add("show-close");
  } else if (e.target.parentNode == $close) {
    $container.classList.remove("show-nav");
    $menu.classList.remove("show-close");
  }
});
