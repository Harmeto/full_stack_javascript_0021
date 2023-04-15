let movies = [];  
let movieSelect = document.getElementById("movie-select");


fetch("https://studio-ghibli-films-api.herokuapp.com/api")
  .then(response => response.json())
  .then(data => {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        let movie = data[key]; 
        console.log(movie)

        let option = document.createElement("option");
        option.value = movie.title;
        option.text = movie.title;
        movieSelect.appendChild(option);

        movies.push(movie);
      }
    }
  });

function showSelectedMovie() {
  const selectedMovie = this.value;
  const movie = movies.filter(movie => movie.title === selectedMovie)[0]; 

  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = '';
  const card = createCard(movie);
  cardContainer.innerHTML = card;


}

function createCard(movie) {
  const card = `
  <div class="card">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="${movie.poster}" class="card-img" alt="${movie.title}">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${movie.title}</h5>
        <p class="card-text">${movie.synopsis}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong>Romman Title:</strong> ${movie.hepburn}</li>
        <li class="list-group-item"><strong>Director:</strong> ${movie.director}</li>
        <li class="list-group-item"><strong>Screenwriters:</strong> ${movie.screenwriters.join(', ')}</li>
        <li class="list-group-item"><strong>Producers:</strong> ${movie.producers.join(', ')}</li>
        <li class="list-group-item"><strong>Genre:</strong> ${movie.genre}</li>
        <li class="list-group-item"><strong>Runtime:</strong> ${movie.runtimeMinutes} min</li>
        <li class="list-group-item"><strong>Release date:</strong> ${movie.release}</li>
        <li class="list-group-item"><strong>Awards:</strong> ${movie.awards.join(', ')}</li>
        <li class="list-group-item"><strong>Box office:</strong> ${movie.boxOfficeUSD}</li>
        <li class="list-group-item"><strong>Budget:</strong> ${movie.budgetUSD}</li>
        <li class="list-group-item"><strong>Music:</strong> ${movie.music}</li>
        <li class="list-group-item"><strong>Rating:</strong> ${movie.rating}</li>
        <li class="list-group-item"><strong>Reviews:</strong> Rotten Tomatoes: ${movie.reviews.rottenTomatoes}, IMDB: ${movie.reviews.imdb}</li>
      </ul>
    </div>
  </div>
</div>
  `;
  return card;
}

function showDefaultCard() {
  const carta = `
  <div class="card"> 
    <div class="row no-gutters"> 
      <div class="col-md-12"> 
        <img class="card-img" src="./assets/img/Studio_Ghibli_logo.svg.png"/>
      </div>
      <div class="card-body"> 
        <h5 class="card-title text-center">No se ha seleccionado ninguna película</h5> 
        <p class="card-text text-center">Por favor, selecciona una película de la lista para ver su información</p> 
      </div> 
    </div> 
  </div> 
    `;
  
  const defaultCard = document.getElementById('defaultCard-container');
  defaultCard.innerHTML = '';
  defaultCard.innerHTML = carta;
  }
  

  showDefaultCard();
  
 
  function showSelectedMovie() {
  const selectedMovie = this.value;
  const movie = movies.filter(movie => movie.title === selectedMovie)[0];
  
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = '';
  const card = createCard(movie);
  cardContainer.innerHTML = card;

  const defaultCard = document.getElementById('defaultCard-container');
  defaultCard.innerHTML = '';

  }
  
 
  movieSelect.addEventListener('change', showSelectedMovie);
