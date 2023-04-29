class Bebida {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
  }

const bebidas = [
    new Bebida("Café", 1.99),
    new Bebida("Té", 2.49),
    new Bebida("Jugo", 3.99)
];

class Producto {
  constructor(nombre, precio, img) {
    this.nombre = nombre;
    this.precio = precio;
    this.img = img
  }
}

const productos = [
  new Producto("Pasta", 4.99, "./assets/img/pasta.png"),
  new Producto("Lasaña", 7.99, "./assets/img/lasaña.avif"),
  new Producto("Sopita", 9.99, "./assets/img/sopita.jpg")
];

class CartaBebida {
    constructor(bebida, footer){
        this.bebida = bebida;
        this.footer = footer;
    }

    renderizar(indice) {
        const cartaBebida = document.querySelector("#bebida");
        cartaBebida.innerHTML += `
            <div class="card" style="width: 50vw;">
                <div class="card-body d-flex flex-row justify-content-between">
                    <div class="d-flex">
                        <input class="m-2 form-check-input bebi" type="checkbox" id="checkbox-${indice}" />
                        <h5 class="card-title mx-2">${this.bebida.nombre}</h5>
                    </div>
                    <p class="card-text mx-2">${this.bebida.precio}</p>
                </div>
            </div>
        `;

        const checkboxBebida = document.querySelectorAll('input[type="checkbox"].bebi');
        
        checkboxBebida.forEach((element) => {
            element.addEventListener("click", (event) => {
                const indice = event.currentTarget.id.split("-")[1];
                if (event.currentTarget.checked) {
                    this.footer.agregarProducto(bebidas[indice]);
                } else {
                    this.footer.eliminarProducto(bebidas[indice]);
                }
            });
        });
    
        return cartaBebida;
    }
}

class CartaProducto {
  constructor(producto, footer) {
    this.producto = producto;
    this.footer = footer;
  }


  renderizar(indice) {
    const cartaProducto = document.querySelector("#producto");
    cartaProducto.innerHTML += `
        <div class="card" style="width: 50vw;">
            <div class="card-body d-flex flex-row justify-content-between">
                <div class="d-flex">
                    <input class="m-2 form-check-input prod" type="checkbox" id="checkbox-${indice}" />
                    <h5 class="card-title mx-2">${this.producto.nombre}</h5>
                </div>
                <img class="img-fluid" src="${this.producto.img}" />
                <p class="card-text mx-2">${this.producto.precio}</p>
            </div>
        </div>
    `;


    const checkboxProducto = document.querySelectorAll('input[type="checkbox"].prod');
        
    checkboxProducto.forEach((element) => {
        element.addEventListener("click", (event) => {
            const indice = event.currentTarget.id.split("-")[1];
            if (event.currentTarget.checked) {
                this.footer.agregarProducto(productos[indice]);
            } else {
                this.footer.eliminarProducto(productos[indice]);
            }
        });
    });

 

    return cartaProducto;
  }
}

class CartaFooter {
    constructor() {
        this.productos = [];
        this.total = 0;
        this.elementoTotal = document.querySelector("#total");
    }

    actualizarLista(elemento, action){
        const items = document.querySelector('#items');
        const lastRow = items.lastElementChild;


        if(action == 'add'){
            lastRow.insertAdjacentHTML('beforebegin', `
            <tr id="${elemento.nombre}">
                <th scope="row">${elemento.nombre}</th>
                <td>${elemento.precio}</td>
            </tr>
            `);

          
        }

        if(action == 'erase') {
            let nameItem =  elemento.nombre;
            const removeItem = document.getElementById(nameItem);
            removeItem.remove()
        }

    }

    agregarProducto(elemento) {
        const add = 'add';

        this.productos.push(elemento);
        this.total += elemento.precio;
        this.actualizarLista(elemento, add);
        this.actualizarTotal();
    }

    eliminarProducto(elemento){
    const erase = 'erase';

    let index =  this.productos.findIndex(prod => prod.nombre === elemento.nombre);

    
    if (index !== -1) {
        this.productos.splice(index, 1);
        this.total -= elemento.precio;
    }
 
    this.actualizarLista(elemento, erase);
    this.actualizarTotal();
    
    }

  actualizarTotal() {
    this.elementoTotal.innerHTML = `$${this.total.toFixed(2)}`;
  }
}

const cartaFooter = new CartaFooter();

bebidas.forEach((bebida, indice) => {
    const cartaBebida = new CartaBebida(bebida, cartaFooter);
    const ul = document.querySelector("#carta-bebida");
    ul.appendChild(cartaBebida.renderizar(indice));
});




productos.forEach((producto, indice) => {
  const cartaProducto = new CartaProducto(producto, cartaFooter);
  const ul = document.querySelector("#carta-productos");
  ul.appendChild(cartaProducto.renderizar(indice));
});