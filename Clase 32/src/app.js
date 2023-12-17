import express from "express";
const app = express();
const port = process.env.PORT || 3000;
import usuariosRoutes from "./routes/usuarioRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

// Middlewares
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Motor de plantilla
app.set("views", "./src/views");
app.set("view engine", "ejs");

// Home
app.get("/", (req, res) => {
  res.send("Hola mundo!");
});

app.use("/", adminRoutes);
app.use("/", usuariosRoutes);

app.listen(port, () => {
  console.log(`App abriendose en el puerto ${port}`);
});
