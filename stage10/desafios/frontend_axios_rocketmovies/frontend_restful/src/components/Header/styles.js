import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.header`
  grid-area: header;
  width: 100%;
  padding: 2.4rem 12.3rem;

  border-bottom-width: 0.1rem;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BORDER_GRAY};

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 6.4rem;

    margin: 0 auto;

    > a {
      font-size: 2.4rem;
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.PINK_100};
    }

    input {
      padding: 1.9rem 2.4rem;
      flex: 1;
      border-radius: 1rem;

      color: ${({ theme }) => theme.COLORS.WHITE};

      &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
      }
    }
  }
`;


export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  a {
    display: flex;
    color: white;
    white-space: nowrap;

    strong {
      font-size: 1.4rem;
      font-weight: 700;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
    > img {
      width: 6.4rem;
      height: 6.4rem;
      border-radius: 50%;
      object-fit: cover;
    }
  }

`;

export const Logout = styled.button`
  background: none;
  border: none;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  align-self: flex-end;
`;