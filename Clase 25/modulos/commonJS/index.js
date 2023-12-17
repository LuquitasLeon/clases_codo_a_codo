// CommonJS
const texto = require("./string");
// desestructuracion de objetos (me permite importar SOLO el codigo que necesito)
const { saludar, profe } = require("./multiple");

// console.log(multiple);

console.log(saludar("Lucas"));
console.log(profe.nombre);
// console.log(multiple.materias[0])
// console.log(multiple.numero)
