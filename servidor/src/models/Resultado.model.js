const mongoose = require("mongoose");

// Resposta Schema
const answerSchema = new mongoose.Schema({
  _perguntaId: {
    type: String,
    required: true,
  },
  _opcaoID: {
    type: String,
    required: true,
  },
});

// Resultado Schema
const resultSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  acertos: {
    type: Number,
    required: true,
  },
  answers: [answerSchema], // Array de respostas
});

const ResultadoModel = mongoose.model("Resultado", resultSchema)

module.exports = ResultadoModel;