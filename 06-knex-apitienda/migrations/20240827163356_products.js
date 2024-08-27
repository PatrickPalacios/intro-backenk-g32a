/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('products').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('products', function (table) {
        table.increments('product_id') // ID autoincremental
        table.string('name').notNullable() // Nombre del producto, no puede ser nulo
        table.text('description') // Descripción del producto
        table.decimal('price', 10, 2).notNullable() // Precio del producto, con hasta 10 dígitos y 2 decimales
        table.string('sku').notNullable().unique() // SKU, cadena de texto, no nulo y único
      })
    }
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.hasTable('products').then(function (exists) {
    if (exists) {
      return knex.schema.dropTable('products')
    }
  })
}
