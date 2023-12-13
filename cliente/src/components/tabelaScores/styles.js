import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80vh;

  .titulo {
    margin: 10px 0 20px 0;
  }
  .resultado {
    display: flex;
    width: 100%;
    justify-content: space-between;
    border: 2px solid ${({theme}) => theme.COLORS.ORANGE};
    margin: 5px 0;
    padding: 10px 15px;
    border-radius: 8px;
  }
`