import { Router } from "express";
const router = Router();

//Importando datos
import datos from "../model/datos.js";
import datosFalsos from "../model/datos.js";

// Mostrar todos los usuarios
router.get("/admin/usuarios", (req, res) => {
  res.render("usuariosAdmin", {
    data: datos,
  });
});

// Crear usuario
router.get("/admin/usuarios/crear", (req, res) => {
  res.render("usuarioCrear", {});
});

router.post("/admin/usuarios", (req, res) => {
  // Toma info del formulario
  const nuevoUsuario = req.body;
  nuevoUsuario.id = datos.length + 1;
  datos.push(nuevoUsuario);
  res.status(202).json(nuevoUsuario);
});

// Obtener un usuario
router.get("/admin/usuarios/:id", (req, res) => {
  const usuario = datos.find((usuario) => {
    return usuario.id === parseInt(req.params.id);
  });
  if (!usuario) {
    return res.status(404).send("Usuario no encontrado");
  }
  res.render("usuarioPerfilAdmin", {
    data: usuario,
  });
});

// Actualizar usuario
router.post("/admin/usuarios/:id", (req, res) => {
  res.send(req.body);
});

// Eliminar un usuario
router.get("/admin/usuarios/borrar/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const usuarioIndex = datos.findIndex((u) => u.id === id);

  if (usuarioIndex === -1) {
    return res.status(404).json({ mensaje: "Usuario no encontrado" });
  }

  const usuarioEliminado = datos.splice(usuarioIndex, 1);

  res.json(usuarioEliminado[0]);
});

export default router;
