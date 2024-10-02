const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");
const closeBtn = document.getElementById("close-btn");
const backToTopBtn = document.getElementById("backToTopBtn");

//Burger menu toggle
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

//Show btn only after user scrolls
window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

//Scroll to top when button is clicked
backToTopBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", //for smooth scrolling
  });
};
