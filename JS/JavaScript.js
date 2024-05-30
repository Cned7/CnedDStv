let menuToggle = document.getElementById("hamburger-menu");
let mobileMenu = document.getElementById("mobile-navbar-menu");

menuToggle.addEventListener('click', ()=> {
  mobileMenu.classList.toggle("open-menu");
});
