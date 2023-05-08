const form = document.getElementById('contactForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = form.elements['name'].value;
  const lastName = form.elements['lastName'].value;
  const email = form.elements['email'].value;
  const budget = form.elements['budget'].value;
  const message = form.elements['message'].value;

  switch (budget) {
    case 'Reset':
      alert(`Hola ${name} ${lastName}, hemos enviado un \n\ncorreo electrónico para resetear tu contraseña a: ${email}\nMensaje: ${message}`);
      break;
    case 'Other':
      alert(`Hola ${name}, gracias por tu sugerencia. La tendremos en cuenta.\n\nCorreo electrónico: ${email}\nMensaje: ${message}`);
      break;
    case 'Problems':
      alert(`Hola ${name}, lamentamos que hayas tenido una mala experiencia. Nos pondremos en contacto contigo para solucionarlo.\n\nCorreo electrónico: ${email}\nMensaje: ${message}`);
      break;
    case 'Customer':
      alert(`Hola ${name}, gracias por contactarnos. Nos pondremos en contacto contigo pronto.\n\nCorreo electrónico: ${email}\nMensaje: ${message}`);
      break;
  }
});