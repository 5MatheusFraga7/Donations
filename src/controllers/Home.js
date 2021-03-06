const connection = require('../database/connection');

module.exports = async function (request, response) {
    const { q } = request.query;

    if (!q) {
        const donations = await connection('donations')
        .orderBy('responsible', 'asc')
        .orderBy('sector', 'asc')
        .select('*');
    
        return response.render('home', { donations });
    } 
    else {

        const donations = await connection('donations')
        .where('responsible', 'like', `%${q}%`)
        .orWhere('sector', 'like', `%${q}%`)
        .orderBy('responsible', 'asc')
        .orderBy('sector', 'asc')
        .select('*');

        return response.render('home', { search: q, donations })
    }


}