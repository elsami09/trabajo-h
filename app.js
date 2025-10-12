    let NAVConteinerInterno = document.getElementById('nav-container-inner');
    let cambiarIcono = document.getElementById('fa-bars')


 
const menuIcon = document.getElementById('fa-bars');
const navMenu = document.getElementById('nav-container-inner');

menuIcon.addEventListener('click', () => {
    // Alternar icono de barras a X
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');

    // Alternar visibilidad del menú
    if (NAVConteinerInterno.style.display === 'block') {
        NAVConteinerInterno.style.display = 'none';
    } else {
        NAVConteinerInterno.style.display = 'block';
    }
});
