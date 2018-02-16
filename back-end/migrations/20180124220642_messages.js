
exports.up = async function(knex) {
  await knex.schema.createTable("messages", function(t) {
        t.increments('id').unsigned().primary();
        t.integer('user_id').unsigned().notNullable();
        t.string('name').notNull();
        t.string('email').notNull();
        t.string('phone').notNull();
        t.string('sponsoring_entity').nullable();
        t.text('content').notNull();
        // t.decimal('price', 6, 2).notNull();
        // t.enum('category', ['apparel', 'electronics', 'furniture']).notNull();
        t.timestamps(true, true);
    });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("messages");
};

