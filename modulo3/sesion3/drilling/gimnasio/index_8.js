
function imprimirNumerosDel1Al10() {
    let suma = 0;
    for (let i = 1; i <= 10; i++) {
      suma += i;
    }
    return suma;
  }

 


  function calcularDescuento(precio, tipoDescuento) {
    switch (tipoDescuento) {
      case 'ninguno':
        return precio;
      case '10%':
        return precio * 0.9;
      case '20%':
        return precio * 0.8;
      case '30%':
        return precio * 0.7;
      default:
        return precio;
    }
  }


  

  function sumarNumerosPares(num) {
    let suma = 0;
    let i = 2; 
    while (i <= num) {
      if (i % 2 === 0) { 
        suma += i;
      }
      i++;
    }
    return suma;
  }


  

  function contarVocales(cadena) {
    let cantidadVocales = 0;
    for (let i = 0; i < cadena.length; i++) {
      const letra = cadena[i].toLowerCase(); 
      if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        cantidadVocales++;
      }
    }
    return cantidadVocales;
  }



  function contarCaracter(cadena, caracter) {
    let cantidad = 0;
    for (let i = 0; i < cadena.length; i++) {
      if (cadena[i] === caracter) {
        cantidad++;
      }
    }
    return cantidad;
  }
