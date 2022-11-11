import styled from "styled-components";

export const Container = styled.div `
  width: 100%;
  height: 100vh;
  background-color: ${({theme}) => theme.COLORS.BLACK};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > a {
    color: grey;
  }
`;