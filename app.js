    let btnNavIcono = document.getElementById('fa-bars');
    let NAVConteinerInterno = document.getElementById('nav-container-inner');
    let cambiarIcono = document.getElementById('fa-bars')



btnNavIcono.addEventListener('click', () => {
  // Mostrar u ocultar menú
  NAVConteinerInterno.classList.toggle('display-none');
});
 
const menuIcon = document.getElementById('fa-bars');
const navMenu = document.getElementById('nav-container-inner');

menuIcon.addEventListener('click', () => {
    // Alternar menú
    navMenu.classList.toggle('show-menu');
    
    // Cambiar icono de barras a X
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');
});

