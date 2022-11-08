import styled from "styled-components";

import backgroundImg from '../../assets/rocketmovies.jpg'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 16.3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: ${({ theme }) => theme.COLORS.PINK_100};
    font-size: 4.8rem;
  }

  p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY};

    align-self: flex-start;
  }

  h2 {
    font-size: 2.4rem;
    margin-block: 4.8rem;

    align-self: flex-start;
  }

  button {
    margin-top: 2.4rem;
  }

  a {
    color: ${({ theme }) => theme.COLORS.PINK_100};
    margin-top: 4.2rem;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: radial-gradient(rgba(0,0,0,.3), rgba(0,0,0,.6),  rgba(0,0,0,.8), rgb(0,0,0)), url(${backgroundImg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;