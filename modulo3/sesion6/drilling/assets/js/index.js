const add = document.querySelector('#add');
const erase = document.querySelector('#erase');
const members = document.querySelector('#members');
const integrantes = [];

add.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = e.target.querySelector('input');
  const value = input.value;
 
  integrantes.push(value);
  members.innerHTML = integrantes;
  
  input.value = '';
});

erase.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const inputValue = e.target.querySelector('input');
    const index = integrantes.findIndex((elemento) => elemento === inputValue.value);
    if (index !== -1) {
      integrantes.splice(index, 1);
      members.innerHTML = integrantes;
      inputValue.value = ''
    } 
});
