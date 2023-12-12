const { Router } = require("express");
const quizRouter = Router();

const QuizControllers = require("../controllers/QuizControllers");

const quizControllers = new QuizControllers();

quizRouter.get("/", quizControllers.buscarQuestoes);
quizRouter.post("/", quizControllers.criarQuestao)

module.exports = quizRouter;
