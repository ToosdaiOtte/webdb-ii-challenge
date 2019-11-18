
exports.up = function(knex) {
  return knex.schema.createTable('car-dealer', table => {
      table.increments('id');
      table.string('VIN', 17).unique().notNullable();
      table.string('make', 100).notNullable();
      table.string('model', 100).notNullable();
      table.integer('mileage').notNullable();
      table.string('transmissionType', 50);
      table.string('titleStatus', 50);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('car-dealer');
};
