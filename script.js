// Esperar a que el DOM cargue completamente antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('button, a').forEach(element => {
    element.addEventListener('click', (event) => {
      console.log('Elemento de acción clickeado!');
      
      // Previene el comportamiento predeterminado de los enlaces sin destino
      if (element.tagName === 'A' && !element.getAttribute('href')) {
        event.preventDefault();
      }
    });
  });
});
