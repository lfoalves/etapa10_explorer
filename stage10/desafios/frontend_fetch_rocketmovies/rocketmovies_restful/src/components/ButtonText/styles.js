import styled from "styled-components";

export const Container = styled.button`
  background: none;
  
  border: none;

  color: ${({ theme, isActive }) => isActive ? theme.COLORS.PINK_100 : theme.COLORS.GRAY_100};
`;