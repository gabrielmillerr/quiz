import { CardQuiz } from "../costum/cardQuiz";
import { Container } from "./styles"

import axios from "axios";
import { useEffect, useState } from "react";

export function ScoresScreen() {
  const [resultados, setUsuarios] = useState([])

  useEffect(() => {
    const buscarResultados = async () => {
      try {
        const response = await axios.get('http://localhost:3333/resultado/')
        const resultadosOrdenados = response.data.sort((a, b) => b.acertos - a.acertos);
        setUsuarios(resultadosOrdenados);
      } catch(error) {
        console.error("Erro ao obter resultados!", error);
      }
    }
    buscarResultados();
  }, [])

  return (
    <CardQuiz>
      <Container>
        <h1 className="titulo">Pontuação</h1>
        {resultados.map((user, userIndex) => (
          <div className="resultado">
            <p>{userIndex + 1}</p>
            <p key={user._id}> Nome: { user.nome } </p>
            <p>Acertos: { user.acertos }</p>
          </div>
        ) )}
      </Container>
    </CardQuiz>
  )

}