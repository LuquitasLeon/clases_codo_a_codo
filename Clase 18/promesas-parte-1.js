let clientes = [
  {
    id: 1,
    nombre: "Lucas",
    localidad: "Tucuman",
    membresia: true,
    abonoMensual: 1000,
  },
  {
    id: 2,
    nombre: "José",
    localidad: "Colegiales",
    membresia: false,
    abonoMensual: 0,
  },
  {
    id: 3,
    nombre: "Maria",
    localidad: "Parque Patricios",
    membresia: true,
    abonoMensual: 1600,
  },
  {
    id: 4,
    nombre: "Natalia",
    localidad: "Mataderos",
    membresia: true,
    abonoMensual: 700,
  },
];

function getClientes() {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      res(clientes);
    }, 3000);
  });
}

// 1er then para obtener toda la info y retornar solo una persona
// 2do then para retornar el nombre de la persona
getClientes()
  .then((info) => {
    // 1er then
    return info.find((item) => item.id == 1);
  })
  .then((persona) => {
    //2do then
    return persona.nombre;
  })
  .then((nombre) => {
    console.log(nombre);
    return nombre;
  });
