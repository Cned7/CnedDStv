let businessMobileMenuToggle = document.getElementById("hamburger-menu");
let dstvBusinessmobileMenu = document.getElementById("mobile-navbar-links");

businessMobileMenuToggle.addEventListener('click', ()=> {
  dstvBusinessmobileMenu.classList.toggle("open-menu");
});