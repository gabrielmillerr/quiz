import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  .quiz {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .quiz_pergunta {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  .quiz_button {
    display: flex;
    gap: 10px;
  }

  .respondida {
    color: red;
  }
  `