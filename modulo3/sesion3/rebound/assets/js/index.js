const card = document.getElementById("card");
const card2 = document.getElementById("card2");
const cardOverlay = document.getElementById("card-overlay");
const opciones = document.querySelectorAll('.dropdown-menu a');
const dropdownBtn = document.getElementById('dropdownBtn');
const containerCard = document.getElementById('containerCard');

let data = [
  {nombre: 'Treking', img: './assets/img/treking.jpg', subtitle: 'Villarica' , definition: '"Modalidad de excursionismo que consiste en recorrer a pie largas distancias o zonas determinadas, generalmente de alta montaña y poco frecuentadas por el turismo convencional."'},
  {nombre: 'Natación', img: './assets/img/natacion.jpg', subtitle: 'Lago', definition: '"Deporte o ejercicio que consiste en nadar; en las pruebas de natación se compite en velocidad, en cualquiera de los cuatro estilos: braza, crol, espalda y mariposa."'},
  {nombre: 'Ferry', img:'./assets/img/ferry.jpg', subtitle: 'Ferry', definition: '"Embarcación que realiza alternativamente el mismo recorrido entre dos puntos; especialmente la de grandes dimensiones destinada al transporte de cargas pesadas o pasajeros."'}
];

function selectOption(opcion){
    
    const selectedOption = data.find(op => op.nombre === (opcion.textContent || opcion));

    
    if (selectedOption) {
        const cardImg = card.querySelector('.card-img');
        const cardTitle = card.querySelector('.card-title');
        const cardSubtitle = card.querySelector('.card-text');
        const cardSecondaryText = card2.querySelector('.card-text');

        cardImg.src = selectedOption.img;
        cardImg.alt = selectedOption.subtitle;
        cardTitle.textContent = selectedOption.nombre;
        cardSubtitle.textContent = selectedOption.subtitle;
        cardSecondaryText.textContent = selectedOption.definition;

        const icon = document.createElement('i');
        icon.className = 'fa fa-map-marker';
        icon.setAttribute('aria-hidden', 'true');
        
        cardSubtitle.prepend(icon);
    }

}

opciones.forEach(opcion => {
    opcion.addEventListener('click', () => {
    opciones.forEach(opcion => {
    opcion.classList.remove('active');
    });
    opcion.classList.add('active');
    dropdownBtn.textContent = opcion.textContent;

    selectOption(opcion);
   
});
});
   
      


