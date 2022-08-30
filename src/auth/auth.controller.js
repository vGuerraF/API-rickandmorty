require("dotenv").config();
const authService = require("./auth.service");
const bcrypt = require("bcryptjs");

const loginController = async (req, res) => {
  const { email, password } = req.body;

  const user = await authService.loginService(email);

  if (!user) {
    return res.status(400).send({ message: "Usuario nao encontrado" });
  }

  const isPasswordvalid = await bcrypt.compare(password, user.password);

  if (!isPasswordvalid) {
    return res.status(400).send({ message: "senha invalida" });
  }

  const token = authService.generateToken(user.id);

  res.send({token});
};

module.exports = { loginController };
