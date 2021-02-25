module.exports = {
    async up(knex) {
        return knex.schema.createTable('donations', table => {
            table.increments('id').primary();
            table.string('responsible').notNullable();
            table.string('sector').notNullable();
        });
    },

    async down(knex) {
        return knex.schema.dropTable('donations');
    }
}