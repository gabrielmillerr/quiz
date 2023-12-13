import { Container } from "./styles"
import { Button } from "../costum/button"
import { CardQuiz } from "../costum/cardQuiz"

import axios from "axios"
import { useSelector, useDispatch } from 'react-redux';
import { alterarPagina } from '../../redux/reducer/quizReducer'


export function ResultadoScreen() {
  const dispatch = useDispatch();
  const respostas = useSelector((state) => state.quiz.respostas);
  const score = useSelector((state) => state.quiz.score)

  const enviarResposta = async () => {
    try {
      const resposta = await axios.post('http://localhost:3333/resultado', [respostas]);
        console.log('Resposta do servidor:', resposta.data);
      } catch(error) {
        console.error('Erro ao enviar resposta:', error);
      }
    };

  const entrarScoresScreen = () => {
    dispatch(alterarPagina("tabelaScores"))
  }

  return (
    <CardQuiz>
      <Container>
        <h2 className="quiz_titulo">Resultado</h2>
        <p>Parabéns <span className="quiz_nome">{respostas.nome}</span> acertou {score} de 5 quetões!</p>
        <Button
          title={ "Salvar Resultado" }
          evento={ enviarResposta }
        />
        <button onClick={entrarScoresScreen}>Visualizar Score</button>
      </Container>
    </CardQuiz>
  );
};
