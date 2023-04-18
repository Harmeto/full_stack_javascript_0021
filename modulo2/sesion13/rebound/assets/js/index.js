const containerSkill = document.getElementById('skillCardContainer');
const proyectsContainer = document.getElementById('proyectsContainer');

let skills = [{name: 'VueJs', percent: '80', image: 'vueImg.svg'}, {name:'React', percent: '65', image: 'reactImg.svg'}, {name: 'Html', percent: '95', image: 'htmlImage.png'}, {name:'Css', percent: '75', image: 'cssImage.png'}]

let baseURL = './assets/img/'

skills.forEach(element => {

    let skillCard = `
                <div class="col-12 col-sm-6 col-xl-5">
                <div class="bg-white rounded shadow-sm p-3 p-md-4 p-xxl-5" style="width: 95%">
                <div class="row align-items-center mb-3">
                    <div class="col-2 col-sm-2">
                        <img src="${baseURL + element.image}" alt="${element.name}" class="img-fluid" style="max-width: 50px;">
                    </div>
                    <div class="col-10 col-sm-8">
                        <h3 class="fw-bold mb-2">${element.name}</h3>
                        <p class="text-secondary fst-italic mb-4">Nullam felis turpis, commodo id fermentum eget, semper vel odio.</p>
                    </div>
                </div>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: ${element.percent}%;" role="progressbar" aria-label="${element.name}" aria-valuenow="${element.percent}" aria-valuemin="0" aria-valuemax="100">${element.percent}%</div>
                </div>
                </div>
                </div>
                `;

    containerSkill.innerHTML += skillCard;
});

let proyects = [{img: 'gibly.png', title:"Gibly's Movies", descripction:'Conexion con API studio Gibly', link:'https://github.com/Harmeto/test', gitHubPage: 'https://harmeto.github.io/test/'},
{img:'firebaseLogo.png', title:'Gestor - Firebase 9', descripction: 'Gestion de usuarios con BD en Firebase v9', link:'https://github.com/Harmeto/ProyectoVueFirebase01'},{img: 'nirmodel.png', title: 'Pagina BootCamp', descripction: 'Pagina BootCamp, Bootstrap, JS', link: 'https://github.com/Harmeto/pubBootCamp'},{img:'game.png', title:'VideoJuego Canvas', descripction:'VideoJuego hecho con canvas js', link:'https://github.com/Harmeto/Game', gitHubPage:'https://harmeto.github.io/Game/'},{img:'pokedex.png', title:'Pokedex', descripction:'Pokedex hecha con Vanilla Javascript', link:'https://github.com/Harmeto/Pokedex', gitHubPage:'https://harmeto.github.io/Pokedex/'},{img:'mapa.png', title:'Ubicacion en RT', descripction:'App de ubicaciones', link:'https://github.com/Harmeto/mapa'}]

proyects.forEach(proyect =>{
    let proyectCard = `
    
    <div class="col-md-6 col-lg-4" >
        <div class="card my-3" style="width: 95%;">
            <img src="${baseURL + proyect.img}" class="card-image-top" alt="thumbnail">

            <div class="card-body">
                <h3 class="card-title"><a href="${proyect.link}" class="text-secondary">${proyect.title}</a></h3>
                <p class="card-text">${proyect.descripction}</p>
                <div class="d-flex justify-content-evenly"> 
                <a href="${proyect.link}" class="btn btn-dark">Repositorio</a>
                ${proyect.gitHubPage ? `<a href="${proyect.gitHubPage}" class="btn btn-dark">GitHub Page</a>` : ''}
                </div>
            </div>
        </div>
    </div>
    
    `;

    proyectsContainer.innerHTML += proyectCard;
})

// Obtener el formulario
const form = document.querySelector('.needs-validation');

// Validar el formulario
form.addEventListener('submit', function(event) {
  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
    
    // Mostrar el toast de error
    const errorToast = document.getElementById('errorToast');
    const errorToastInstance = new bootstrap.Toast(errorToast);
    errorToastInstance.show();
    
  } else {
    
    // Mostrar el toast de éxito
    const successToast = document.getElementById('successToast');
    const successToastInstance = new bootstrap.Toast(successToast);
    successToastInstance.show();
    
  }
  
  form.classList.add('was-validated');
  
});