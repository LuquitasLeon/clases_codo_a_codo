const express = require("express");
const router = express.Router();
// Libreria para agregar imagenes al servidor
const multer = require("multer");
const { body, validationResult } = require("express-validator");

// Configuracion de Multer para el almacenamiento de archivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Simulacion de manejar los datos de las imagenes en una base de datos
let imagenesSubidas = [];

router.get("/agregar", (req, res) => {
  res.render("agregar", {
    titulo: "Agregar imagen",
    gracias: false,
    huboError: false,
  });
});

router.post(
  "/agregar",
  upload.single("foto"),
  [body("descripcion").notEmpty().withMessage("Indicar una descripcion")],
  (req, res) => {

    // Validacion
    const errores = validationResult(req);

    if (!errores.isEmpty()) {
      return res.render("agregar", {
        titulo: "Agregar imagen",
        gracias: false,
        huboError: true,
        errores: errores.errors, // Mensajes de error
      })
    }

    // Simulo que seria el registro que quiero insertar en la base de datos
    let imagen = {
      id: imagenesSubidas.length + 1,
      descripcion: req.body.descripcion,
      nombre: req.file.filename,
    };

    imagenesSubidas.push(imagen);

    res.render("agregar", {
      titulo: "Imagen subida",
      gracias: true,
      huboError: false,
    });
  }
);

router.get("/todas", (req, res) => {
  res.render("todas", {
    datos: imagenesSubidas,
  });
});

router.get("/editar/:id", (req, res) => {
  // Tomar de la URL el id
  const id = parseInt(req.params.id);

  // Busca entre el array de objetos al objeto
  const imagen = imagenesSubidas.find((img) => img.id === id);

  if (imagen) {
    res.render("editar", {
      imagen,
    });
  } else {
    res.status(404).send("No se encuentra el ID");
  }
});

// Datos para editar
router.post("/editar/:id", upload.single("foto"), (req, res) => {
  const id = parseInt(req.params.id);

  //Tomamos el array de objetos y buscamos la imagen a actualizar
  imagenesSubidas.find((img) => {
    if (img.id === id) {
      img.nombre = req.file.filename;
      img.descripcion = req.body.descripcion;
    }
  });

  res.render("todas", {
    datos: imagenesSubidas,
  });
});

router.get("/borrar/:id", (req, res) => {
  const id = parseInt(req.params.id);

  // Buscar todas las imagenes (objetos) que NO coincidan con el ID pasado
  imagenesSubidas = imagenesSubidas.filter((img) => img.id !== id);

  res.render("todas", {
    datos: imagenesSubidas,
  });
});

module.exports = router;
