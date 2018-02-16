exports.up = async function(knex) {
  await knex.schema.createTable("users", function(t) {
    t.increments('id').unsigned().primary();
    t.text('email').nullable();
    t.text('google_id').nullable();
    t.text('given_name').nullable();
    t.text('family_name').nullable();
    t.text('picture').nullable();

    t.timestamps();
  })
  
};

exports.down = async function(knex) {
  await knex.schema.dropTable("users");
};

