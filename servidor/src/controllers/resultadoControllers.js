const ResultadoModel = require("../models/Resultado.model");

class ResultadoControllers {
  async adicionarResultadoUser(req, res) {
    try {
      console.log("testee", req.body[0]);
      const resultado = await ResultadoModel.create(req.body[0]);
      res.status(201).json(resultado)
    } catch(error) {
      res.send(error.resultado)
    }
  }
  async buscarResultadoUsuarios(req, res) {
    try {
      const resultados = await ResultadoModel.find({});
      res.status(201).json(resultados)
    } catch (error) {
      res.send(error.message)
    }
  }
}

module.exports = ResultadoControllers