/* Const declaration */
const d = document,
  $inputChoices = d.getElementById("choices"),
  $choices = d.querySelector(".sort-choices");

const createChoices = function () {
  const choices = $inputChoices.value
    .split(",")
    .filter((choice) => choice.trim() !== "")
    .map((choice) => choice.trim());

  $choices.innerHTML = "";

  choices.forEach((choice) => {
    $choices.innerHTML += `<span class="choice">${choice}</span>`;
  });
};

const randomChoice = function () {
  let choices = $choices.querySelectorAll(".choice"),
    times = 30,
    speed = 100;

  /* Get a random option */
  let random = function (choices) {
    return choices[Math.floor(Math.random() * choices.length)];
  };

  /* spin choices */
  const spin = setInterval(() => {
    let choice = random(choices);

    choice.classList.add("active");

    setTimeout(() => {
      choice.classList.remove("active");
    }, speed);
  }, speed);

  /* stop spining */
  setTimeout(() => {
    clearInterval(spin);

    let choice = random(choices);

    /* select the last random option */

    let selected = setTimeout(() => {
      choice.classList.add("active");
      clearInterval(selected);
    }, speed);
  }, times * speed);
};

d.addEventListener("keyup", (e) => {
  if (e.key !== "Enter") {
    /* show choices */
    createChoices();
  }
});

d.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    $inputChoices.value = "";
    randomChoice();
  }
});
