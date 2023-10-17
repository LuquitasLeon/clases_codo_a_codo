const comision1 = ["Rodri", "Valen", "Car"]

const comision2 = ["Kari", "Uri", "Dario"]

const comisiones = comision1.concat(comision2)

comisiones

// El array seguira existiendo, pero si quiero tomar sus valores y hacerlos string con alguna separacion puedo usar "join"
comision1.join(" ") // El array se veria: Rodri Valen Car
comision1.join(" | ") // El array se veria: Rodri | Valen | Car

const comision2Mod = "Kari; Uri; Dario"

//Convierte un string en array indicandole cual separador tiene
comision2Mod = comision2Mod.split(";") // Esto pasaria a verse: ["Kari", "Uri", "Dario"]

// Tambien podria, ser:
// const comision2Mod = "Kari Uri Dario"
// comision2Mod = comision2Mod.split(" ") // Esto pasaria a verse: ["Kari", "Uri", "Dario"]

// ["Rodri", "Valen", "Car", "Kari", "Uri", "Dario"] - El metodo slice no modifica el array original, devuelve los valores cortados
comisiones.slice(1, 2) // Desde Valen (pos 1), hasta (sin incluir), posicion 2 - Devuelve el/los valor/es quitado

// ["Rodri", "Valen", "Car", "Kari", "Uri", "Dario"] - El metodo splice si modifica el array original, devuelve los valores cortados
comisiones.splice(2) // Desde Car en adelante corta - El primero numero indica desde cual posicion hasta cuantos mas adelantes queres borrar

comisiones.splice(2, 1) // Solo borraria Car, ya que desde la posicion 2 que borre 1, o sea él mismo

comisiones.splice(2, 2, "Saul", "Guille") // Basicamente aqui lo que hariamos es reemplazar, quitando Car y Kari, ya que le indico desde que posicion hasta cuantos mas adelante, y se agrega el Saul Y Kari

const frutas = ["kiwi", "manzanas", "bananas"];

frutas.sort();