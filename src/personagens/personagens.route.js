const personagensRoute = require('express').Router();
const controllerpersonagens = require('./personagens.controller');

personagensRoute.get(
  '/todos-personagens',
  controllerpersonagens.findAllpersonagensController,
);
personagensRoute.get(
  '/personagem/:id',
  controllerpersonagens.findByIdpersonagemController,
);
personagensRoute.post('/create', controllerpersonagens.createpersonagemController);
personagensRoute.put('/update/:id', controllerpersonagens.updatepersonagemController);
personagensRoute.delete('/delete/:id', controllerpersonagens.deletepersonagemController);

module.exports = personagensRoute;