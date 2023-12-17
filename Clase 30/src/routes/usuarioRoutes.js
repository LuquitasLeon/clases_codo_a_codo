import { Router } from "express";
const router = Router();

//Importando datos
import datos from "../model/datos.js";

// Mostrar todos los usuarios
router.get("/usuarios", (req, res) => {
  res.render("usuariosPublico", {
    data: datos,
  });
});

// Obtener un usuario
router.get("/usuarios/:id", (req, res) => {
  
  const usuario = datos.find(usuario => {
    return usuario.id === parseInt(req.params.id)
  })
  if (!usuario) {
    return res.status(404).send("Usuario no encontrado")
  }
  res.render("usuarioPerfil", {
    data: usuario,
  })

});

// Crear un usuario
router.post("/usuarios", (req, res) => {
  res.send("Creando un usuario...");
});

// Actualizar un usuario
router.put("/usuarios/:id", (req, res) => {
  res.send("Actualizando un usuario...");
});

// Eliminar un usuario
router.delete("/usuarios/:id", (req, res) => {
  res.send("Borrando un usuario...");
});

export default router;
