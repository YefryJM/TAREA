var botonMenu = document.getElementById('boton-menu');
var iconoMenu = document.querySelector("#boton-menu span");

botonMenu.addEventListener('click', function () {
    if (iconoMenu.classList.contains('navbar-toggler-icon') == true) {
        iconoMenu.classList.remove('navbar-toggler-icon');
        iconoMenu.classList.add('bi', 'bi.x');
    } else {
        iconoMenu.classList.remove('bi', 'bi-x');
        iconoMenu.classList.add('navbar-toggler-icon');
    }
});