function validarFormulario(event) {
    event.preventDefault();

    const form = event.target.id;

    if(form == 'formContacto'){

        let campos = ["nombre", "mail", "telefono", "Motivo", "comentarios"];
    
        for (var i = 0; i < campos.length; i++) {
          if (document.getElementById(campos[i]).value == "") {
            showToast("El campo '" + campos[i] + "' debe ser completado.");
            return false;
          }
        }     
    }
    
    if(form == 'formReserva'){
        let campos = ["nombre", "mail", "telefono", "asist", "hora", "dia"];

        for (var i = 0; i < campos.length; i++) {
            if (document.getElementById(campos[i]).value == "") {
                showToast("El campo '" + campos[i] + "' debe ser completado.");
              return false;
            }
        }     

    }

    
    function ocultarToast(toast) {
        toast.classList.remove("show");
        
        setTimeout(function() {
          document.body.removeChild(toast);
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
            const elemento = document.getElementById(campo);
        
            if (elemento) {
            elemento.value = "";
            }
        });
    }
      
    function showToast(mensaje) {
        const toast = document.createElement("div");
        toast.classList.add("toast", "show");
        toast.textContent = mensaje;
      
        document.body.appendChild(toast);
      
        setTimeout(function() {
          document.body.removeChild(toast);
        }, 3000);
    }

    function mostrarToast() {
        const toast = document.createElement("div");
        toast.classList.add("toast", "show");

        toast.innerHTML = "¡Gracias por enviar el formulario!";
        
        document.body.appendChild(toast);
        
        setTimeout(function() {
            ocultarToast(toast);
            reiniciarCampos();
        }, 3000);
    }
      
    mostrarToast();

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
  }

  document.addEventListener("submit", function (goMimir){})