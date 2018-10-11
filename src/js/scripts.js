/* Shadow on scroll navbar */ 
function scrollMenu() {
    var menu = document.querySelector('.navigation');
    var menuSection = document.querySelector('.navigation-menu');
    if (window.scrollY > 0) {
        menu.classList.add('shadow');
        menuSection.classList.add('shadow');
    } else {
        menu.classList.remove('shadow');
        menuSection.classList.remove('shadow');
    }
};

window.addEventListener('scroll', scrollMenu);


function scrollMenuReservation() {
    var menuSection = document.querySelector('.navigation-menu');
    if (window.scrollY > 0) {
        menuSection.classList.add('shadow');
    } else {
        menuSection.classList.remove('shadow');
    }
};

window.addEventListener('scroll', scrollMenuReservation);