
exports.up = function(knex) {
  return knex.schema
    .createTable('post', async function (table) {
      table.increments('id');
      table.string('form_data');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('post')
};
