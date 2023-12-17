const express = require("express");
const app = express();
const port = 3000;
const usuarioRoutes = require("./src/routes/usuario")

// Middlewares
// Lo usamos siempre que tengamos que tomar datos de formulario
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/usuario', usuarioRoutes)

app.get("/", function (req, res) {
  respuesta = {
    error: false,
    codigo: 200,
    mensaje: "<h1>Punto de inicio</h1>",
  };
  res.send(respuesta.mensaje);
});

app.use(function(req, res, next) {
  respuesta = {
   error: true, 
   codigo: 404, 
   mensaje: 'URL no encontrada'
  };
  res.status(404).send(respuesta);
 });

app.listen(port, () => {
  console.log(`Aplicacion abierta en el puerto ${port}`);
});
