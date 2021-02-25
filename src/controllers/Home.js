const connection = require('../database/connection');

module.exports = async function (_, response) {
    const donations = await connection('donations')
        .orderBy('responsible', 'asc')
        .orderBy('sector', 'asc')
        .select('*');
    
    return response.render('home', { donations });
}