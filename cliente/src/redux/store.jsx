import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./reducer/quizReducer";

export const store = configureStore({
  reducer: {
    quizStates: quizReducer,
  }
});