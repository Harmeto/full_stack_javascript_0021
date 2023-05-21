import './style.css'

document.querySelector('#app').innerHTML = `

<div class="container-fluid d-flex">
  <img src="./img/EIA_palmas_gim_2.jfif">
  <form id="form-rutina">
    <div class="form-group">
      <label for="semanas">Semanas</label>
      <input type="number" class="form-control" id="semanas" name="semanas" required>
    </div>
    <div class="form-group">
      <label for="dias">Días por semana</label>
      <input type="number" class="form-control" id="dias" name="dias" required>
    </div>
    <button type="submit" class="btn btn-primary">Calcular rutina</button>
  </form>
</div>
`;

document.getElementById("form-rutina").addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar el envío del formulario

  var semanas = parseInt(document.getElementById("semanas").value);
  var dias = parseInt(document.getElementById("dias").value);

  var rutina = calcularRutina(semanas, dias); // Lógica de cálculo de la rutina

  rutina.forEach( element => {
    console.log(element)
  })

});

function calcularRutina(semanas, dias) {
  var ejerciciosBasicos = ["Flexiones", "Sentadillas", "Plancha", "Abdominales"]; // Array de ejercicios básicos
  var rutina = [];

  for (var i = 0; i < semanas; i++) {
    for (var j = 0; j < dias; j++) {
      var ejercicio = ejerciciosBasicos[j % ejerciciosBasicos.length]; // Seleccionar un ejercicio del array
      rutina.push("Semana " + (i + 1) + ", Día " + (j + 1) + ": " + ejercicio);
    }
  }

  return rutina;
}

