import pool from "../config/database.js";

// Obtener todos los usuarios desde la base de datos
export const getAllUsuariosFromDB = async () => {
  try {
    const [datos] = await pool.qury("SELECT * FROM datos_1");
    return datos;
  } catch (error) {
    console.error("Error querying MySQL:", error);
    throw error;
  }
};

// Agregar usuario - POST
export const addUsuarioFromDB = async (usuarioData) => {
  try {
    const [result] = await pool.query("INSERT INTO datos_1 SET ?", [
      usuarioData,
    ]);
  } catch (error) {
    console.error("Error inserting into MySQL:", error);
    throw error;
  }
};

// Obtener un usuario por ID
export const getUsuarioPorIDFromBD = async (id) => {
  try {
    const [dato] = await pool.query("SELECT * FROM datos_1 WHERE id = ?", [id]);
    return dato[0]; // Lo enviamos como objeto en vez de un array
  } catch (error) {
    console.error("Error querying MySQL:", error);
    throw error;
  }
};

export const editUsuarioFromDB = async () => {
  try {
  } catch (error) {}
};

export const deleteUsuarioFromDB = async () => {
  try {
  } catch (error) {}
};

/* 
export const ... = async () => {
  try {
    
  } catch (error) {
    
  }
}
*/
