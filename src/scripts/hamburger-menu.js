const hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click', () => {
  const headerNav = document.querySelector('header nav');
  headerNav.classList.toggle('active');
});

hamburgerMenu.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    const headerNav = document.querySelector('header nav');
    headerNav.classList.toggle('active');
  }
});

const main = document.querySelector('main');
main.addEventListener('click', () => {
  const headerNav = document.querySelector('header nav');
  headerNav.classList.remove('active');
});
