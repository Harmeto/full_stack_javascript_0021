const suma = document.getElementById('sumar');
const parImparElement = document.getElementById('parImpar');
const mayuscula = document.getElementById('mayuscula');
const promedio = document.getElementById('promedio');

function sumar(){
    let num1 = parseInt(prompt('Ingrese numero 1'));
    let num2 = parseInt(prompt('Ingrese numero 2'));
    let result = num1 + num2;
    alert(`La suma da como resultado : ${result}`);
}

function parImpar(){
    let num1 = parseInt(prompt('Ingrese un numero'));
    
    if (num1 % 2 === 0) {
        alert(`${num1} es Par`)
    }else{
        alert(`${num1} es Impar`)
    }
}

function transMayuscula(){
    let texto = prompt('Ingrese un texto para transformarlo a mayus');
    let textoUpper = texto.toUpperCase();

    alert(`Su texto es:  ${textoUpper}`);
}

function calcularPromedio(){
    let num1 = parseInt(prompt('Ingrese numero 1'));
    let num2 = parseInt(prompt('Ingrese numero 2'));
    let num3 = parseInt(prompt('Ingrese numero 3'));

    let result = (num1 + num2 + num3) / 3;

    alert(`Su promedio es: ${result}`);
}



promedio.addEventListener("submit", function(event) {
    event.preventDefault();
    calcularPromedio();
});



suma.addEventListener("submit", function(event) {
    event.preventDefault();
   sumar();
});

parImparElement.addEventListener("submit", function(event) {
    event.preventDefault();
    parImpar()
    
});

mayuscula.addEventListener("submit", function(event) {
    event.preventDefault();
    transMayuscula();
});