/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('sales').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('sales', function (table) {
        table.increments('sale_id').primary() // Columna de clave primaria con incremento automático
        // table.integer('customer_id').unsigned().notNullable() // ID del cliente, entero sin signo, no nulo
        table.dateTime('sale_date').notNullable() // Fecha de la venta, tipo dateTime, no nulo

        // Establece una clave foránea para relacionar con la tabla "customers"
        // table.foreign('customer_id').references('customer_id').inTable('customers')
        table.integer('customer_id').unsigned().references('customers.customer_id')
      })
    }
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.hasTable('sales').then(function (exists) {
    if (exists) {
      return knex.schema.dropTable('sales')
    }
  })
}
