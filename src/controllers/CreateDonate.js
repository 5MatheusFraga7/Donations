const connection = require('../database/connection');

module.exports = async function (request, response) {
        return response.render('create_new_donate')
}