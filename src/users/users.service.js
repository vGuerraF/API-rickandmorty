const User = require("./User");

const findByEmailUserService = async (email) => {
  return User.findOne({ email: email });
};

const createUserService = async (body) => {
  return User.create(body);
};

const findAllUserService = async () => {
  return User.find();
};

const findByIdUserService = (idUser) => User.findById(idUser);

module.exports = {
  findByEmailUserService,
  createUserService,
  findAllUserService,
  findByIdUserService,
};
