const openSlideMenu = () => {
  document.getElementById("side-menu").style.width = "20rem";
};

const closeSlideMenu = () => {
  document.getElementById("side-menu").style.width = "0";
};
//Hide loader
const showSide = () => {
  document.getElementById('loader-wrapper').style.display="none"
  document.getElementById('body-wrapper').style.display="block"
}
$('document').ready(showSide)


// scroll keeper

// window.addEventListener("scroll", () => {
//   let elementTarget = document.getElementById("highlights");
//   if (window.scrollY > elementTarget.offsetTop + elementTarget.offsetHeight) {
//     document.getElementById("highlights-anchor").className = "active-section";
//   }
// });

