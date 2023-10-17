const estudiantes = [
  {id: 1, nombre: "Rodri", edad: 19, status: true},
  {id: 2, nombre: "Valen", edad: 23, status: true},
  {id: 3, nombre: "Car", edad: 20, status: true},
  {id: 4, nombre: "Lu", edad: 25, status: false},
  {id: 5, nombre: "Guille", edad: 32, status: true},
  {id: 6, nombre: "Nico", edad: 28, status: false}
];

// Recorre el array, NO devuelve nada
estudiantes.forEach(function (item) {
  console.log(item)
})

// every (todos los valores cumplen la condicion?)
let todosActivos = estudiantes.every( student => student.status = true ) // este devolveria false

// some (Si algun valor cumple la condicion)
let algunosActivos = estudiantes.some( student => student.status = true ) // este devolveria true

// reduce (acc = 0, item (objeto))
let total = estudiantes.reduce( (acc, item) => acc + item.edad, 0)
let promedio = total / estudiantes.length
"El promedio de edad es de " + promedio + " años."

// filter (Crea un nuevo array, con todos los valores que coincidan) - Devuelve un array con los que tendrian mas de 25 de edad
let filtrados = estudiantes.filter( item => item.edad >= 25)

let filtrados2 = estudiantes.filter( item => item.status == true)

// Busca SOLO un valor, el primero que encuentre - (Usar para encontrar algo que tenga dato unico, que no se repita)
estudiantes.find( item => item.id == 2)

// Map
let numeros = [1, 2, 3, 4, 5]

let mutiplicados = numeros.map( item => item * 9)
multiplicados