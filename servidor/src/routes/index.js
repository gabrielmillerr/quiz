const { Router } = require("express");
const routes = Router();

const quizRoutes = require("./quiz.routes");
const resultadoRoutes = require("./resultado.routes")

routes.use("/quiz", quizRoutes);
routes.use("/resultado", resultadoRoutes);


module.exports = routes;