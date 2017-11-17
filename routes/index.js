'use strict';

const controllers = require('../controllers');

const pingController = controllers.pingController;
const pageController = controllers.pageController;


module.exports = (app) => {
    app.get('/ping', pingController.index);
    app.get('/', pageController.index);
}
