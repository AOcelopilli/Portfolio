const d = document,
  $sounds = d.querySelectorAll(".sound-box audio");

d.addEventListener("click", (e) => {
  if (e.target.matches(".sound-box") || e.target.matches(".sound-box *")) {
    $sounds.forEach((sound) => {
      sound.pause();
      sound.currentTime = 0;
    });
    e.target.children[1].play();
  }
});
