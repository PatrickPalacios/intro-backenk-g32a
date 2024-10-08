/* CONTROLADORES */
// Los controladores tienen la lógica de negocio de la aplicación.
// Se encargan de validar datos, manejar errores y resolver promesas.

// #1 Importar el modelo, en este caso Homes.

const ModelHomes = require('../models/Homes')

// #2 Crear las funciones que van a ser llamadas en las rutas.
// CREATE
const createHome = (req, res) => {
  ModelHomes.create(req.body).then((home) => {
    res.status(201).json(home)
  }).catch((error) => {
    res.status(400).json(error.message)
  })
}

// READ

// UPDATE

// DELETE

// #3 Exportar las funciones para que sean accesibles desde las rutas (vista).

module.exports = {
  createHome
}
