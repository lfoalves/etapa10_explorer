import styled from "styled-components";

import { devices } from '../../styles/devices'

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

  /* @media ${devices.mobileL} {
    background: red;
  }
  @media ${devices.tablet} {
    background: green;
  }
  @media ${devices.laptop} {
    background: blue;
  } */
`;

export const Content = styled.div `
  .container {
    position: relative;
    padding-top: 5rem;
  }

  a {
    position: absolute;
    top: 5rem;
    right: 0;

    display: flex;
    align-items: center;
    gap: 0.8rem;

    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    background-color: ${({ theme }) => theme.COLORS.PINK_100};
    
    width: fit-content;
    height: 5.6rem;
    padding-inline: 3.2rem;

    border-radius: 0.8rem;

    svg {
      font-size: 2rem;
    }
  }    
`;

export const MoviesNotes = styled.div`
  padding: 4rem 0.5rem 8rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;