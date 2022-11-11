import { Container, Form } from "./styles";

import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { GoBack } from '../../components/GoBack'
import { Input } from "../../components/Input";
import { Textarea } from '../../components/Textarea'
import { NoteItem } from "../../components/NoteItem";
import { Button } from '../../components/Button'

export function New() {
  return(
    <Container>

      <Header />
      
      <main>
        
        <Form>
          <Section title={'Novo Filme'}>
              <GoBack />
                <div className="flex">
                  <Input
                    placeholder={'Título'}
                    required
                  />

                  <Input
                    placeholder={'Sua nota de (0 a 5)'}
                    type={'number'}
                    min={'0'}
                    max={'5'}
                    required
                  />
                </div>

                <Textarea
                  placeholder={'Observações'}
                  required
                />
          </Section>

          <Section title={'Marcadores'}>
            <div className="tags">
              <NoteItem value={'Animação'} />
              <NoteItem value={'Aventura'} />
              <NoteItem value={'Suspense'} isNew/>
              <NoteItem value={'Terror'} isNew/>
              <NoteItem value={'Comédia'} isNew/>
              <NoteItem value={'Guerra'} isNew/>
            </div>
          </Section>

          <div className="buttons">
            <Button  title={'Excluir filme'} />
            <Button  title={'Salvar alterações'} />
          </div>
        </Form>
      
      </main>
      
    </Container>
  );
}