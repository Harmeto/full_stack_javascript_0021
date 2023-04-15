class Cliente {
    constructor({ nombre = "", id = "", clave = "", saldo = 0 } = {}) {
        this.nombre = nombre;
        this.id = id;
        this.clave = clave;
        this.saldo = saldo;
    }
  
    deposito() {
      const cantidad = Number(prompt("Ingrese la cantidad a depositar:"));
      if (isNaN(cantidad) || cantidad <= 0) {
        alert("Cantidad inválida.");
      } else {
        this.saldo += cantidad;
        alert(`Su nuevo saldo es ${this.saldo}.`);
      }
    }
  
    giro() {
      const cantidad = Number(prompt("Ingrese la cantidad a girar:"));
      if (isNaN(cantidad) || cantidad <= 0 || cantidad > this.saldo) {
        alert("Cantidad inválida.");
      } else {
        this.saldo -= cantidad;
        alert(`Su nuevo saldo es ${this.saldo}.`);
      }
    }
  }
  
 
  const clientes = [
    new Cliente({nombre: "Juan", id: "1234", clave: "clave1", saldo: 1000}),
    new Cliente({nombre: "Pedro", id: "5678", clave: "clave2", saldo: 500}),
    new Cliente({nombre: "María", id: "9012", clave: "clave3", saldo: 2000})
  ];
  

  const id = prompt("Ingrese su identificador:");
  const clave = prompt("Ingrese su clave:");
  

  const cliente = clientes.find(c => c.id === id && c.clave === clave);
  
 
  if (!cliente) {
    alert("Identificador o clave incorrectos.");
  } else {

    let opcion;
    do {
      opcion = prompt(
        `Bienvenido ${cliente.nombre}. ¿Qué desea hacer?\n1. Ver saldo\n2. Hacer un depósito\n3. Hacer un giro\n4. Salir`
      );
      switch (opcion) {
        case "1":
          alert(`Su saldo es ${cliente.saldo}.`);
          break;
        case "2":
          cliente.deposito();
          break;
        case "3":
          cliente.giro();
          break;
        case "4":
          alert("Gracias por usar nuestros servicios.");
          break;
        default:
          alert("Opción inválida.");
      }
    } while (opcion !== "4");
  }