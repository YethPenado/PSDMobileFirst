// Menú Hamburguesa
let burger = false;
const hamburguer = document.getElementById('hamburguer');
const menu = document.getElementById('menu');
function showMenu() {
  if (burger === false) {
    menu.classList.remove('hidden-menu');
    burger = true;
  } else if (burger === true) {
    menu.className = 'hidden-menu';
    burger = false;
  }
}
hamburger.addEventListener('click', showMenu);
