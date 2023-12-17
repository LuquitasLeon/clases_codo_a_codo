// Importara las consultas de la capa MODELS
import {
  getAllUsuariosFromDB,
  addUsuarioFromDB,
  getUsuarioPorIDFromBD,
  editUsuarioFromDB,
  deleteUsuarioFromDB,
} from "../model/model.js";

// Obtener todos los usuarios
export async function getAllUsuarios(req, res) {
  try {
    // Obtengo los datos llamando a la funcion que importa desde la capa "models" y luego lo envio a la vista de adminUsuarios
    const datos = await getAllUsuariosFromDB();
    res.render("adminUsuarios", {
      data: datos,
    });
  } catch (err) {
    console.log("Error obteniendo usuarios: ", err);
    res.status(500).send("Internal Server Error");
  }
}

// Agregar usuario - VISTA
export const addUsuario = async (req, res) => {
  try {
    res.render("adminCrear", {
      titulo: "Crear usuario",
    });
  } catch (error) {
    console.error("Error adding usuario:", error);
    res.status(500).send("Internal Server Error");
  }
};

// Agregar usuario - POST
export const addUsuarioPOST = async (req, res) => {
  const newUsuarioData = req.body;

  try {
    await addUsuarioFromDB(newUsuarioData);
    res.redirect("/admin" + "?mensaje=Usuario agregado");
  } catch (error) {
    console.error("Error adding usuario:", error);
    res.status(500).send("Internal Server Error");
  }
};

// Editar usuario - VISTA
export const editUsuario = async (req, res) => {
  const usuarioID = req.params.id;
  try {
    const usuario = await getUsuarioPorIDFromBD(usuarioID);
    if (usuario) {
      res.render("adminActualizar", {
        data: usuario,
      });
    } else {
      res.status(404).send("Usuario not found");
    }
  } catch (error) {
    console.error("Error getting usuario by ID:", error);
    res.status(500).send("Internal Server Error");
  }
};

// Editar usuario - POST
export const editUsuarioPOST = async (req, res) => {
  try {
    const usuarioID = req.params.id;
    const updateUsuarioData = req.body;
    if (updateUsuario) {
      const updateUsuario = await editUsuarioFromDB(usuarioID, updateUsuarioData);
      res.redirect("/admin" + "?mensaje=Usuario actualizado");
    } else {
      res.status(404).send("Usuario not found");
    }
  } catch (error) {
    console.error("Error editing usuario:", error);
    res.status(500).send("Internal Server Error");
  }
};

// Eliminar usuario - POST
export const deleteUsuario = async (req, res) => {
  const usuarioID = req.params.id;
  try {
    const deletedUsuario = await deleteUsuarioFromDB(usuarioID);
    if (deletedUsuario) {
      res.redirect("/admin" + "?mensaje=Usuario eliminado");
    } else {
      res.status(404).send("Usuario not found");
    }
  } catch (error) {
    console.error("Error deleting usuario:", error);
    res.status(500).send("Internal Server Error");
  }
};

/*
export const ... = async (req, res) => {
  try {
    
  } catch (error) {
    
  }
}
*/
