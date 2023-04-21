// Variables
let operacionActual = '';
let operacionAnterior = '';
let operacion = undefined;
const pantalla = document.querySelector('.pantalla');

// Funciones
function agregarNumero(numero) {
  operacionActual = operacionActual.toString() + numero.toString();
 
  actualizarPantalla();
}

function agregarPunto() {
  if (operacionActual.includes('.')) return;
  operacionActual = operacionActual.toString() + '.';
  actualizarPantalla();
}

function elegirOperacion(op) {
  if (operacionActual === '') return;
  if (operacionAnterior !== '') {
    calcular();
  }
  operacion = op;
  operacionAnterior = operacionActual;
  operacionActual = '';
}

function calcular() {
  let resultado;
  const anterior = parseFloat(operacionAnterior);
  const actual = parseFloat(operacionActual);
  if (isNaN(anterior) || isNaN(actual)) return;
  switch (operacion) {
    case '+':
      resultado = anterior + actual;
      break;
    case '-':
      resultado = anterior - actual;
      break;
    case 'x':
      resultado = anterior * actual;
      break;
    case '÷':
      resultado = anterior / actual;
      break;
    default:
      return;
  }
  operacionActual = resultado;
  operacion = undefined;
  operacionAnterior = '';
  actualizarPantalla();
}

function limpiar() {
  operacionActual = '';
  operacionAnterior = '';
  operacion = undefined;
  actualizarPantalla();
}

function actualizarPantalla() {
  pantalla.value = operacionActual;
}

// Eventos
const botonesNumeros = document.querySelectorAll('.numero');
botonesNumeros.forEach((btn) => {
  btn.addEventListener('click', () => {
    agregarNumero(btn.innerText);
  
  });
});

const botonesOperaciones = document.querySelectorAll('.operacion');
botonesOperaciones.forEach((btn) => {
  btn.addEventListener('click', () => {
    elegirOperacion(btn.innerText);
  });
});

const botonIgual = document.querySelector('.igual');
botonIgual.addEventListener('click', () => {
  calcular();
});

const botonLimpiar = document.querySelector('.limpiar');
botonLimpiar.addEventListener('click', () => {
  limpiar();
});

const botonPunto = document.querySelector('.punto');
botonPunto.addEventListener('click', () => {
  agregarPunto();
});