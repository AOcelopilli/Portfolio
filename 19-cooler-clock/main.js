const d = document,
  $hour = d.querySelector(".hour"),
  $minute = d.querySelector(".minute"),
  $second = d.querySelector(".second"),
  $time = d.querySelector(".time"),
  $date = d.querySelector(".date"),
  $toggle = d.querySelector(".toggle"),
  days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Sunday",
  ],
  months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

$toggle.addEventListener("click", (e) => {
  const html = d.querySelector("html");

  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light mode";
  }
});

function setTime() {
  const time = new Date(),
    month = time.getMonth(),
    day = time.getDay(),
    date = time.getDate(),
    hours = time.getHours(),
    hoursForClock = hours % 12,
    minutes = time.getMinutes(),
    seconds = time.getSeconds(),
    ampm = hours >= 12 ? "PM" : "AM";

  $hour.style.transform = `translate(-50%,-100%) rotate(${scale(
    hoursForClock,
    0,
    11,
    0,
    360
  )}deg)`;

  $minute.style.transform = `translate(-50%,-100%) rotate(${scale(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`;

  $second.style.transform = `translate(-50%,-100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`;

  $time.innerHTML = `${hoursForClock}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${ampm}`;

  $date.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

setTime();
setInterval(setTime, 1000);
