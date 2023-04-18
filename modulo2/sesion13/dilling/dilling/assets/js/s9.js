const text1 = $('#text1');
const text2 = $('#text2');
const caja2 = $('#caja2');
const img = $('#img');
const caja3 = $('#caja3');

let originalFontSize = caja3.css('font-size');

text1.mouseover(() => {
  text2.css('display', 'block');
});

text1.mouseout(() => {
  text2.css('display', 'none');
});

$('#caja2').click(function() {
  const img = $('#img');

  //se usa esta forma por que jquery trabaja con pixeles ahora
  const widthInPixels = img.width();
  const containerWidthInPixels = img.parent().width();
  const widthInPercent = (widthInPixels / containerWidthInPixels) * 100;

   
  if (widthInPercent < 100) {
    img.css('width', '100%');
  } else {
    img.css('width', '20%');
 
  }

});

caja3.dblclick(() => {
  if (caja3.css('font-size') === originalFontSize) {
    caja3.css('font-size', '24px');
  } else {
    caja3.css('font-size', originalFontSize);
  }
});