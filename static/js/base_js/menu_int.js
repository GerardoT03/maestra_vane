
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".index-data-box-2-dropdown-section-content-button button");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            // Elimina la clase 'active' de todos los botones
            buttons.forEach(btn => btn.classList.remove("active"));

            // Agrega la clase 'active' al botón en el que se hizo clic
            this.classList.add("active");
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.index-data-box-2-dropdown-section-content-button');
    const contents = document.querySelectorAll('.index-data-box-3 > div');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');

            // Ocultar todos los contenidos
            contents.forEach(content => {
                content.style.display = 'none';
            });

            // Mostrar el contenido correspondiente
            const contentToShow = document.querySelector(`.index-data-box-3-content-${index}`);
            if (contentToShow) {
                contentToShow.style.display = 'block';
            }
        });
    });
});

