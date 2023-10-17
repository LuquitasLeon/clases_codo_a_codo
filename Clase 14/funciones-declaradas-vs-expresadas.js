// invocar a la funcion
let resultado1 = sumar()
console.log("El resultado es " + resultado1)

// funcion declarada (no afecta el hoisting)
function sumar() {
  return 2 + 2
}

// funcion expresada (Se debe invocar SI o SI, luego de ser declarada)
const restar = function() {
  console.log(10 - 7)
}

restar()
restar()