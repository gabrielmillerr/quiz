import axios from "axios"
import { useSelector } from 'react-redux';

import { Container } from "./styles"

export const ResultadoScreen = () => {
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

  return (
    <Container>
      <div>
        <h2>Quiz Result</h2>
        <p>parabens voce acertou {score} de 5 quetões!</p>
        <button onClick={enviarResposta}>Salvar Resultado</button>
      </div>
    </Container>
  );
};
