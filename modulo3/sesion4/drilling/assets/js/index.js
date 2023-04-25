const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const termsCheckbox = document.querySelector('#terms');
const resultDiv = document.querySelector('#result');
const subTitle = document.querySelector('h4');

let text = `Al suscribirte podras recibir notificaciones de ofertas y descuentos en todos nuestros productos.`;
subTitle.innerHTML = text;


form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  let message;
  
  switch(true) {
    case !emailInput.value && !termsCheckbox.checked:
      message = 'Debes ingresar tu correo electrónico y aceptar los términos y condiciones';
      break;
    case !emailInput.value:
      message = 'Debes ingresar tu correo electrónico';
      break;
    case !termsCheckbox.checked:
      message = 'Debes aceptar los términos y condiciones';
      break;
    default:
      message = 'Te has inscrito exitosamente a nuestro newsletter';
      emailInput.value = '';
      termsCheckbox.checked = false;
  }
  
  resultDiv.innerHTML = `<div class="alert ${message.includes('exitosamente') ? 'alert-success' : 'alert-danger'}" role="alert">${message}</div>`;
  setTimeout(() => {
    resultDiv.innerHTML = '';
  }, 2000);

});