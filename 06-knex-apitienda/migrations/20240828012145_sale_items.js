/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('sale_items').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('sale_items', function (table) {
        table.increments('id').primary() // Columna de clave primaria con incremento automático
        // table.integer('sale_id').unsigned().notNullable() // ID de la venta, entero sin signo, no nulo
        // table.integer('product_id').unsigned().notNullable() // ID del producto, entero sin signo, no nulo
        table.integer('quantity').unsigned().notNullable() // Cantidad de productos, entero sin signo, no nulo
        table.decimal('price', 10, 2).notNullable() // Precio del producto, decimal con 10 dígitos en total y 2 decimales, no nulo

        // Establece claves foráneas para relacionar con las tablas "sales" y "products"
        // table.foreign('sale_id').references('sale_id').inTable('sales')
        // table.foreign('product_id').references('product_id').inTable('products')
        table.integer('sale_id').unsigned().references('sales.sale_id')
        table.integer('product_id').unsigned().references('products.product_id')
      })
    }
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.hasTable('sale_items').then(function (exists) {
    if (exists) {
      return knex.schema.dropTable('sale_items')
    }
  })
}
