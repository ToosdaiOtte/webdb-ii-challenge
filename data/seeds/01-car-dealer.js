
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('car-dealer').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('car-dealer').insert([
        { VIN: 'WMWZC5C50DWP31997', make: 'Mini', model: 'Cooper', mileage: 72000, transmissionType: 'manual', titleStatus: 'clean'},
        { VIN: '2FDKF37H0PCA09381', make: 'Ford', model: 'F 350', mileage: 138000, transmissionType: 'automatic', titleStatus: 'salvage'}
      ]);
    });
};
