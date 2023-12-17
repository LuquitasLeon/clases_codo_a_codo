import { Router } from "express";
const router = Router();
import { getAllUsuarios } from "../controllers/adminUsuariosCtrl.js";

// Importara los CONTROLLERS

// Mostrar todos los usuarios
router.get("/admin/usuarios", getAllUsuarios);

// Crear usuario
router.get("/admin/usuarios/crear", (req, res) => {

});

// Manejo de datos del form
router.post("/admin/usuarios", (req, res) => {

});

// Obtener un usuario
router.get("/admin/usuarios/:id", (req, res) => {

});

// Actualizar usuario
router.post("/admin/usuarios/:id", (req, res) => {

});

// Eliminar un usuario
router.get("/admin/usuarios/borrar/:id", (req, res) => {
  
});

export default router;
