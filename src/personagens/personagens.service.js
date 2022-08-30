const Personagens = require("./personagem");

const findAllpersonagensService = async () => {
    const personagens = await Personagens.find();
    return personagens;
  };
  
  const findByIdpersonagenservice = async (idParam) => {
    const personagem = await Personagens.findById(idParam);
    return personagem;
  };
  
  const createpersonagenservice = async (newpersonagem) => {
    const personagemCreated = await Personagens.create(newpersonagem);
    return personagemCreated;
  };
  
  const updatepersonagenservice = async (id, personagemEdited) => {
    const personagemUpdate = await Personagens.findByIdAndUpdate(
      id,
      personagemEdited,
    );
    return personagemUpdate;
  };
  
  const deletepersonagenservice = async (id) => {
    return await Personagens.findByIdAndDelete(id);
  };
  
  module.exports = {
    findAllpersonagensService,
    findByIdpersonagenservice,
    createpersonagenservice,
    updatepersonagenservice,
    deletepersonagenservice,
  };
  