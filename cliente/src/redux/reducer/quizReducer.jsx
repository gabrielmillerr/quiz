import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  nome: "",
  indexQuestaoAtual: 0,
  score: 0,
  questions: [],
  respostas: {
    nome: "",
    answer: [],
  },
}

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    startQuiz: (state) => {
      state.indexQuestaoAtual = 1;
      state.score = 0;
    },
    avancarQuestao: (state) => {
      state.indexQuestaoAtual += 1
    },
    voltarQuestao: state => {
      if(state.indexQuestaoAtual > 0) {
        state.indexQuestaoAtual -= 1;
      }
    },
    enviarResposta: (state, action) => {
      const { answer, pergunta } = action.payload;
      const { nome } = state;

      if(answer.resposta) {
        state.score += 1
      }

      state.respostas.nome = nome
      state.respostas.answer.push({
          _perguntaId: pergunta._id,
          _opcaoID: answer._id
      });

      state.indexQuestaoAtual += 1;
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
  startQuiz,
  enviarResposta,
  setQuestions,
  avancarQuestao,
  voltarQuestao,
  setNome
} = quizSlice.actions;

export default quizSlice.reducer;