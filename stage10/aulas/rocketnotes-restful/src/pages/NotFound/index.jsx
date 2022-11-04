import { Link } from "react-router-dom";

import { Container } from "./styles";

export function NotFound() {
  return(
    <Container>
      <h1>Página não encontrada! 404</h1>
      <Link to={'/'} title={'Ir para o início'}>
        Ir para o início
      </Link>
    </Container>
  );
}