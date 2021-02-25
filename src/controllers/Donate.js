const connection = require('../database/connection');

module.exports = async function (request, response) {
        const { q } = request.query;

        const donations = await connection('donations')
        .where('id', 'like', `%${q}%`)
        .select('*');

        return response.render('donate', { donate: q, donations })

}