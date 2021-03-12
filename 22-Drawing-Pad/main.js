const $canvas = document.getElementById("canvas");
const $incresaseBtn = document.getElementById("increase");
const $decreaseBtn = document.getElementById("decrease");
const $size = document.getElementById("size");
const $color = document.getElementById("color");
const $clear = document.getElementById("clear");
const ctx = $canvas.getContext("2d");

let size = 10,
  isPressed = false,
  color = "black",
  x,
  y;

$canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;

  console.log(isPressed, x, y);
});

$canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    let x2 = e.offsetX;
    let y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

$canvas.addEventListener("mouseup", (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;

  console.log(isPressed, x, y);
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

function updateSizeOnScreen() {
  $size.innerText = size;
}

$color.addEventListener("change", (e) => (color = e.target.value));
$incresaseBtn.addEventListener("click", (e) => {
  size += 5;

  if (size > 50) {
    size = 50;
  }

  updateSizeOnScreen();
});

$decreaseBtn.addEventListener("click", (e) => {
  size -= 5;

  if (size < 5) {
    size = 5;
  }
  updateSizeOnScreen();
});

$clear.addEventListener("click", () =>
  ctx.clearRect(0, 0, $canvas.width, $canvas.height)
);
