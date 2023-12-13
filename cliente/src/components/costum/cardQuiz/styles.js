import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 500px;
  width: 100%;
  min-height: 330px;
  padding: 30px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  border: solid 2px ${({ theme }) => theme.COLORS.ORANGE};
  border-radius: 10px;
`