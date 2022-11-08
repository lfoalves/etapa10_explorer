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

export const Form = styled.form `
  max-width: 113.3rem;;
  margin: 0 auto;

  margin-top: 4rem;
  margin-bottom: 8rem;


  > section {
    padding-top: 3rem;
  }

  > section:nth-child(1) {
    position: relative;

    overflow-y: scroll;
    
    a {
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  .flex {
    display: flex;
    gap: 4rem;

    margin-top: 4rem;
    margin-bottom: 3.2rem;
  }
  
  .tags {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    column-gap: 2.4rem;
    row-gap: 1.6rem;

    margin-top: 2.4rem;
      
    padding: 1.6rem;
      
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    border-radius: 0.8rem;
  }
  
  .button {
    display: flex;
    gap: 4rem;

    margin-top: 4rem;

    > button {
      width: 40%;
      margin: 0 auto;
    }
  }
`;