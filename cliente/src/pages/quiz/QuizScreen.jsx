import { useSelector, useDispatch } from 'react-redux';
import { avancarQuestao, voltarQuestao, enviarResposta } from '../../redux/reducer/quizReducer';

import { Container } from "./styles"

export const QuizScreen = () => {
  const dispatch = useDispatch();
  const indexQuestaoAtual = useSelector((state) => state.quiz.indexQuestaoAtual);
  const questions = useSelector((state) => state.quiz.questions);

  const handleAnswer = (answer, pergunta) => {
    const respotaPergunta = {
      pergunta: pergunta,
      answer: answer
    }
    dispatch(enviarResposta(respotaPergunta));
  };

  const handleAvancarQuestao = () => {
    dispatch(avancarQuestao());
  }

  const handleVoltarQuestao = () => {
    dispatch(voltarQuestao());
  }

  return (
    <Container>
      <div className='quiz'>
        {questions.questoes[indexQuestaoAtual] && (
          <div className='quiz_pergunta' key={indexQuestaoAtual}>
            <p>{questions.questoes[indexQuestaoAtual].pergunta}</p>
            {questions.questoes[indexQuestaoAtual].opcoes.map((opcao, opcaoIndex) => (
              <button
                key={opcaoIndex}
                onClick={() => handleAnswer(opcao, questions.questoes[indexQuestaoAtual])}
              >
                {opcao.opcao}
              </button>
            ))}
          </div>
        )}
        <button onClick={() => handleAvancarQuestao()}>avançar</button>
        <button onClick={() => handleVoltarQuestao()}>Voltar</button>
      </div>
    </Container>
  );
}
