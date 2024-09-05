document.querySelector('.dropdown-toggle').addEventListener('click', function(e) {
    e.preventDefault(); // Evita el comportamiento predeterminado del enlace
    e.stopPropagation(); // Detiene la propagación del evento

    const dropdownMenu = this.nextElementSibling;

    // Alterna la clase 'show' para mostrar/ocultar el menú desplegable
    dropdownMenu.classList.toggle('show');
});

document.addEventListener('click', function(e) {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    
    // Si el menú está visible y el clic no fue dentro del menú, lo ocultamos
    if (dropdownMenu && dropdownMenu.classList.contains('show') && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove('show');
    }
});

