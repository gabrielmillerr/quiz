import { Container } from "./styles";
import { Button } from "../costum/button";
import { Input } from "../costum/input";
import { CardQuiz } from "../costum/cardQuiz"

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { alterarPagina, setQuestions, setNome } from '../../redux/reducer/quizReducer';

export function IniciarScreen() {
  const dispatch = useDispatch();
  const nome = useSelector((state) => state.quiz.nome) 
  
  const inicirQuiz = async () => {
    
    if(!nome) {
      alert("digite um nome")
      return
    }
    try {
      console.log('Chamando inicirQuiz');
      const response = await axios.get('http://localhost:3333/quiz');
      dispatch(setQuestions(response.data[0]));
      
      dispatch(alterarPagina("quiz"));
    } catch (error) {
      console.error('Erro ao obter quizzes:', error);
    }
  };

  const handleInputChange = (event) => {
    const nomeUsuario = event.target.value
    dispatch(setNome(nomeUsuario))
  }

  return (
    <CardQuiz>
      <Container>
        <h1 className="quiz_titulo">Bem vindo ao Quiz!</h1>
        <Input
          type = "text"
          evento = { handleInputChange }
          placeholder = "Digite seu nome"
        />
        
        <Button
          title="Iniciar quiz"
          evento={inicirQuiz}
        />
      </Container>
    </CardQuiz>
  );
};
