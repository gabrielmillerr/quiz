const QuizModel = require("../models/Quiz.model");

class QuizControllers {
  async buscarQuestoes(req, res) {
    try {
      const questao = await QuizModel.find({});
      console.log("Resultado da consulta:", questao);
      res.status(200).json(questao);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async criarQuestao(req, res) {
    try {
      const questao = await QuizModel.create(req.body);
      res.status(201).json(questao);
    } catch (error) {
      res.send(error.message)
    }
  }
}

module.exports = QuizControllers;
