const { Router } = require("express");
const resultadoRouter = Router();

const ResultadoControllers = require("../controllers/resultadoControllers");

const resultadoControllers = new ResultadoControllers();

resultadoRouter.post("/", resultadoControllers.adicionarResultadoUser)

module.exports = resultadoRouter;