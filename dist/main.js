const menuIcon = document.querySelector(".nav-mobile__icon");
const menuMobile = document.querySelector(".navbar__list__mobile")
const menuItem = document.querySelectorAll(".navbar__list__mobile__item")
const hero = document.querySelector('.about')

window.addEventListener('DOMContentLoaded', () => {
});

menuIcon.addEventListener("click", () => {
  window.scrollTo(0,0);
  menuIcon.classList.toggle("nav-open");
  menuMobile.classList.toggle("navbar__list__mobile-closed")
});

menuItem.forEach(item => { 
  item.addEventListener("click", () => {
  menuIcon.classList.toggle("nav-open");
  menuMobile.classList.toggle("navbar__list__mobile-closed")
})});


