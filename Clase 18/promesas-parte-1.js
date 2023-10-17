let clientes = [
  {
      id: 1,
      nombre: "Santi",
      localidad: "villa urquiza",
      membresia: true,
      abonoMensual: 1000
  },
  {
      id: 2,
      nombre: "José",
      localidad: "colegiales",
      membresia: false,
      abonoMensual: 0
  },
  {
      id: 3,
      nombre: "Maria",
      localidad: "Parque Patricios",
      membresia: true,
      abonoMensual: 1600
  },
  {
      id: 4,
      nombre: "Natalia",
      localidad: "Mataderos",
      membresia: true,
      abonoMensual: 700
  }
]

function getClientes() {
  return new Promise(function (res, rej) {
      setTimeout(function () {
          res(clientes)
      }, 3000)
  })
}

getClientes()
  .then(info => {
      return info.find(item => item.id == 1) 
  })
  .then(persona => {
     return persona.nombre
   })
  .then(nombre => {
 console.log(nombre)
  return nombre
})