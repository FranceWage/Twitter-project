const {login, register} = require('../controllers/authController.js');

const express = require('express');

const Router = express.Router();

Router.route('/register').post(register);
Router.route('/login').post(login);

module.exports = Router;