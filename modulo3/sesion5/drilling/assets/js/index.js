class Producto {
    constructor(imagen, titulo, descripcionCorta, precio) {
      this.imagen = imagen;
      this.titulo = titulo;
      this.descripcionCorta = descripcionCorta;
      this.precio = precio;
    }
  }

  const productos = [
    new Producto(
      "./assets/img/note1.jpg",
      "Producto 1",
      "Descripción corta del producto 1",
      "$99.99"
    ),
    new Producto(
      "./assets/img/note2.jpg",
      "Producto 2",
      "Descripción corta del producto 2",
      "$199.99"
    ),
    new Producto(
      "./assets/img/note3.jfif",
      "Producto 3",
      "Descripción corta del producto 3",
      "$299.99"
    )
  ];

  class CartaProducto {
    constructor(producto) {
      this.producto = producto;
    }

    renderizar() {
      const cartaProducto = document.querySelector("#producto");
      cartaProducto.innerHTML = `
        <div class="card mt-4" style="width: 30rem;">
        <img src="${this.producto.imagen}" class="card-img-top" alt="Imagen del producto"> 
        <div class="card-body">
            <h5 class="card-title">${this.producto.titulo}</h5>
            <p class="card-text">${this.producto.descripcionCorta}</p>
            <p class="card-text"> ${this.producto.precio}</p>
            <a href="#" class="btn btn-primary" id="comprar">Comprar</a>
            <a href="#" class="btn btn-primary" id="alternativas">Ver alternativas</a>
        </div>
        </div>
      `;

      const botonAlternativas = document.querySelector("#alternativas");
      botonAlternativas.addEventListener("click", () => {
        const indiceProductoActual = (productos.indexOf(this.producto) + 1) % productos.length;
        const productoActual = productos[indiceProductoActual];
        const cartaProductoActualizada = new CartaProducto(productoActual);
        cartaProductoActualizada.renderizar();
      });
    }
  }

  const primerProducto = productos[0];
  const cartaProductoInicial = new CartaProducto(primerProducto);
  cartaProductoInicial.renderizar();