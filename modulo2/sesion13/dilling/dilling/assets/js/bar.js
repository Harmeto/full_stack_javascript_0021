  const contacto = document.getElementById('contacto')
  const reserva = document.getElementById('reserva')
  const form1 = document.getElementById('iframe1');
  const form2 = document.getElementById('iframe2');


    contacto.addEventListener('click', () => {
      form1.style.display = 'flex';
      mostrarOcultarElemento(form2);
    });
    
    reserva.addEventListener('click', () => {
      form2.style.display = 'flex';
      mostrarOcultarElemento(form1);
    });

    function mostrarOcultarElemento(elemento){
      
      if (window.innerWidth < 768) {
        elemento.style.display = 'none'
      }
    }

  //CARTA JQUERY

    // Obtén la altura y el ancho de la ventana del navegador
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();

    // Define el porcentaje de la pantalla que deseas que el elemento ocupe
    var porcentajeAltura = 50;
    var porcentajeAncho = 50;

    // Calcula la altura y el ancho del elemento en base al porcentaje y el tamaño de la pantalla
    var alturaElemento = (windowHeight * porcentajeAltura) / 100;
    var anchoElemento = (windowWidth * porcentajeAncho) / 100;
 

  $('.card-img-top').on('click', function() {
    var src = $(this).attr('data-src');
    var text = $(this).attr('data-text');
    let card = $(`<div class="card position-fixed" style="z-index: 10;">
                  <div class="card-body elemento">
                    <h5 class="card-title" style="display: flex; justify-content: space-between;">
                      ${text}    
                      <button type="button" class="close btn-close" aria-label="Close">
                      </button>
                    </h5>
                    <img style="height: 50vh; object-fit: contain;" src="${src}" alt="" class="card-img-top ">
                  </div>
                </div>`); 
    $('.container').prepend(card);
  });

  $('.container').on('click', '.close', function() {
    $(this).closest('.card').remove();
});



  