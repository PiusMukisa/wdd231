document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('open');
        navLinks.classList.toggle('open');
    });
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        document.querySelector('.nav-links').classList.remove('active');
    }
});
