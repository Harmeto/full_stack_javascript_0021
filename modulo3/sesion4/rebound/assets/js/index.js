document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevenir que se recargue la página al hacer submit
  
    const origen = document.querySelector('#origen').value;
    const destino = document.querySelector('#destino').value;
    const fecha = document.querySelector('#fecha').value;
    const fecha2 = document.querySelector('#fecha2').value;
  
    const vuelosEscalas = [
      { origen: 'Chicago, USA', destino: 'Venecia, IT' },
      { origen: 'Boston, USA', destino: 'Paris, FR' },
      { origen: 'Santiago, CHL', destino: ''},
      { origen: 'Arica, CHL', destino: ''}
    ];
  
  
    const fechaOrigenDate = new Date(fecha);
    const fechaDestinoDate = new Date(fecha2);
  
    if (fechaOrigenDate > fechaDestinoDate) {
        document.querySelector('#error-fechas').innerHTML = `La fecha de origen no puede ser posterior a la fecha de destino.`;
        return;
    }
    
    // Verificar si se ingresaron fechas
    if (!fecha || !fecha2) {
      document.querySelector('#error-fechas').innerHTML = `No se ingresó fecha.`;
      return;
    }
  
    document.querySelector('#error-fechas').innerHTML = '';
  
    const tieneEscala = vuelosEscalas.some((vuelo) => {
      return vuelo.origen === origen && vuelo.destino === destino;
    });
  
    if (tieneEscala) {
      document.querySelector('#resultado').innerHTML = `El vuelo desde ${origen} con fecha ${fecha} hacia ${destino} con llegada el ${fecha2} tiene escala.`;
    } else {
      document.querySelector('#resultado').innerHTML = `El vuelo desde ${origen} con fecha ${fecha} hacia ${destino} con llegada el ${fecha2} no tiene escala.`;
    }
  
    // Crear carta para el vuelo de origen
    const cartaOrigen = `
    <div class="col-md-4 my-3">
        <div class="card">
        <div class="card-body">
            <h5 class="card-title">Vuelo de origen: ${origen}</h5>
            <p class="card-text">Fecha de origen: ${fecha}</p>
        </div>
        </div>
    </div>
    `;
  
    // Crear carta para el vuelo de destino
    const cartaDestino = `
    <div class="col-md-4 my-3">
        <div class="card">
        <div class="card-body">
            <h5 class="card-title">Vuelo de destino: ${destino}</h5>
            <p class="card-text">Fecha de destino: ${fecha2}</p>
        </div>
        </div>
    </div>
    `;
  
    // Agregar cartas al DOM
    document.querySelector('#cartas').innerHTML = cartaOrigen + cartaDestino;
  
  });