const d = document,
  $ps5 = d.querySelector(".ps5"),
  $xbox = d.querySelector(".xbox");

d.addEventListener("mouseover", (e) => {
  //e.target.parentNode.classList.contains("ps5")
  if (e.target.matches(".ps5") || e.target.matches(".ps5 *")) {
    $ps5.classList.add("active");
    $xbox.classList.remove("active");
  } else if (e.target.matches(".xbox") || e.target.matches(".xbox *")) {
    $xbox.classList.add("active");
    $ps5.classList.remove("active");
  } else {
    $ps5.classList.remove("active");
    $xbox.classList.remove("active");
  }
});
