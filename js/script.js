const btnMenu = document.getElementById('btnMenu');
const btnClose = document.getElementById('btnClose');
const contMenu = document.getElementById('contMenu');

function closeMenu() {
    console.log('touched and closed');
    contMenu.style.left = '-1000px';
}

function openMenu() {
    console.log('touched and opened');
    contMenu.style.left = '0';
}

btnClose.addEventListener('touchend', closeMenu);

btnMenu.addEventListener('touchend', openMenu);