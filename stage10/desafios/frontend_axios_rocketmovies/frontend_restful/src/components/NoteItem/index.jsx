import { Container } from "./styles";

import { FiPlus, FiX } from 'react-icons/fi'

export function NoteItem({ isNew = false, value, onClick, ...rest}) {
  return(
    <Container isNew={isNew}>

      <input
        type={'text'}
        value={value}
        readOnly={!isNew}
        placeholder={'Novo marcardor'}
        {...rest}
      />

      <button
        type={'button'}
        onClick={onClick}
        title={isNew ? 'Adicionar' : 'Remover'}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>

    </Container>
  );
}