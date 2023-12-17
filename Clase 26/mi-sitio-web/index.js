const express = require("express");
const app = express();
const port = 3000;

// middlewares
app.use(express.static("public"));

app.get("/", (req, res) => {
  fetch("https://ws.smn.gob.ar/map_items/weather")
    .then((res) => res.json())
    .then((data) => {
      console.log(data[0].weather.tempDesc); // del servidor
      res.send(`
      <p> ${data[0].province} <strong> ${data[0].weather.tempDesc} </strong> </p>
      `);
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
