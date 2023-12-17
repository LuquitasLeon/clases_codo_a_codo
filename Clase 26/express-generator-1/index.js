const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hola mundo! Estamos en la comision 23578 de Codo a Codo')
})

app.listen(3000, function(err) {
  if (err) throw err
  console.log("Servidor web ONLINE")
})