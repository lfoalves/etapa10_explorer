import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  
  margin-bottom: 0.8rem;
  
  border-radius: 1rem;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
  color: ${({theme}) => theme.COLORS.GRAY_100};

  > svg {
    margin-left: 16px;
  }
  
  > input {
    width: 100%;
    height: 5.6rem;

    padding: 1.2rem;

    background: transparent;
    border: 0;

    color: ${({ theme }) => theme.COLORS.WHITE};

    &:placeholder {
      color: ${({theme}) => theme.COLORS.GRAY_100};
    }
  }
`;