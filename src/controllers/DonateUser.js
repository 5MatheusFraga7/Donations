const connection = require('../database/connection');

module.exports = async function (request, response) {
        const { q } = request.query;
        const { u } = request.query;

        const donations = await connection('donations')
        .where('id', 'like', `%${u}%`)
        .select('*'); 

        const donations_values = await connection('donations')
        .where('id', 'like', `%${u}%`)
        .select('values'); 
    
        const donations_user = await connection('donations')
        .where('id', 'like', `%${u}%`) 
         .update({
            values: q
        })       
        return response.render('donate', { donate: u, donations, q})

}