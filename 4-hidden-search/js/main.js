const d = document,
  $search = d.querySelector(".search"),
  $input = d.querySelector(".input"),
  $btnSearch = d.querySelector(".btn");

d.addEventListener("click", (e) => {
  if (e.target == $btnSearch) {
    $search.classList.toggle("active");
    //colocamos el foco en el input
    $input.focus();
  }
});
