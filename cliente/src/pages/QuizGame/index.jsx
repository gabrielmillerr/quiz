import { Container } from "./styles"

import { useSelector } from 'react-redux';

import { IniciarScreen } from "../../components/iniciar/IniciarScreen"
import { QuizScreen } from "../../components/quiz/QuizScreen"
import { ResultadoScreen } from "../../components/resultado/ResultadoScreen"
import { ScoresScreen } from "../../components/tabelaScores";

export const QuizGame = () => {
  const paginaAtual = useSelector((state) => state.quiz.paginaAtual)

  return (
    <Container className='principal'>
      {paginaAtual === "inicio" && <IniciarScreen />}
      {paginaAtual === "quiz" && <QuizScreen />}
      {paginaAtual === "resultado" && <ResultadoScreen />}
      {paginaAtual === "tabelaScores" && <ScoresScreen />}
    </Container>
  )
};