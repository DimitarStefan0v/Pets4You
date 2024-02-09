const menuBtn = document.getElementById('menu-icon');
const links = document.getElementById('menu-links');
const backdrop = document.getElementById('backdrop');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('visible');

    if (menuBtn.classList.contains('visible')) {
        links.style.display = 'flex';
        backdrop.style.display = 'block'
    } else {
        links.style.display = 'none';
        backdrop.style.display = 'none';
    }
});

backdrop.addEventListener('click', () => {
    backdrop.style.display = 'none';

    if (menuBtn.classList.contains('visible')) {
        links.style.display = 'none';
        menuBtn.classList.remove('visible');
    } 
});