import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="d-flex container-fluid card flex-row">
   <div class="mx-4">
    <div class="card-title">
      <h2 class="mx-2 text-left">Mejora tu pizza</h2>
    </div>
    <p>Puedes elegir hasta 3 ingredientes gratis. Cada ingrediente adicional cuesta $800 c/u.</p>
    <div class="lista">
      <p class="text-left">Ingredientes disponibles para agregar a tu pizza: </p>
      <ul class="lista-check">
      <li class="list-group-item">
        <input type="checkbox" id="carne">
        <label for="carne">Carne</label>
      </li>
      <li class="list-group-item">
        <input type="checkbox" id="pollo">
        <label for="pollo">Pollo</label>
      </li>
      <li class="list-group-item">
        <input type="checkbox" id="tocino">
        <label for="tocino">Tocino</label>
      </li>
      <li class="list-group-item">
        <input type="checkbox" id="mozzarella">
        <label for="mozzarella">Mozzarella</label>
      </li>
      <li class="list-group-item">
        <input type="checkbox" id="champinon">
        <label for="champinon">Champiñón</label>
      </li>
      <li class="list-group-item">
        <input type="checkbox" id="cebolla">
        <label for="cebolla">Cebolla</label>
      </li>
      <li class="list-group-item">
        <input type="checkbox" id="pina">
        <label for="pina">Piña</label>
      </li>
      <li class="list-group-item">
        <input type="checkbox" id="pimenton">
        <label for="pimenton">Pimentón</label>
      </li>
    </ul>
    </div>
    <div class="ingredientes">
      <p class="text-left">Los ingredientes seleccionados son: </p>
      <p id="ingredientes-select"></p>
    </div>
    <div class="ingredientes">
      <p class="text-left">Los ingredientes <strong> extras </strong> seleccionados son: </p>
      <p id="ingredientes-extras"></p>
    </div>
   </div>
   <div>
   <div class="card-title">
    <h2 class="mx-2">Resumen del Pedido</h2>
   </div>
    <div class="pizza">
      <p> PIZZA XL </p> <p> <strong>$15.000</strong></p>
    </div>
    <hr>
    <div class="pizza">
     <p> INGREDIENTES EXTRAS </p> <p > <strong id="precio"></strong></p>
    </div>
    <hr>
    <div class="pizza">
      <p> PROPINA </p> <p> <strong id="propina"></strong></p>
    </div>
    <hr>
    <div class="input-group mb-3">
      <input type="number" class="form-control rounded-right" placeholder="Ingrese Propina" id="textPropina">
      <div class="input-group-append">
        <button class="btn btn-dark rounded-left" type="button" id="btnPropina">Enviar pedido con propina</button>
      </div>
    </div>
   </div>
  </div>
`;

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const list = document.querySelector('#ingredientes-select');
const list2 = document.querySelector('#ingredientes-extras');
const btnPropina = document.querySelector('#btnPropina');
const textPropina = document.querySelector('#textPropina');
const propina = document.querySelector('#propina');
const extra = document.querySelector('#precio');
console.log(checkboxes);
const array2 = [];
const array1 = [];

checkboxes.forEach(checkbox =>{
  checkbox.addEventListener('change', ()=>{

    if(checkbox.checked){
      if(array1.length < 3){
        array1.push(checkbox.id);
        list.innerHTML = `${array1}`;
      }else{
        array2.push(checkbox.id);
        list2.innerHTML = `${array2}`;
        extra.innerHTML = `$ ${array2.length * 800}`
      }
    }

    if(!checkbox.checked){
      const index1 = array1.indexOf(checkbox.id);
      const index2 = array2.indexOf(checkbox.id);

      if(index1 > -1){
        array1.splice(index1,1);
        list.innerHTML = array1;
      }

      if(index2 > -1){
        array2.splice(index2, 1);
        list2.innerHTML = array2;
        extra.innerHTML = `$ ${array2.length * 800}`
      }
    }

  });
});

btnPropina.addEventListener('click', (e)=>{
  e.preventDefault();

  if(textPropina.value == ''){
    propina.innerHTML = '$1000'
  }else{
    propina.innerHTML = `$ ${textPropina.value}` 
    alert(`Su propina de $${textPropina.value} ha sido enviada.`)
  }
  
})





