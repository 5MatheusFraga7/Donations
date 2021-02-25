module.exports = {
    async up(knex) {
        return knex.schema.table('donations', function(table) {
            table.double('values')
          })
    },

    async down(knex) {
        knex.schema.table('donations', function(table) {
            table.dropColumn('values')
        })
    }
}