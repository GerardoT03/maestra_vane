document.querySelector('.dropdown-toggle').addEventListener('click', function(e) {
    e.preventDefault(); // Evita que se siga el enlace
    const dropdownMenu = this.nextElementSibling;

    // Alterna la visibilidad del menú desplegable
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});
