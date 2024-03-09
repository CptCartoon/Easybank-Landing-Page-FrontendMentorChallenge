const hamburgerMenu = document.querySelector('.icon-menu');
const navLinks = document.querySelector('.nav-links');
const navButton = document.querySelector('.btn-nav');
const menuShadow = document.querySelector('.mobile-menu-shadow');

function menu() {
    navLinks.classList.toggle('nav-mobile');
    hamburgerMenu.classList.toggle('close-menu');

    if(menuShadow.style.display === "block") {
        menuShadow.style.display = "none";
    } else {
        menuShadow.style.display = "block";
    }
    

}

hamburgerMenu.addEventListener("click", menu)