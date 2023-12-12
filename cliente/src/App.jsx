import { useSelector } from 'react-redux';
import { IniciarScreen } from "./pages/iniciar/IniciarScreen"
import { QuizScreen } from "./pages/quiz/QuizScreen"
import { ResultadoScreen } from "./pages/resultado/ResultadoScreen"

export const App = () => {
  const indexQuestaoAtual = useSelector((state) => state.quiz.indexQuestaoAtual);

  return (
    <div>
      {!indexQuestaoAtual && <IniciarScreen />}
      {indexQuestaoAtual && indexQuestaoAtual < 5 && <QuizScreen />}
      {indexQuestaoAtual == 5 && <ResultadoScreen />}
    </div>
  )
};