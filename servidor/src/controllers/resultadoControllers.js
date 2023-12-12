const ResultadoModel = require("../models/Resultado.model");

class ResultadoControllers {
  async adicionarResultadoUser(req, res) {
    try {
      const questao = await ResultadoModel.create(req.body);
      console.log(questao);
      res.status(201).json(questao)
    } catch(error) {
      res.send(error.message)
    }
  }
}

module.exports = ResultadoControllers