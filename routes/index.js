'use strict';

const controllers = require('../controllers');
const pingController = controllers.pingController;


module.exports = (app) => {
	app.get('/ping', pingController.index)
}
