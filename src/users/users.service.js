const User = require("./User");

const findByEmailUserService = (email) => {
  User.findOne({ email: email });
};

const createUserService = (body) => {
  return User.create(body);
};

module.exports = {
  findByEmailUserService,
  createUserService,
};
