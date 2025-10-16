    /* ============================================================
    SELECCIÓN DE ELEMENTOS DEL DOM
    ------------------------------------------------------------
    - NAVConteinerInterno: Contenedor principal del menú de navegación.
    - cambiarIcono: Ícono del botón (las barras del menú hamburguesa).
    ============================================================ */
    let NAVConteinerInterno = document.getElementById('nav-container-inner');
    let cambiarIcono = document.getElementById('fa-bars');


    /* ============================================================
    VARIABLES AUXILIARES
    ------------------------------------------------------------
    - menuIcon: Hace referencia al ícono que se clickea (menú hamburguesa).
    ============================================================ */
    const menuIcon = document.getElementById('fa-bars');
    /* ============================================================
    EVENTO PRINCIPAL: CLICK EN EL ICONO DEL MENÚ
    ------------------------------------------------------------
    Cuando el usuario hace clic en el ícono:
    1. Cambia el ícono de "barras" a "X" (y viceversa).
    2. Alterna la visibilidad del menú de navegación.
    ============================================================ */
    menuIcon.addEventListener('click', () => {
        // Alternar entre el ícono de menú (fa-bars) y el ícono de cierre (fa-times)
        menuIcon.classList.toggle('fa-bars');
        menuIcon.classList.toggle('fa-times');

        // Mostrar u ocultar el menú dependiendo de su estado actual
        if (NAVConteinerInterno.style.display === 'block') {
            NAVConteinerInterno.style.display = 'none';
        } else {
            NAVConteinerInterno.style.display = 'block';
        }
    });
