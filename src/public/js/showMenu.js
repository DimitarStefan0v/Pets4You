const menuBtn = document.getElementById('menu-icon');
const links = document.getElementById('menu-links');
const backdrop = document.getElementById('backdrop');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('visible');

    if (menuBtn.classList.contains('visible')) {
        links.style.left = 0;
        backdrop.style.display = 'block'
    } else {
        links.style.left = '-100%';
        backdrop.style.display = 'none';
    }
});

backdrop.addEventListener('click', () => {
    backdrop.style.display = 'none';

    if (menuBtn.classList.contains('visible')) {
        links.style.left = '-100%';
        menuBtn.classList.remove('visible');
    } 
});