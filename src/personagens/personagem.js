const mongoose = require('mongoose');

const PersonagemSchema = new mongoose.Schema({
  nome: {
    type: String,
    require: true,
  },
  urlPersonagem: {
    type: String,
    require: true,
  },
});

const Personagem = mongoose.model(`Personagens`, PersonagemSchema);

module.exports = Personagem;
