(function() {
    const btnMenu = document.getElementById('btnMenu');
    const container = document.getElementById('contHeader');
    let contMenu = document.getElementById('contMenu-js');
    let value = true;
    contMenu.classList.add('none');
    
    function changeSrc() {
        console.log(value);
        btnMenu.removeAttribute('src');
        if (value) {
            btnMenu.setAttribute('src', 'img/icons/close-menu.svg');
        } else {
            btnMenu.setAttribute('src', 'img/icons/menu.svg');
        }
        value = !value;
        console.log(value);
    }
    function closeMenu() {
        contMenu.classList.add('none');
    }

    function openMenu() {
        contMenu.classList.remove('none');
    }

    function menu() {
        if (value) {
            openMenu();
        } else {
            closeMenu();
        }
        changeSrc();
    }
    btnMenu.addEventListener('touchend', menu);
    btnMenu.addEventListener('click', menu);

}) ();
