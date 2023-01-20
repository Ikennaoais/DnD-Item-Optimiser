const express = require('express');
const app = express();
const routes = require('./routes/routes.js');
//const middleware = require('./middleware');

// Apply Middleware
//app.use(middleware);

// Define routes
app.use('/', routes);

module.exports = app;
