const express = require("express");
const router = express.Router();

//Datos
let usuario = {
  nombre: "",
  apellido: "",
};

let respuesta = {
  error: false,
  codigo: 200,
  mensaje: "",
};

// /usuario
router.get("/", function (req, res) {
  // Original
  respuesta = {
    error: false,
    codigo: 200,
    mensaje: "",
  };
  if (usuario.nombre === "" || usuario.apellido === "") {
    // Modifica el objeto si NO ha sido creado el usuario
    respuesta = {
      error: true,
      codigo: 501,
      mensaje: `<p style="color:red"> El usuario no ha sido creado </p>`,
    };
  } else {
    // Si el usuario ha sido creado, muestra el objeto del mismo
    respuesta = {
      error: false,
      codigo: 200,
      mensaje: `<h1>${usuario.nombre} ${usuario.apellido}</h1>`,
      // respuesta: usuario,
    };
  }
  res.status(respuesta.codigo).send(`
    ${respuesta.mensaje}
  `);
});

router.post("/", function (req, res) {
  if (!req.body.nombre || !req.body.apellido) {
    respuesta = {
      error: true,
      codigo: 502,
      mensaje: "El campo nombre y apellido son requeridos",
    };
  } else {
    if (usuario.nombre !== "" || usuario.apellido !== "") {
      respuesta = {
        error: true,
        codigo: 503,
        mensaje: "El usuario ya fue creado previamente",
      };
    } else {
      usuario = {
        nombre: req.body.nombre, // Toma el valor del formulario en donde se indico el nombre
        apellido: req.body.apellido, // Toma el valor del formulario en donde se indico el apellido
      };
      respuesta = {
        error: false,
        codigo: 200,
        mensaje: "Usuario creado",
        respuesta: usuario,
      };
    }
  }

  res.send(respuesta);
});

router.put("/", function (req, res) {
  if (!req.body.nombre || !req.body.apellido) {
    respuesta = {
      error: true,
      codigo: 502,
      mensaje: "El campo nombre y apellido son requeridos",
    };
  } else {
    if (usuario.nombre === "" || usuario.apellido === "") {
      respuesta = {
        error: true,
        codigo: 501,
        mensaje: "El usuario no ha sido creado",
      };
    } else {
      usuario = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
      };
      respuesta = {
        error: false,
        codigo: 200,
        mensaje: "Usuario actualizado",
        respuesta: usuario,
      };
    }
  }

  res.send(respuesta);
});

router.delete("/", function (req, res) {
  if (usuario.nombre === "" || usuario.apellido === "") {
    respuesta = {
      error: true,
      codigo: 501,
      mensaje: "El usuario no ha sido creado",
    };
  } else {
    respuesta = {
      error: false,
      codigo: 200,
      mensaje: "Usuario eliminado",
    };
    usuario = {
      nombre: "",
      apellido: "",
    };
  }
  res.send(respuesta);
});

module.exports = router;
