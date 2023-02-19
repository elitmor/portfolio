const menuButton = document.querySelector('.menu__button');
const menuList = document.querySelector('.menu__list');
const navLink = document.querySelectorAll('.menu__link');

menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', !expanded);
  menuButton.classList.toggle('menu__button--open');
  menuList.classList.toggle('menu__list--open');
});

const linkAction = () => {
  menuList.classList.remove('menu__list--open');
  menuButton.classList.toggle('menu__button--open');
};
navLink.forEach((n) => n.addEventListener('click', linkAction));
