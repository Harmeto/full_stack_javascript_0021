// Obtenemos los elementos del DOM
const fechaElement = document.getElementById("fecha");
const horaElement = document.getElementById("hora");
const vueloElement = document.getElementById("vuelo");
const terminalElement = document.getElementById("terminal");

// Mostramos la fecha y la hora actual
setInterval(() => {
  const fechaActual = new Date();
  const fechaFormato = fechaActual.toLocaleDateString();
  const horaFormato = fechaActual.toLocaleTimeString();
  fechaElement.innerHTML = `${fechaFormato}`;
  horaElement.innerHTML = `${horaFormato}`;
}, 1000);

// Generamos un número de vuelo aleatorio y lo mostramos en la página
const numeroVuelo = Math.floor(Math.random() * 1000) + 1;
vueloElement.innerHTML = `Número de vuelo: ${numeroVuelo}`;

// Generamos un terminal aleatorio y lo mostramos en la página
const terminales = ["A", "B", "C", "D", "E"];
const terminal = terminales[Math.floor(Math.random() * terminales.length)];
terminalElement.innerHTML = `Terminal: ${terminal}`;

document.addEventListener('DOMContentLoaded', function() {
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    myModal.show();
});

// Mostramos un mensaje de alerta para recordar a los pasajeros que traigan sus documentos
/* alert("Recuerde llevar sus documentos necesarios para abordar el avión."); */