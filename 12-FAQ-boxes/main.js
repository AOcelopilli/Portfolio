const d = document,
  $btns = d.querySelectorAll(".faq-btn");

d.addEventListener("click", (e) => {});

$btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.targe);
    btn.parentNode.classList.toggle("active");
  });
});
