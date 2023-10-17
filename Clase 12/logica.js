// tipos de datos (textos (string),numeros (number) y boolenos (boolean))

// "Lucas" (comillas dobles o simples) - string
// 10
// true / false

var edad; // declaro la variable, sin definirla
// var nombre = "Lucas" // defino la variable
// var nombre = "Lucas Ismael" // redefiniendo la variable (var)
// nombre = 10  // JS es un lenguaje debilmente tipado, ya que una variable puede ser todo

// permite redifinir si no se intenta redeclarar
let apellido = "Leon Rawr"
apellido = "Leon"

// fijo, no permite redefinir
const localidad = "San Miguel de Tucuman"
// localidad = "San Miguel de Tucuman, Tucuman" --> Esto no se puede


// alert(nombre) // mensaje popup
let nombre = prompt("¿Como te llamas?") // permite almacenar un STRING
alert(nombre)
let acepta = confirm("¿Acepta los terminos?")
// alert(acepta)
// console.log(acepta) // Hace que aparezcan los mensajes en la consola

if (acepta = true) {
  acepta = "acepto"
} else {
  acepta = "rechazo"
}

console.log("Me llamo " + nombre + " y sobre los términos yo los " + acepta)