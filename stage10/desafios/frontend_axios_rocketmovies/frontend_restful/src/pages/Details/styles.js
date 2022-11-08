import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
    'header'
    'content';

  > main {
    grid-area: content;
    overflow-y: scroll;
  }
`;

export const Content = styled.div`
  max-width: 113rem;
  margin: 0 auto;

  > section {
    padding-top: 4rem;

    h1 {
      font-size: 3.6rem;
    }

    div {
      display: flex;
      gap: 1rem;
    }

    .tags {
      margin-top: 4rem;
    }

  }
  > button {
    color: ${({ theme }) => theme.COLORS.PINK_100};
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    font-weight: bolder;
    width: 20%;
    margin: 4rem auto 1rem;
  }
  
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 1.9rem;
`;

export const InfoUser = styled.div`
display: flex;
align-items: center;

margin-top: 2.4rem;
  img {
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.PINK_100};
  }
`;

export const Description = styled.p`
  margin-top: 4rem;
  line-height: 2.1rem;

  text-align: justify;
`;