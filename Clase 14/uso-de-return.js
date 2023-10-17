/*

// funcion declarada o expresada
function sumar() {
  return 2 + 2 // es necesario para que DEVUELVA un valor la funcion
  // console.log("leeme") no podrá ser ejecutada esta instruccion ya que está despues del return
}

*/

// invocar a la función
let resultado1 = sumar()
console.log("El resultado es " + resultado1)


function sumar(nro1, nro2) {
    return nro1 + nro2
}

function restar(nro1, nro2) {
    return nro1 - nro2
}

function multiplicar(nro1, nro2) {
    return nro1 * nro2
}

function dividir(nro1, nro2) {
    return nro1 / nro2
}