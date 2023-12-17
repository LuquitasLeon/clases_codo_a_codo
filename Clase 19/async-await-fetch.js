async function obtenerAr() {
  // Espera la respuesta del servidor
  try {
    let response = await fetch(`https://restcountries.com/v3.1/alpha?codes=ar`);
    // Cuando obtiene la respuesta, necesita poder manejarla al tenerla como JSON
    let pais = await response.json();
    return pais;
  } catch (err) {
    return err;
  }
}

/*

obtenerAr()
.then(info => console.log(info))
.catch(err => console.log(err))

obtenerAr()
.then(info => console.log(info[0]))   // Para acceder alindice 0, ya que cuando lo trae al objeto, lo trae dentro de un array, entonces seria el objeto 0
.catch(err => console.log(err))

*/

obtenerAr()
  .then((info) => console.log(info[0].name.common))
  .catch((err) => console.log(err));
