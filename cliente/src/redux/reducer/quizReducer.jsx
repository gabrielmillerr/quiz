import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  nome: "",
  paginaAtual: "inicio",
  indexQuestaoAtual: 0,
  score: 0,
  questions: [], 
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
      state.paginaAtual = action.payload
    },
    avancarQuestao: (state) => {
      state.indexQuestaoAtual = state.indexQuestaoAtual + 1;
    },
    voltarQuestao: state => {
      if(state.indexQuestaoAtual) {
        state.indexQuestaoAtual = state.indexQuestaoAtual - 1;
      }
    },
    enviarResposta: (state, action) => {
      const { answers, pergunta } = action.payload;
      const { nome } = state;

      if(answers.resposta) {
        state.score += 1
      }

      state.respostas.nome = nome
      state.respostas.acertos = state.score
      state.respostas.answers.push({
          _perguntaId: pergunta._id,
          _opcaoID: answers._id
      });

      state.indexQuestaoAtual = state.indexQuestaoAtual + 1;
      
      if(state.indexQuestaoAtual >= 5) {
        state.paginaAtual = "resultado"
      }
    },
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
    setNome: (state, action) => {
      state.nome = action.payload;
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