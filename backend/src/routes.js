const express = require('express');
const ongController = require('./controllers/OngController');
const incidentsContoller = require('./controllers/IncidentController');
const profileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.post('/incidents', incidentsContoller.create);
routes.get('/incidents', incidentsContoller.index);
routes.delete('/incidents/:id', incidentsContoller.delete);

routes.get('/profile', profileController.index);

routes.post('/sessions', sessionController.create)

module.exports = routes;