const hamburgerMenu = document.querySelector('.icon-menu');
const navLinks = document.querySelector('.nav-links');
const navButton = document.querySelector('.btn-nav');

function menu() {
    navLinks.classList.toggle('nav-mobile');
}

hamburgerMenu.addEventListener("click", menu)