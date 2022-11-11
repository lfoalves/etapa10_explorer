import { Container } from './styles'

import starImg from '../../assets/star-empty.svg'

export function StarEmpty() {
  return(
    <Container>
      <img src={starImg} alt="ícone de estrela" />
    </Container>

  );
}