const mongoose = require("mongoose");

const conectarDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@quiz.kyu5vmi.mongodb.net/?retryWrites=true&w=majority`
    )
    console.log("Conexão com banco de dados realizada com sucesso!");
  } catch (error) {
    console.error("Ocorreu um erro ao se conectar ao banco de dados:", error);
  }
}

module.exports = conectarDatabase;