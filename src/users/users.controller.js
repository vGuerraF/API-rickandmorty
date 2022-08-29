const userService = require("./users.service");

const createUserController = async (req, res) => {
  const { name, username, email, password } = req.body;

  if (!name || !username || !email || !password) {
    return res.status(400).send({
      message: "Alguns campos estao faltando.",
    });
  }

  const foundUser = await userService.findByEmailUserService(email);

  if (foundUser) {
    return res.status(400).send({
      message: "Usuário já existe!",
    });
  }

  const user = await userService
    .createUserService(req.body)
    .catch((err) => console.log(err.message));

  if (!user) {
    return res.status(400).send({
      message: "Erro ao criar Usuário!",
    });
  }

  res.status(201).send(user);
};

const findAllUserController = async (req, res) => {
  const users = await userService.findAllUserService();

  console.log(users)

  if(users.length === 0) {
    return res.status(400).send({
      message: "Não existem usuários cadastrados!"
    })
  }

  res.send(users)
};

module.exports = { createUserController, findAllUserController };
