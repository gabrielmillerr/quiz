import styled from 'styled-components'

export const Container = styled.div`
  max-width: 700px;
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border: solid 2px ${({ theme }) => theme.COLORS.ORANGE};
  border-radius: 10px;
  `