const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// Datos
const games = [
  {
    id: 1,
    title: "Mario",
  },
  {
    id: 2,
    title: "Zelda",
  },
  {
    id: 3,
    title: "Donkey Kong",
  },
];

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/api/games/:id", (req, res) => {
  // Chequea si el ID del objeto ES IGUAL que el ID de la ruta
  const game = games.find((obj) => obj.id === parseInt(req.params.id));

  if (!game) {
    return res.status(404).send("The game with the given ID was not found.");
  }
  res.send(game);
});

// Añadir juego
app.post("/api/games", (req, res) => {
  console.log(req.body);
  const game = {
    id: games.length + 1,
    title: req.body.titulo, // body va a hacer referencia a los datos que pueda tomar de un formulario
  };
  games.push(game);
  res.send(game);
});

/*
app.get("/:nombre/:apellido", (req, res) => {
  console.log(req.params); // Objeto solicitud
  res.send(`<h1>Hola ${req.params.nombre} ${req.params.apellido}</h1>`)
});
*/

app.listen(3000, function (err) {
  if (err) throw err;
  console.log(`Servidor web ONLINE en puerto ${port}`);
});
