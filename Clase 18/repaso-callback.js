/*
Las funciones pueden tomar como parámetros:
- string ("texto"): Si necesito manejar un dato en texto
- number(100): Si necesito manejar un dato en numero
- boolean(true): Si necesito manejar un dato en booleano, verdadero o falso
- array ([ ]): Si necesito manejar múltiples valores
- object ({ }): Si necesito manejar objetos con propiedades y valores
- funciones --> son llamados callbacks: De forma sincrónica, es para indicar que ejecute diferentes instrucciones.
*/

// Ejemplos
// El callback nos permite poder realizar distintas acciones según el dato obtenido. Veamos:

function saludar(nombre, callback) {
  console.log("ejecutando callback...");
  callback(nombre);
}

// saludo al entrar
saludar("Lucas", function (elNombre) {
  console.log(`Hola ${elNombre}`); // backtick
  // console.log("hola " + elNombre) //
});

// Despido al salir
saludar("Lucas", function (elNombre) {
  console.log(`Chau ${elNombre}`);
});

// Métodos avanzados de array

// clientes
let clientes = [
  {
    nombre: "Lucas",
    localidad: "Tucuman",
    membresia: true,
    abonoMensual: 1000,
  },
  {
    nombre: "José",
    localidad: "colegiales",
    membresia: false,
    abonoMensual: 0,
  },
  {
    nombre: "Maria",
    localidad: "Parque Patricios",
    membresia: true,
    abonoMensual: 1600,
  },
  {
    nombre: "Natalia",
    localidad: "Mataderos",
    membresia: true,
    abonoMensual: 700,
  },
];

// Find
let resultado = clientes.find((item) => item.nombre == "Lucas");
/* let resultado = clientes.find( function(item) {
return item.nombre == "Lucas"
})
*/

console.log(resultado);
