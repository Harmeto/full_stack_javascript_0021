const reserva = new Proxy({}, {
    set: function(target, prop, value) {
        if (prop === 'edad' && value < 18) {
            alert('Debes ser mayor de 18 años');
            return false;
        } else {
            target[prop] = value;
            return true;
        }
    }
});

$('#enviar').click(function(e) {
    e.preventDefault();

    reserva.nombre = $('#nombre').val();
    reserva.apellido = $('#apellido').val();
    reserva.correo = $('#correo').val();
    reserva.edad = $('#edad').val();
    reserva.fecha = $('#fecha').val();

    if (reserva.edad >= 18) {
        console.log(reserva);
        $('#formulario').submit();
    }
});