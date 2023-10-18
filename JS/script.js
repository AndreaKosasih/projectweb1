// Toogle class active
const navbarNav = document.querySelector('.navbar-nav');

// Ketika ham menu di klik
document.querySelector('#ham-menu').
onclick = () => {
    navbarNav.classList.toggle('active');
};


//klik di luar sidebar untuk menghilangkan na
const hamburger = document.querySelector('#ham-menu');
document.addEventListener('click', function(e) {
    if ((!hamburger.contains(e.target)) && (!navbarNav.contains(e.target))) {
        navbarNav.classList.remove('active');
    }
});

