// Callbacks

/* function nombreFuncion(numero, texto, booleano, array, objeto y funcion) */

function saludar(nombre) {
  console.log("Hola " + nombre)
}

saludar("Manuel")
saludar("Meli")

function chequear(boolean) {
  if (boleean == true) {
    console.log("Ha aceptado correctamente.")
  } else {
    console.log("No ha aceptado los términos.")
  }
}

let aceptar = confirm("¿Acepta los terminos?")
chequear(aceptar)

/*

// Una función para chequear si sigue en codo a codo, según la edad, es decir, si tiene más o igual a 18 años. (tip: pasaremos la edad como parámetro)

function presentismo(edad) {
  if (edad >= 18) {
    console.log("Es mayor de edad");
    return true;
  } else {
    console.log("No es mayor de edad");
    return false;
  }
}

// let pregunta = prompt('Que edad tenes?')
pregunta = 17;
presentismo(pregunta);

*/

function chequear(boolean, callback) {
  callback(boolean);
}

/*
Puede ser de esta forma -----------

function aceptar(boolean){
  if (boolean == true) {
    console.log("Ha aceptado correctamente");
  }
}

chequear(true, aceptar)
*/

// O puede ser de esta forma -----------

chequear(true, function (boolean) {
  if (boolean == true) {
    console.log("Ha aceptado correctamente");
  }
});