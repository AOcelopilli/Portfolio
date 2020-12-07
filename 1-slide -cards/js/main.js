const d = document,
  $cards = d.getElementsByClassName("card");

d.addEventListener("click", (e) => {
  if (e.target.matches(".card")) {
    for (const key in $cards) {
      if ($cards.hasOwnProperty(key)) {
        const div = $cards[key];
        div.classList.remove("isActive");
      }
    }

    let $card = e.target;
    $card.classList.add("isActive");
  }
});
