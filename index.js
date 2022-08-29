require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Console } = require("console");

const port = process.env.PORT || 3001;
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send({ message: "Hello World" });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
