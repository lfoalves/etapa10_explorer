import styled from "styled-components";

import { Link } from 'react-router-dom'

export const Container = styled(Link) `
  display: flex;
  align-items: center;
  gap: 1rem;

  color: ${({ theme }) => theme.COLORS.PINK_100};
`;