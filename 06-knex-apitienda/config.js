// Dependiendo la variable de entorno del sistema, se cambiaría la configuración adecuada para la BD.
// Se toma la configuración del entorno de NODE, y si no existe se toma development.

const env = process.env.NODE_DEV || 'development'

const knexfile = require('./knexfile')
const knex = require('knex')

// Mando a llamar a knex con la configuración adecuada
module.exports = knex(knexfile[env])
