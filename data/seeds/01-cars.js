
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { VIN: 'WMWZC5C50DWP31997', make: 'Mini', model: 'Cooper', mileage: 72000, transmission: 'manual', titleStatus: 'clean'},
        { VIN: '2FDKF37H0PCA09381', make: 'Ford', model: 'F 350', mileage: 138000, transmission: 'automatic', titleStatus: 'salvage'}
      ]);
    });
};
