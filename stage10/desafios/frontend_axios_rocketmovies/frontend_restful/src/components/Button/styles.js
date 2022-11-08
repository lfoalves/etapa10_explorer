import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.8rem;

  width: 100%;
  height: 5.6rem;
  background-color: ${({ theme }) => theme.COLORS.PINK_100};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  border-radius: 0.8rem;
`;