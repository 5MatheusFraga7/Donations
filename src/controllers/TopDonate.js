const connection = require('../database/connection');

module.exports = async function (request, response) {

        const donations = await connection('donations')
        .orderBy('responsible', 'asc')
        .orderBy('sector', 'asc')
        .select('*');

        return response.render('top_donations', { donations })
}