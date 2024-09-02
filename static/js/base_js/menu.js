document.querySelector('.dropdown-toggle').addEventListener('click', function(e) {
    e.preventDefault(); // Evita que se siga el enlace
    e.stopPropagation(); // Detiene la propagación del evento
    
    const dropdownMenu = this.nextElementSibling;

    // Alterna la visibilidad del menú desplegable
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', function(e) {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    if (dropdownMenu && dropdownMenu.style.display === 'block' && !dropdownMenu.contains(e.target)) {
        dropdownMenu.style.display = 'none';
    }
});
document.querySelector('.dropdown-toggle').addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    const dropdownMenu = this.nextElementSibling;

    dropdownMenu.classList.toggle('show');
});

document.addEventListener('click', function(e) {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    if (dropdownMenu && dropdownMenu.classList.contains('show') && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove('show');
    }
});
