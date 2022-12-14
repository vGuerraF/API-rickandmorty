require("dotenv").config();
const personagensRoute = require("./personagens/personagens.route")
const express = require("express");
const cors = require("cors");
const connectDatabase = require("./database/database");
const userRoute = require("./users/users.route");
const authRoute = require("./auth/auth.route");
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

const port = process.env.PORT || 3001;
const app = express();

connectDatabase();
app.use(cors());
app.use(express.json());

app.use("/users", userRoute);
app.use("/auth", authRoute);
app.use("/personagens", personagensRoute)
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
