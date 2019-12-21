const openSlideMenu = () => {
  document.getElementById("side-menu").style.width = "20rem";
};

const closeSlideMenu = () => {
  document.getElementById("side-menu").style.width = "0";
};

let countDownDate = new Date("Feb 1, 2020 00:00:00").getTime();
// let countDownDate = new Date("Dec 21, 2020 00:00:00").getTime();

let x = setInterval(() => {
  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString();
  let hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  ).toString();
  let minutes = Math.floor(
    (distance % (1000 * 60 * 60)) / (1000 * 60)
  ).toString();
  let seconds = Math.floor((distance % (1000 * 60)) / 1000).toString();

  if (days > 9) {
    document.getElementById("countDown-days1").innerHTML = days.split("")[0];
    document.getElementById("countDown-days2").innerHTML = days.split("")[1];
  } else {
    document.getElementById("countDown-days1").innerHTML = 0;
    document.getElementById("countDown-days2").innerHTML = days;
  }

  if (hours > 9) {
    document.getElementById("countDown-hours1").innerHTML = hours.split("")[0];
    document.getElementById("countDown-hours2").innerHTML = hours.split("")[1];
  } else {
    document.getElementById("countDown-hours1").innerHTML = 0;
    document.getElementById("countDown-hours2").innerHTML = hours;
  }

  if (minutes > 9) {
    document.getElementById("countDown-minutes1").innerHTML = minutes.split(
      ""
    )[0];
    document.getElementById("countDown-minutes2").innerHTML = minutes.split(
      ""
    )[1];
  } else {
    document.getElementById("countDown-minutes1").innerHTML = 0;
    document.getElementById("countDown-minutes2").innerHTML = minutes;
  }

  if (seconds > 9) {
    document.getElementById("countDown-seconds1").innerHTML = seconds.split(
      ""
    )[0];
    document.getElementById("countDown-seconds2").innerHTML = seconds.split(
      ""
    )[1];
  } else {
    document.getElementById("countDown-seconds1").innerHTML = 0;
    document.getElementById("countDown-seconds2").innerHTML = seconds;
  }
}, 1000);

// scroll keeper

// window.addEventListener("scroll", () => {
//   let elementTarget = document.getElementById("highlights");
//   if (window.scrollY > elementTarget.offsetTop + elementTarget.offsetHeight) {
//     document.getElementById("highlights-anchor").className = "active-section";
//   }
// });

openSlideMenu();
