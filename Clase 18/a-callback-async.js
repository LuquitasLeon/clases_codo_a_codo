let carrito = "🛒";

function meterEnCarrito(callback) {
  // simular asincronia
  setTimeout(function () {
    carrito += "📦";
    callback();
  }, 3000);
}

// Problema con los callbacks asíncronos de forma clásica, se hace pirámide de Doom.
meterEnCarrito(function () {
  console.log(carrito);
  meterEnCarrito(function () {
    console.log(carrito);
    meterEnCarrito(function () {
      console.log(carrito);
      meterEnCarrito(function () {
        console.log(carrito);
      });
    });
  });
});

console.log("otras tareas");
console.log(
  "mientras que espera la respuesta, sigo ejecutando otras instrucciones, NO me bloquea la continuación"
);
