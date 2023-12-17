// Llamar Biblioteca nativa para levantar un servidor HTTP
const http = require("node:http");

// Crear servidor // req, res (request, response)
const servidor = http.createServer(function (solicitud, respuesta) {
  if (solicitud.url === "/") {
    respuesta.writeHead(200, {
      "Content-Type": "text/html",
    });
    return respuesta.end("<h1> Ahora te encontras en el home </h1>");
  } else {
    respuesta.writeHead(400, {
      "Content-Type": "text/html",
    });
    return respuesta.end("<h1> No encontrado </h1>");
  }
});

// localhost:3000 (127.0.0.1:3000)
servidor.listen(3000, function (error) {
  if (error) throw error;
  console.log("Servidor ONLINE en el puerto 3000");
});
