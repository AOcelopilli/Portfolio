const d = document,
  $boxes = d.querySelectorAll(".box");

const check4Box = () => {
  const heightWindow = (window.innerHeight / 3) * 2.5;

  $boxes.forEach((box) => {
    const boxBtm = box.getBoundingClientRect().top;
    console.log(heightWindow);

    if (boxBtm < heightWindow) {
      box.classList.add("show");
      console.log(box);
    } else {
      box.classList.remove("show");
    }
  });
};

check4Box();
d.addEventListener("scroll", check4Box);
