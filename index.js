'use strict';

require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const models = require('./models');

const port = process.env.SERVER_PORT;
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

function start() {
  routes(app);

  models.sequelize.sync().then(() => {
    console.log('Database migrated');
  }).catch(err => {
    console.log('Database not created. You might have issues with the application', err);
  });

  app.listen(port, () => {
      console.log(`running on ${port}`);
  });
}

start();
