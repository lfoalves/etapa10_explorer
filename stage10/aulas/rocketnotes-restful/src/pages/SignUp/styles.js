import styled from "styled-components";

import backgroundImg from '../../assets/background.webp'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 135px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  
  > h1 {
    font-size: 48px;
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.ORANGE}
  }

  > p {
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.GRAY_100};

    margin-bottom: 48px;
  }

  > h2 {
    font-size: 24px;
    font-weight: 500;

    margin-bottom: 48px;
  }

  > button {
    margin-top: 24px;
  }

  > a {
    color: ${({theme}) => theme.COLORS.ORANGE};
    margin-top: 124px;
  } 
`;

export const Background = styled.div`
  flex: 1;
  opacity: 0.5;
  background: 
    radial-gradient(rgba(0,0,0,.3),
    rgba(0,0,0,.6), 
    rgba(0,0,0,.8), rgb(0,0,0)),
    url(${backgroundImg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;