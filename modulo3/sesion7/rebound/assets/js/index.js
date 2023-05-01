const h2 = document.querySelector('#text');
const h3 = document.querySelector('#textReplaced')

  function reemplazarPalabras() {
    let text = h2.innerHTML;
    let palabras = ["sed", "vehicula", "vivamus", "nam", "eros", "vestibulum", "quam", "sollicitudin", "finibus", "dictum", "morbi" ];
    let palabraReemplazo = ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez", "once"];
    let color= ["#FF5500", "#FF99B2", "#FF99F5", "#BB99FF", "#99C5FE", "#00CEFF","#01FFFE","#00FF9F","#B6FF01","#FFF00","#FFB600"];
    let contador = {};

    for (let i = 0; i < palabras.length; i++) {
        let regex = new RegExp("\\b" + palabras[i] + "\\b" + "[\\s\\.,;:!?'\"]", "gi");

        let reemplazo =" " + "<b>" + (palabraReemplazo[i]) + "</b>" + " ";
        let repeticiones = text.match(regex).length;

        text = text.replaceAll(regex, reemplazo);
        console.log(`%c${palabras[i]}: ${repeticiones}`, `color: ${color[i]}`); 
    }
    h3.innerHTML = text;
    return text;
}

reemplazarPalabras();





