import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from "./styles/global"
import { ThemeProvider } from "styled-components"
import theme from './styles/theme'

import { QuizGame } from "./pages/QuizGame"
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={store}>
        <QuizGame />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
)
