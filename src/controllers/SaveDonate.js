const connection = require('../database/connection');

module.exports = async function (request, response) {
        const { responsible } = request.query;
        const { sector }      = request.query;
        const { values }      = request.query;

        try {
                await connection('donations')
                    .insert({ responsible, sector, values });
                    return response.redirect('/');

            } catch (err) {
                return response
                    .status(500)
                    .json({
                        error: 'Error inserting: ' + err.message
                    });
            }
        


}