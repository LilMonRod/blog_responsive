(function() {
    const btnMenu = document.getElementById('btnMenu');
    const container = document.getElementById('contHeader');
    let contMenu = document.querySelectorAll('a.contMenu-js');
    contMenu = Array.from(contMenu);
    let value = true;
    
    function changeSrc() {
        btnMenu.removeAttribute('src');
        if (value) {
            btnMenu.setAttribute('src', 'img/icons/close-menu.svg');
        } else {
            btnMenu.setAttribute('src', 'img/icons/menu.svg');
        }
        value = !value;
    }
    function closeMenu() {
        contMenu.forEach(element => {
            element.classList.add('none');
        });
        container.style.height = 'auto';
    }

    function openMenu() {
        contMenu.forEach(element => {
            element.classList.remove('none');
        });
        container.style.height = '-webkit-fill-available';
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
    
}) ();
