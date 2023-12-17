const express = require("express");
const app = express();
const port = 3000;
const crud = require("./routes/crud");

// Motor EJS de vistas
app.set("views", "./src/views");
app.set("view engine", "ejs");

// Middlewares
app.use(express.static("public")); // Indica que debera fijarse por la carpeta "public" si es que existe el nombre indicado en la ruta (ej: localhost:3000/productos.html)
app.use(express.json()); // Indica si los datos vienen con formato JSON - Como los forms
app.use(express.urlencoded({ extended: false })); // Poder obtener lo llenado en formularo (req.body)

// Rutas
app.use("/", crud); // Carga las rutas del archivo crud.js

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
