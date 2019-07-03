const mq = window.matchMedia('(min-width: 620px)');

// Obtiene los contenedores
const navContainer = document.getElementById('main-menu');
const container_secondaryNav = document.getElementById('top-links');

// Obtiene la navegación secundaria 'secondaryNav'.
const secondaryNav = document.getElementById('secondaryNav');

// Obtiene la navegación secundaria 'secondaryNav'.
const btnMenu = document.getElementById('btnMenu');


// Crea un event handler para mq.
function widthChange(mediaQuery) {
  if (mediaQuery.matches) {
    // Si hay match, mueve secondaryNav a container2.
    container_secondaryNav.appendChild(secondaryNav);
  } else {
    // Si NO hay match, mueve secondaryNav a container1, SI ES NECESARIO.
    if (navContainer.children.length < 2) {
        navContainer.appendChild(secondaryNav);   
    }
  }
}

// Registra el event handler.
mq.addListener(widthChange);

// Llamada inicial al event handler.
widthChange(mq);
