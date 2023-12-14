import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  quiz: {
    paginaAtual: "inicio",
    indexQuestaoAtual: 0,
    questions: [], 
  },
  respostas: {
    nome: "",
    acertos: 0,
    answers: [],
  },
}

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    alterarPagina: (state, action) => {
      state.quiz.paginaAtual = action.payload
    },
    avancarQuestao: (state) => {
      state.quiz.indexQuestaoAtual = state.quiz.indexQuestaoAtual + 1;
    },
    voltarQuestao: state => {
      if(state.quiz.indexQuestaoAtual) {
        state.quiz.indexQuestaoAtual = state.quiz.indexQuestaoAtual - 1;
      }
    },
    enviarResposta: (state, action) => {
      const { answers, pergunta } = action.payload;
      
      if(answers.resposta) {
        state.respostas.acertos += 1
      }

      state.respostas = {
        nome: state.respostas.nome,
        answers: [...state.respostas.answers, {
          _perguntaId: pergunta._id,
          _opcaoID: answers._id
        }]
      }

      state.quiz.indexQuestaoAtual = state.quiz.indexQuestaoAtual + 1;
      
      if(state.quiz.indexQuestaoAtual >= 5) {
        state.quiz.paginaAtual = "resultado"
      }
    },
    setQuestions: (state, action) => {
      state.quiz.questions = action.payload;
    },
    setNome: (state, action) => {
      state.respostas.nome = action.payload;
    }
  }
})

export const { 
  alterarPagina,
  enviarResposta,
  setQuestions,
  avancarQuestao,
  voltarQuestao,
  setNome
} = quizSlice.actions;

export default quizSlice.reducer;