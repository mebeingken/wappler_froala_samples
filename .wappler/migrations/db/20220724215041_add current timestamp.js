
exports.up = function(knex) {
  return knex.schema
    .table('tmp_media', async function (table) {
      table.datetime('created_at').defaultTo(knex.fn.now()).alter();
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('tmp_media', async function (table) {
      table.datetime('created_at').defaultTo().alter();
    })
};
