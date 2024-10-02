const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");
const closeBtn = document.getElementById("close-btn");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  navLinks.classList.remove("active");
});

//CLOSE MENU WHEN CLICKING OUTSIDE MENU
document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !burger.contains(e.target)) {
    navLinks.classList.remove("active");
  }
});
