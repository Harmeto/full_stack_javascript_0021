function calcular(pnumber, pnumber2){
    let num1 = prompt('Ingrese numero 1')
    let num2 = prompt('Ingrese numero 2')

    if(parseInt(num1) == parseInt(num2)){
        alert('Numeros tienen mismo valor')
    }else if(parseInt(num1) > parseInt(num2)){
        alert(`${num1} es mayor a ${num2}`)
    }else if(parseInt(num1) <parseInt(num2)){
        alert(`${num2} es mayor a ${num1}`)
    }else if((num1 || num2) !== Number){
        if((num1 || num2) !== null){
            alert(`Usted Ingreso: ${num1} y  ${num2}, favor ingrese solo numeros`)
        }else{
            alert('Sin trolear pls, ingrese numeros')
        }
    }
        
}

calcular();