import { Container } from "./styles";

import { Link } from 'react-router-dom'

export function NotFound() {
  return(
    <Container>
      <h1>NotFound 404</h1>
      <Link to={'/'}>Ir para o início</Link>
    </Container>
  );
}