const menuBtn = document.getElementById('menu-icon');
const links = document.getElementById('menu-links');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('close');
    if (menuBtn.classList.contains('close')) {
        links.style.display = 'flex';
    } else {
        links.style.display = 'none';
    }
});