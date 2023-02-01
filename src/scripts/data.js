const humbergerButton = document.querySelector('.header-menu');
const drawerElement = document.querySelector('#drawer');
const hero = document.querySelector('.hero');
const mainElement = document.querySelector('main');

humbergerButton.addEventListener('click', event => {
    drawerElement.classList.toggle('open');
    event.stopPropagation();
});

mainElement.addEventListener('click', event => {
    drawerElement.classList.remove('open');
});

hero.addEventListener('click', event => {
    drawerElement.classList.remove('open');
});

