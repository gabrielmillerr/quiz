import { useDispatch } from 'react-redux';
import axios from 'axios';

import { startQuiz, setQuestions, setNome } from '../../redux/reducer/quizReducer';

import { Container } from "./styles"

export const IniciarScreen = () => {
  const dispatch = useDispatch();

  const loadQuizzes = async () => {
    try {
      console.log('Chamando loadQuizzes');
      const response = await axios.get('http://localhost:3333/quiz');
      dispatch(setQuestions(response.data[0]));
      
      dispatch(startQuiz());
    } catch (error) {
      console.error('Erro ao obter quizzes:', error);
    }
  };

  const iniciarQuiz = () => {
    loadQuizzes();
  };

  const handleInputChange = (event) => {
    const nomeUsuario = event.target.value
    dispatch(setNome(nomeUsuario))
  }

  return (
    <Container>
      <div className='quiz'>
        <h1>Bem vindo ao Quiz!</h1>
        <input type="text" onBlur={handleInputChange} placeholder="Digite seu nome"/>
        <button onClick={iniciarQuiz}>Iniciar Quiz</button>
      </div>
    </Container>
  );
};
