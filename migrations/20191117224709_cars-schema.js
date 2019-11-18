
exports.up = function(knex) {
    return knex.schema.createTable('cars', table => {
        table.increments('id');
        table.integer('VIN').unique().notNullable();
        table.string('make', 100).notNullable();
        table.string('model', 100).notNullable();
        table.integer('mileage').notNullable();
        table.string('transmission', 100);
        table.string('titleStatus', 120);
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
  };
