const express = require("express");
const app = express();
const port = 3000;
const usuarioRoutes = require("./src/routes/usuario");

// Middlewares
// Lo usamos siempre que tengamos que tomar datos de formulario
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/usuario", usuarioRoutes);

app.get("/", function (req, res) {
  res.render("inicio", {
    dolar: 890,
    titulo: "Mi pagina web",
    promocion: true,
    promocionTexto: `Aprovechá a $50.000 por CyberMonday`,
  });
});

app.get("/productos", function (req, res) {
  res.render("productos", {
    titulo: "Mi pagina web - Productos",
    dolar: 890,
    productos: [
      {
        producto: "Dell XPS 13",
        precio: 499,
      },
      {
        producto: "HP Spectre x360 13",
        precio: 679,
      },
      {
        producto: "Lenovo Yoga C940",
        precio: 549,
      },
    ],
  });
});

app.use(function (req, res, next) {
  respuesta = {
    error: true,
    codigo: 404,
    mensaje: "URL no encontrada",
  };
  res.status(404).send(respuesta);
});

app.listen(port, () => {
  console.log(`Aplicacion abierta en el puerto ${port}`);
});
