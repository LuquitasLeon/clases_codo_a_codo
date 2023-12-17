let carrito = "🛒";

function meterEnCarrito() {
  return new Promise((resolver, reject) => {
    setTimeout(function () {
      console.log(carrito);
      carrito += "📦";
      resolver(carrito);
    }, 2000);
  });
}

// No se hace la pirámide de Doom, gracias al manejo de las promesas y el uso de return de lo que devuelva la función.
meterEnCarrito()
  .then(function () {
    return meterEnCarrito();
  })
  .then(() => meterEnCarrito())
  .then(() => meterEnCarrito())
  .then(() => meterEnCarrito())
  .catch((err) => console.log(err))
  .finally(() => console.log("Paquetes agregados"));

console.log(
  "mientras que espera la respuesta, sigo ejecutando otras instrucciones, NO me bloquea la continuación"
);
