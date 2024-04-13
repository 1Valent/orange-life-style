let burgerBtn = document.querySelector('.burger-btn');
let swgExit = document.querySelector('.swg-exit');
let burgerMenu = document.querySelector('.burger-menu');
burgerBtn.addEventListener('click', function () {
  burgerMenu.classList.toggle('is-open');
});
swgExit.addEventListener('click', function () {
  burgerMenu.classList.toggle('is-open');
});
