const mongoose = require("mongoose");

// Opção de respostas SCHEMA
const opcoesSchema = new mongoose.Schema({
  opcao: {
    type: String,
    required: true,
  },
  resposta: {
    type: Boolean,
    required: true,
  },
});

// Questão e opções de resposta SCHEMA
const questoesSchema = new mongoose.Schema({
  pergunta: {
    type: String,
    required: true,
  },
  opcoes: [opcoesSchema], // Array com as opções
});

// Quiz
const quizSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  questoes: [questoesSchema], // Array com as perguntas
});

const QuizModel = mongoose.model("Quiz", quizSchema);

module.exports = QuizModel;
