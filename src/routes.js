const express = require('express');
const routes  = express.Router();

const HomeController        = require('./controllers/Home');
const DonateController      = require('./controllers/Donate');
const DonateUserController  = require('./controllers/DonateUser');
const CreateDonate          = require('./controllers/CreateDonate');
const SaveDonate            = require('./controllers/SaveDonate');

const RedirectController    = require('./controllers/Redirect');

routes.get('/', HomeController);
routes.get('/donate', DonateController);
routes.get('/donate_for_user', DonateUserController);
routes.get('/create_new_donate', CreateDonate);
routes.get('/save_new_donate', SaveDonate);
routes.all('*', RedirectController);

module.exports = routes;