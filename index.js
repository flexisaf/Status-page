'use strict';

require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const models = require('./models');

const port = process.env.port;
const app = express();

routes(app);

models.sequelize.sync().then(() => {
	console.log('Database migrated');
}).catch(err => {
	console.log('Database not created. You might have issues with the application')
})


app.listen(port, () => {
    console.log(`running on ${port}`);
});
