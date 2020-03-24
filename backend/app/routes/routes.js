const express = require('express');
const OngController = require('../controllers/OngController');
const IncidentController = require('../controllers/IncidentController');
const ProfilerController = require('../controllers/ProfilerController');
const SessionController = require('../controllers/SessionController');

const routes  = express.Router();

routes.post('/session', SessionController.create);

routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfilerController.index);

routes.get('/', (req, res) => {
  return res.status(200).json({
    response: 'OK'
  });
});

module.exports = routes;