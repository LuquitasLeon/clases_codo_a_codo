function Mascota(nombre, raza) {
  this.nombre = nombre;
  this.raza = raza;

  this.saludar = function() {
    console.log("Hola, mi mascota se llama" + this.nombre);
  };
}

const dumbi = new Mascota("Dumbi", "Dachshund");

dumbi.saludar();

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar = function() {
    console.log("Hola, me llamo" + this.nombre);
  };
}

let Lucas = new Persona("Santi", 80)

Lucas.saludar();