const express = require('express');
const routes = express.Router();
const Users = require('./controllers/users.controller');

routes.get('/api/users', Users.index);
routes.post('/api/users', Users.create);

module.exports = routes;