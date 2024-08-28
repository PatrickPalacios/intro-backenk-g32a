/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('products').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('products', function (table) {
        table.increments('product_id').primary() // Columna de clave primaria con incremento automático
        table.string('name', 255).notNullable() // Nombre del producto, con un límite de 255 caracteres, no nulo
        table.text('description') // Descripción del producto, sin límite de caracteres
        table.decimal('price', 10, 2).notNullable() // Precio del producto, hasta 10 dígitos en total y 2 decimales, no nulo
        table.string('sku', 50).unique().notNullable() // SKU del producto, con un límite de 50 caracteres, único y no nulo
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
  return knex.schema.hasTable('products').then(function (exists) {
    if (exists) {
      return knex.schema.dropTable('products')
    }
  })
}
