
exports.up = function(knex) {
  return knex.schema
    .table('post', async function (table) {
      table.text('form_data').alter();
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('post', async function (table) {
      table.string('form_data', 255).alter();
    })
};
