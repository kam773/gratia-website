/* Shadow on scroll navbar */ 
function scrollMenu() {
    var menu = document.querySelector('.navigation');
    if (window.scrollY > 0) {
        menu.classList.add('shadow');
    } else {
        menu.classList.remove('shadow');   
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


/* Scroll to */ 
$('.btn-arrow').click(function () {
    $('html, body').animate({scrollTop: $('.perfection').offset().top}, 500); 
});

 /* Toggle menu */
$(document).ready(function() {
    $('.toggle').click(function() {
       $('ul').toggleClass('active');
    });
});