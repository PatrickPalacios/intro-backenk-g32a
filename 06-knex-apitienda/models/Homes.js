/* MODELO */
// El MODELO trae los datos de la DB.
// No valida datos ni resolver promesas (eso es trabajo de controlador MVC).

// #1 Traer la configuración del entorno de knex y su información de conexión a la DB.

const knex = require('../config')

// #2 Crear funciones que me permitan interactuar con la DB.

// CRUD
const create = (bodyHome) => {
  return knex
    .insert(bodyHome) // ¿Qué datos voy a insertar?
    .into('products') // ¿En qué tabla?
    .returning(['product_id', 'name', 'description', 'price', 'sku', 'created_at']) // ¿Qué datos quiero que me devuelva?
}
// CREATE

// READ

// UPDATE

// DELETE

// #3 Exportar las funciones para que sean accesibles desde el controlador.
module.exports = {
  create
}
