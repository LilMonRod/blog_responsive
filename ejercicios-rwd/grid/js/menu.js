(function() {
    const btnMenu = document.getElementById('btnMenu');
    const imgMenu = document.getElementById('imgMenu');
    let contMenu = document.getElementById('main-menu');
    let value = true;
    const mq = window.matchMedia('(min-width: 620px)');

    // Crea un event handler para mq.
    function widthChange(mediaQuery) {
        if (mediaQuery.matches) {
            contMenu.classList.remove('none');

        } else {
            contMenu.classList.add('none');            
        }
    }
    function changeSrc() {
        console.log(value);
        imgMenu.removeAttribute('src');
        if (value) {
            imgMenu.setAttribute('src', 'img/close-menu.svg');
        } else {
            imgMenu.setAttribute('src', 'img/menu.svg');
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

    // Registra el event handler.
    mq.addListener(widthChange);

    // Llamada inicial al event handler.
    widthChange(mq);
}) ();
