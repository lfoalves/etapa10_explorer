import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_MOVIENOTE};

  padding: 3.2rem;

  border-radius: 1.6rem;

  cursor: pointer;

  transition: all 0.3s;

  &:hover {
    filter: drop-shadow(0 0 0.2rem ${({ theme }) => theme.COLORS.PINK_HOVER_100});
  }

  > h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 2.4rem;
    text-align: left;
  }

  > div {
    margin-top: 0.8rem;

    display: flex;
    gap: 0.6rem;
  } 

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-family: 'Roboto', sans-serif;
    text-align: justify;
    text-overflow: ellipsis;

    margin-top: 1.6rem;
  }

  > footer {
    display: flex;
    gap: 0.8rem;

    margin-top: 3.5rem;
  }
`;