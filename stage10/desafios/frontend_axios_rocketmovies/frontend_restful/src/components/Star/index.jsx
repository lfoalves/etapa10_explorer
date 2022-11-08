import { Container } from './styles'

import starImg from '../../assets/star.svg'

export function Star() {
  return(
    <Container>
      <img src={starImg} alt="ícone de estrela" />
    </Container>

  );
}