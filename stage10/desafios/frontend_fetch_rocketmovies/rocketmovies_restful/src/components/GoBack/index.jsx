import { Container } from "./styles";

import { FiArrowLeft } from "react-icons/fi";


export function GoBack() {
  return(
    <Container title={'Voltar para o início'} to={'/'}>
      <FiArrowLeft />
      <span>Voltar</span>
    </Container>
  );
}