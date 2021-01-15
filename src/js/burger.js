const burger = document.querySelector('.menu__burger');
const navList = document.querySelector('.nav__list');
const screenWidth = window.innerWidth;

function handleOpenModal() {
  burger.classList.toggle('menu__burger--open');
}

function addBurger() {
  if (screenWidth <= 787) {
    burger.classList.remove('visually-hidden');
    burger.addEventListener('click', handleOpenModal);
  }
}

addBurger();
