// Obtener los elementos HTML que necesitamos
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const caja2 = document.getElementById('caja2');
const img = document.getElementById('img');
const caja3 = document.getElementById('caja3');

// Agregar eventos a los elementos HTML
text1.addEventListener('mouseover', () => {
  text2.style.display = 'block';
});

text1.addEventListener('mouseout', () => {
  text2.style.display = 'none';
});

caja2.addEventListener('click', () => {
  if (img.style.width === '20%') {
    img.style.width = '40%';
  } else {
    img.style.width = '20%';
  }
});

caja3.addEventListener('dblclick', () => {
  caja3.style.fontSize = '24px';
});