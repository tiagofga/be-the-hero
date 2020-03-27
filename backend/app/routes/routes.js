const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('../controllers/OngController');
const IncidentController = require('../controllers/IncidentController');
const ProfilerController = require('../controllers/ProfilerController');
const SessionController = require('../controllers/SessionController');

const routes = express.Router();

routes.post(
  '/session',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      id: Joi.string().required()
    })
  }),
  SessionController.create
);

routes.post(
  '/ongs',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string()
        .required()
        .email(),
      whatsapp: Joi.string()
        .required()
        .min(10)
        .max(11),
      city: Joi.string().required(),
      uf: Joi.string()
        .required()
        .length(2)
    })
  }),
  OngController.create
);

routes.get('/ongs', OngController.index);

routes.post(
  '/incidents',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      description: Joi.string()
        .min(50)
        .required(),
      value: Joi.number().required()
    }),
    [Segments.HEADERS]: Joi.object().keys({
      authorization: Joi.string().required()
    })
  }),
  IncidentController.create
);

routes.get(
  '/incidents',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number()
    })
  }),
  IncidentController.index
);

routes.delete(
  '/incidents/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required()
    })
  }),
  IncidentController.delete
);

routes.get(
  '/profile',
  celebrate({
    [Segments.HEADERS]: Joi.object().keys({
      authorization: Joi.string().required()
    }).unknown()
  }),
  ProfilerController.index
);

routes.get('/', (req, res) => {
  return res.status(200).json({
    response: 'OK'
  });
});

module.exports = routes;
