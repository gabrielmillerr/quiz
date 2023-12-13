import { Container } from "./styles"
import { Button } from "../costum/button";
import { CardQuiz } from "../costum/cardQuiz"

import { useSelector, useDispatch } from 'react-redux';
import { avancarQuestao, voltarQuestao, enviarResposta } from '../../redux/reducer/quizReducer';


export function QuizScreen() {
  const dispatch = useDispatch();
  const indexQuestaoAtual = useSelector((state) => state.quiz.indexQuestaoAtual);
  const questions = useSelector((state) => state.quiz.questions);
  const respostas = useSelector((state) => state.quiz.respostas)

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
        {questions.questoes[indexQuestaoAtual] && (
          <div className='quiz' key={indexQuestaoAtual}>
            <h2 className="quiz_pergunta">{questions.questoes[indexQuestaoAtual].pergunta}</h2>
            {questions.questoes[indexQuestaoAtual].opcoes.map((opcao, opcaoIndex) => (
              <Button
                key={opcaoIndex}
                evento={ () => handleAnswer(opcao, questions.questoes[indexQuestaoAtual]) }
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
        <span className="perguntaIndex">Questão {indexQuestaoAtual + 1} de 5.</span>
      </Container>
    </CardQuiz>
  );
}
