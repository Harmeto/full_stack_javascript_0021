function calcular(num1, num2){
    num1 = prompt('Ingrese numero 1')
    num2 = prompt('Ingrese numero 2')

    if(parseInt(num1) == parseInt(num2)){
        return  alert('Numeros tienen mismo valor')
    }else if(parseInt(num1) > parseInt(num2)){
        return  alert(`${num1} es mayor a ${num2}`)
    }else if(parseInt(num1) <parseInt(num2)){
        return  alert(`${num2} es mayor a ${num1}`)
    }else if((num1 || num2) !== Number){
        if((num1 || num2) !== null){
            return alert(`Usted Ingreso: ${num1} y  ${num2}, favor ingrese solo numeros`)
        }else{
            return  alert('Sin trolear pls, ingrese numeros')
        }
    }
        
}


function sumar(num1, num2){
    num1 = prompt('Ingrese numero 1');
    num2 = prompt('Ingrese numero 2');

    if( ( isNaN(parseInt(num1)) ) || (isNaN(parseInt(num2)))){
        alert(`Ingreso ${num1.toString()} y ${num2.toString()}, ingrese numeros.`)
    }else{
        let result = parseInt(num1) + parseInt(num2);
        return alert(`El resultado de la suma es :${result}`)
    }

}

function restar(num1, num2){
    num1 = prompt('Ingrese numero 1');
    num2 = prompt('Ingrese numero 2');

    if( ( isNaN(parseInt(num1)) ) || (isNaN(parseInt(num2)))){
        return  alert(`Ingreso ${num1.toString()} y ${num2.toString()}, ingrese numeros.`)
    }else{
        let result = parseInt(num1) - parseInt(num2);
        return alert(`El resultado de la suma es :${result}`)
    }
}

function multiplicar(num1, num2){
    num1 = prompt('Ingrese numero 1');
    num2 = prompt('Ingrese numero 2');

    if( ( isNaN(parseInt(num1)) ) || (isNaN(parseInt(num2)))){
        return  alert(`Ingreso ${num1.toString()} y ${num2.toString()}, ingrese numeros.`)
    }else{
        let result = parseInt(num1) * parseInt(num2);
        return alert(`El resultado de la suma es :${result}`)
    }
}

function dividir(num1, num2){
    num1 = prompt('Ingrese numero 1');
    num2 = prompt('Ingrese numero 2');

    if( ( isNaN(parseInt(num1)) ) || (isNaN(parseInt(num2)))){
        return  alert(`Ingreso ${num1.toString()} y ${num2.toString()}, ingrese numeros.`)
    }else{
        
      if(num1 != 0 && num2 != 0 ){
        let result = parseInt(num1) / parseInt(num2);
        return alert(`El resultado de la division es :${result}`)
      } 

      alert('No se puede dividir por 0')

       
    }
}

function mostrar(num1, num2){
    num1 = prompt('Ingrese numero 1');
    num2 = prompt('Ingrese numero 2');

    if( ( isNaN(parseInt(num1)) ) || (isNaN(parseInt(num2)))){
        return  alert(`Ingrese solo numeros.`)
    }else{
        return alert(`Usted ingreso: ${num1} y ${num2}`)
    }

}

function menu(selector){
   
    while (selector != 7) {
        selector = prompt(
            'Selecciona que hacer:' +
            '\n1-Calcular cual numero es mayor, menor o iguales.' + 
            '\n2-Sumar' +
            '\n3-Restar' +
            '\n4-Multiplicar' + 
            '\n5-Dividir' + 
            '\n6-Mostrar Numeros Ingresados'+
            '\n7-Salir'
        )
    
        switch (selector) {
            case '1':
            calcular();
            break;
            case '2':
            sumar();
            break;
            case '3':
            restar();
            break;
            case '4':
            multiplicar();
            break;
            case '5':
            dividir();
            break;
            case '6':
            mostrar();
            break;
            case '7':
            alert('Adios')
            break;
                
            default:
                break;
        }
    }

}

menu()