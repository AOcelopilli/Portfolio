const d = document,
  smallCups = d.querySelectorAll(".cup-small"),
  liters = d.getElementById("liters"),
  percentage = d.getElementById("percentage"),
  remained = d.getElementById("remained");

updateBigCup();

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightCups(idx));
});

function highlightCups(idx) {
  if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }

  smallCups.forEach((cup, idx2) =>
    idx2 <= idx ? cup.classList.add("full") : cup.classList.remove("full")
  );

  updateBigCup();
}

function updateBigCup() {
  const fullCups = d.querySelectorAll(".cup-small.full").length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 330}px `;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    remained.style.height = "40px";
    liters.innerText = `${2 - (250 * fullCups) / 1000} L`;
  }
}
