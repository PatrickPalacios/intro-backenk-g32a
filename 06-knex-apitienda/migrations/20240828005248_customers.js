/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('customers').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('customers', function (table) {
        table.increments('customer_id').primary() // Columna de clave primaria con incremento automático
        table.string('first_name', 255).notNullable() // Nombre del cliente, con un límite de 255 caracteres, no nulo
        table.string('last_name', 255).notNullable() // Apellido del cliente, con un límite de 255 caracteres, no nulo
        table.string('email', 255).unique().notNullable() // Correo electrónico del cliente, con un límite de 255 caracteres, único y no nulo
        table.string('phone', 20) // Teléfono del cliente, con un límite de 20 caracteres
        table.string('street_address', 255).notNullable() // Dirección del cliente, con un límite de 255 caracteres, no nulo
        table.string('postal_code', 20).notNullable() // Código postal del cliente, con un límite de 20 caracteres, no nulo
        table.string('neighborhood', 255).notNullable() // Vecindario del cliente, con un límite de 255 caracteres, no nulo
        table.timestamp('created_at').defaultTo(knex.fn.now())
      })
    }
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.hasTable('customers').then(function (exists) {
    if (exists) {
      return knex.schema.dropTable('customers')
    }
  })
}
