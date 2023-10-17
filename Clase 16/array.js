const estudiantes = [{nombre: "Rodri"}, {nombre: "Valen"}, {nombre: "Car"}, {nombre: "Lu"}, {nombre: "Guille"}, {nombre: "Nico"}]

// ["Rodri", "Valen", "Car"]
//     0        1       2

// Primero accedo a la posicion del array, y luego como me encontre con un objeto, utilizo el punto para acceder a la propiedad, asi conozco su valor
estudiantes[0].nombre

const alumnos = ["Rodri", "Valen", "Car"]

// Acceder
alumnos[0]

// Modificar
alumnos[0] = "Rodrigo"

// Para saber cuantos valores tiene el array
alumnos.length

// Agregar al final
alumnos.push("Manuel") // Devuelve la longitud nueva

// Agregar al principio
let nuevaLongitud = alumnos.unshift("Rigoberto") // Devuelve la longitud nueva

"La nueva longitud es " + nuevaLongitud

// Eliminar el ultimo
alumnos.pop() // Devuelve el valor quitado

// Quitar al principio
alumnos.shift() // Deuelve el valor quitado