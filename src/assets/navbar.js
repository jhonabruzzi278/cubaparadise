// Script para manejar estado activo del navbar
document.addEventListener('DOMContentLoaded', function() {
  // Obtener la URL actual
  const currentPath = window.location.pathname;
  
  // Obtener todos los links del navbar
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
  // Remover clase active de todos los links
  navLinks.forEach(link => {
    link.classList.remove('active');
  });
  
  // Agregar clase active al link correspondiente
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && (currentPath === href || (href !== '/' && currentPath.startsWith(href)))) {
      link.classList.add('active');
    }
  });
  
  // Manejar el caso especial de la página de inicio
  if (currentPath === '/' || currentPath === '/index.html') {
    const homeLink = document.querySelector('.navbar-nav .nav-link[href="/"]');
    if (homeLink) {
      homeLink.classList.add('active');
    }
  }
});

// Mejorar la funcionalidad del dropdown
document.addEventListener('DOMContentLoaded', function() {
  // Agregar eventos de hover para el dropdown
  const dropdown = document.querySelector('.nav-item.dropdown');
  if (dropdown) {
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');
    const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
    
    // Mostrar dropdown al hacer hover
    dropdown.addEventListener('mouseenter', function() {
      dropdownMenu.classList.add('show');
      dropdownToggle.setAttribute('aria-expanded', 'true');
    });
    
    // Ocultar dropdown al salir del hover
    dropdown.addEventListener('mouseleave', function() {
      dropdownMenu.classList.remove('show');
      dropdownToggle.setAttribute('aria-expanded', 'false');
    });
  }
});
