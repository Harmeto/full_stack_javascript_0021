//JQUERY
function validarFormulario(event) {
  event.preventDefault();

  const form = event.target.id;

  if (form == 'formContacto') {
    const campos = ["nombre", "mail", "telefono", "Motivo", "comentarios"];
  
    $.each(campos, function(index, campo) {
      if (!$('#' + campo).val()) {
        showToast("El campo '" + campo + "' debe ser completado.");
        return false;
      }
    });
  
    const campitos = campos.map(function(campo) {
      return $('#' + campo).val();
    });
  
    showToast(`gracias ${campitos[0]} tu correo fue 
                registrado ${campitos[1]}, 
                con el telefono ${campitos[2]}, 
                Nos contactaremos a la brebedad!`);
    reiniciarCampos();
  }

  if (form == 'formReserva') {
      const campos = ["nombre", "mail", "telefono", "asist", "hora", "dia"];
      let vacios = [];

      $.each(campos, function(index, campo) {
          if ($('#' + campo).val() == '') {
              vacios.push(campo);
          }
      });

      if (vacios.length > 0) {
          showToast(`El campo '${vacios[0]}' debe ser completado.`);
          return false;
      }

      const campitos = campos.map(campo => $('#' + campo).val());

      showToast(`Gracias ${campitos[0]} tu correo,
                  ${campitos[1]} fue registrado, 
                  con el telefono ${campitos[2]}, 
                  se confirman ${campitos[3]} asistentes,
                  a las ${campitos[4]} y el día ${campitos[5]} 
                  Nos vemos pronto!`);

      reiniciarCampos();
  }
  
  function ocultarToast(toast) {
      toast.removeClass("show");
      
      setTimeout(function() {
        toast.remove();
      }, 300);
  }
    
  function reiniciarCampos() {
      const campos = [
          "nombre",
          "mail",
          "telefono",
          "Motivo",
          "comentarios",
          "asist",
          "hora",
          "dia"
      ];
      
      campos.forEach(campo => {
          const elemento = $('#' + campo);
      
          if (elemento) {
              elemento.val("");
          }
      });
  }
    
  function showToast(mensaje) {
      const toast = $('<div>').addClass("toast show").text(mensaje);
    
      $('body').append(toast);
    
      setTimeout(function() {
        ocultarToast(toast);
      }, 3000);
  }
}



/*     function mostrarToast() {
        const toast = document.createElement("div");
        toast.classList.add("toast", "show");

        toast.innerHTML = "¡Gracias por enviar el formulario!";
        
        document.body.appendChild(toast);
        
        setTimeout(function() {
            ocultarToast(toast);
            reiniciarCampos();
        }, 3000);
    }
      
    mostrarToast(); */

      //forma sin refactorizar 
  /*   // Agregar toast
    let toast = document.createElement("div");
    
    toast.classList.add("toast");
    toast.classList.add("show");
    
    toast.innerHTML = "¡Gracias por enviar el formulario!";
    
    document.body.appendChild(toast);
    
    setTimeout(function() {
      toast.classList.remove("show");
      
      setTimeout(function() {
        document.body.removeChild(toast);
        
        // Reiniciar campos
        document.getElementById("nombre").value = "";
        document.getElementById("mail").value = "";
        document.getElementById("telefono").value = "";
        document.getElementById("Motivo") ? document.getElementById("Motivo").value = "" : '';
        document.getElementById("comentarios") ? document.getElementById("comentarios").value = "" : '';
        document.getElementById("asist") ? document.getElementById("asist").value = "" : '';
        document.getElementById("hora") ? document.getElementById("hora").value = "" : '';
        document.getElementById("dia") ? document.getElementById("dia").value = "" : '';
        
      }, 300);
      
    }, 3000); */
  

