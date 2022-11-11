import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  &::-webkit-scrollbar {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb{
    border: 5px solid transparent;
    
    background-clip: padding-box;
    border-radius: 10px;
    background-color: ${({theme}) => theme.COLORS.PINK_100};
  }

  html {
    font-size: 62.5%;

    display: grid;

    width: 100%;
    height: 100%;
  }

  .container {
    max-width: 113rem;
    margin: 0 auto;
  }

  body {
    font-size: 1.6rem;

    display: grid;
    
    -webkit-font-smoothing: antialized;
    scroll-behavior: smooth;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.WHITE};
  }
  
  body, input, button, textarea {
    font-family: 'Roboto Slab', serif;
    font-size: 1.6rem;
    outline: none;
    border: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: all 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`;