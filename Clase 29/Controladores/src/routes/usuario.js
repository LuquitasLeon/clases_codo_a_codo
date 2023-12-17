const express = require("express");
const router = express.Router();
const usuarioControllers = require("../controllers/usuario")

// /usuario
router.get("/", usuarioControllers.usuarioGet);

router.post("/", usuarioControllers.usuarioPost);

router.put("/", usuarioControllers.usuarioPut);

router.delete("/", usuarioControllers.usuarioDelete);

module.exports = router;
