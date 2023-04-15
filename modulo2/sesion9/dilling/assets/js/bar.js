function mostrarOcultarElemento(elemento, boton) {
    if (elemento.style.display === 'none') {
      elemento.style.display = 'flex';
      boton.textContent = 'Cerrar';
    } else {
      elemento.style.display = 'none';
      boton.textContent = 'Abrir';
    }
  }
  
  const iframe1 = document.getElementById('iframe1');
  const iframe2 = document.getElementById('iframe2');
  const contacto = document.getElementById('contacto');
  const contacto2 = document.getElementById('reserva');
  
  contacto.addEventListener('click', () => {
    mostrarOcultarElemento(iframe1,contacto);
  });
  
  contacto2.addEventListener('click', () => {
    mostrarOcultarElemento(iframe2, contacto2);
  });