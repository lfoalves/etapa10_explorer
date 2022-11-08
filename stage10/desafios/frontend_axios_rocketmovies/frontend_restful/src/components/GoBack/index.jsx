import { Container } from "./styles";

import { FiArrowLeft } from "react-icons/fi";


export function GoBack() {
  return(
    <Container title={'Voltar para o início'} to={-1}>
      <FiArrowLeft />
      <span>Voltar</span>
    </Container>
  );
}