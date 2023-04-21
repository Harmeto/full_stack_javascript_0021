const title = document.getElementById('title');
const text = document.getElementById('text');
const date = document.getElementById('date');

function getFormattedDate() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1; // Los meses van de 0 a 11, por eso se suma 1
    const year = today.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;
  
    return formattedDate;
}

function cardText(){
    title.innerHTML = '¡Apresúrese!';
    text.innerHTML = 'El plazo maximo para inscribirse es despues de la siguiente fecha: ';
    date.innerHTML = getFormattedDate();
}



cardText();