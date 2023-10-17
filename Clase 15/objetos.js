let primerNombre = "Lucas";

/* Tabla estudiantes */
const estudiante1 = {

  /* propiedad: valor */
  codigo: "BM001",
  primerNombre: "Basilio",
  apellido: "Murillo",
  avatar: "https://picsum.photos/1000",
  edad: "50",
  //metodo
  salude: function () {
    console.log("Hola, mi nombre es " + this.primerNombre);
  },
};

estudiante1.salude();

// Agregar propiedad
estudiante1.activo = true;

// Ver propiedad (nombre del objeto.propiedad)
console.log(estudiante1.codigo);

// Borrar propiedad
delete estudiante1.activo;