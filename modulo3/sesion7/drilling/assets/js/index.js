class Vehiculo {
    constructor(marca, modelo, especificacionMotor) {
      this.marca = marca;
      this.modelo = modelo;
      this.especificacionMotor = especificacionMotor;
    }
  
    mostrarEspecificaciones() {
      console.log(`Especificaciones para ${this.modelo}:`);
      console.log(`Marca: ${this.marca}`);
      console.log(`Modelo: ${this.modelo}`);
      console.log(`Tipo de Motor: ${this.especificacionMotor.tipo}`);
      console.log(`Presión de sobrealimentación ( PSI ): ${this.especificacionMotor.psi}`);
      console.log(`Bloque del motor: ${this.especificacionMotor.bloque}`);
      console.log(`Desplazamiento ( L/CC ): ${this.especificacionMotor.lcc}`);
      console.log(`Caballos de Fuerza @ RMP: ${this.especificacionMotor.potencia}`);
      console.log(`Línea roja ( RPM ): ${this.especificacionMotor.rpm}`);
      console.log(`Sistema smart asist: ${this.especificacionMotor.ssAsist}`);
      console.log(`Inyección de combustible: ${this.especificacionMotor.inyeccion}`);
      console.log(`Encendido remoto del motor: ${this.especificacionMotor.remoto}`);
    }
  }
  
  class EspecificacionMotor {
    constructor({"potencia": potencia,"tipo": tipo, "psi":psi, "bloque":bloque, "lcc":lcc, "rpm":rpm, "ssAsist":ssAsist, "inyeccion":inyeccion, "remoto":remoto}) {
      this.potencia = potencia;
      this.tipo = tipo;
      this.psi = psi;
      this.lcc = lcc;
      this.rpm = rpm;
      this.ssAsist = ssAsist;
      this.inyeccion = inyeccion;
      this.remoto = remoto;
      this.bloque = bloque;
    }
  }

  const especificacionesGoenx = new EspecificacionMotor({
    potencia: "155 @ 6500",
    tipo: '4 cilindros en línea',
    rpm: 6700,
    bloque: 'Aleación/Aluminio',
    psi: null,
    inyeccion: 'Puntos Múltiples',
    ssAsist: null,
    lcc: "1.99 / 1996",
    remoto: null
  });

  const goenx = new Vehiculo("Peakauto", "Goenx", especificacionesGoenx);
  

  goenx.mostrarEspecificaciones();
  

  //sistema de clases con objetos como parametros cumple el objetivo del drilling que es mostrar un undefined cuando no se pasa 
  //la propiedad en la creacion de la clase, por tanto el operador opcional es innesesario 