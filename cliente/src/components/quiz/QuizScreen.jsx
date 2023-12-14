import { Container } from "./styles"
import { Button } from "../costum/button";
import { CardQuiz } from "../costum/cardQuiz"

import { useSelector, useDispatch } from 'react-redux';
import { avancarQuestao, voltarQuestao, enviarResposta } from '../../redux/reducer/quizReducer';


export function QuizScreen() {
  const dispatch = useDispatch();
  
  const quiz = useSelector((state) => state.quizStates.quiz)
  const respostas = useSelector((state) => state.quizStates.respostas)

  const handleAnswer = (answer, pergunta) => {
    const respotaPergunta = {
      pergunta: pergunta,
      answers: answer
    }
    dispatch(enviarResposta(respotaPergunta));
  };

  const handleAvancarQuestao = () => {
    dispatch(avancarQuestao());
  }

  const handleVoltarQuestao = () => {
    dispatch(voltarQuestao());
  }

  const opcaoRespondida = (opcaoId) => {
    return respostas.answers.some(resposta => resposta._opcaoID === opcaoId)
  }

  return (
    <CardQuiz>
      <Container>
        {quiz.questions.questoes[quiz.indexQuestaoAtual] && (
          <div className='quiz' key={quiz.indexQuestaoAtual}>
            <h2 className="quiz_pergunta">{quiz.questions.questoes[quiz.indexQuestaoAtual].pergunta}</h2>
            {quiz.questions.questoes[quiz.indexQuestaoAtual].opcoes.map((opcao, opcaoIndex) => (
              <Button
                key={opcaoIndex}
                evento={ () => handleAnswer(opcao, quiz.questions.questoes[quiz.indexQuestaoAtual]) }
                classe={ opcaoRespondida(opcao._id) ? "respondida" : "" }
                title={opcao.opcao}
              >
                { opcao.opcao }
              </Button>
            ))}
          </div>
        )}
        <div className="quiz_button">
          <Button
            title={ "Voltar" }
            evento={ handleVoltarQuestao }
          />
          <Button
           title={ "Avançar" }
           evento={ handleAvancarQuestao }
         />
        </div>
        <span className="perguntaIndex">Questão {quiz.indexQuestaoAtual + 1} de 5.</span>
      </Container>
    </CardQuiz>
  );
}
