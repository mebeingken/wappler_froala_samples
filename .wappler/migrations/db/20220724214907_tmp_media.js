
exports.up = function(knex) {
  return knex.schema
    .createTable('tmp_media', async function (table) {
      table.increments('id');
      table.string('path');
      table.timestamp('created_at');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('tmp_media')
};
