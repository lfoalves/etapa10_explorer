import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../../hooks/search";
import { api } from "../../services/api";

import { Container, Form } from "./styles";

import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { GoBack } from '../../components/GoBack'
import { Input } from "../../components/Input";
import { Textarea } from '../../components/Textarea'
import { NoteItem } from "../../components/NoteItem";
import { Button } from '../../components/Button'

export function New() {
  const navigate = useNavigate();
  const { setAlter } = useSearch();

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(null);
  const [observation, setObservation] = useState('');

  function handleAddTag() {
    if (!newTag) {
      return alert('Preencha o marcador.')
    }
    setTags((prevState) => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((link) => link !== deleted))
  }

  async function handleNewMovieNote() {
    if (newTag) return alert('Existe marcador não adicionado.')
    try {
      await api.post('/movies', {
        title,
        rating, 
        description: observation,
        tags
      })

      setAlter((prevState) => !prevState)
      alert('Nota criada com sucesso!')
      navigate('/')

    } catch (error) {
      console.log(error)
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível criar nota.')
      }
    }
  }

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
                    onChange={(e) => setTitle(e.target.value)}
                  />

                  <Input
                    placeholder={'Sua nota de (0 a 5)'}
                    type={'number'}
                    min={'0'}
                    max={'5'}
                    required
                    onChange={(e) => setRating(e.target.value)}
                  />
                </div>

                <Textarea
                  placeholder={'Observações'}
                  required
                  onChange={(e) => setObservation(e.target.value)}
                />
          </Section>

          <Section title={'Marcadores'}>
            <div className="tags">
              {
                tags &&
                  tags.map((tag, index) => (
                    <NoteItem
                      key={String(index)}
                      value={tag}
                      onClick={() => handleRemoveTag(tag)}
                    />
                  ))
              }
              <NoteItem
                isNew 
                value={newTag} 
                onChange={(e) => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <div className="button">
            <Button title={'Salvar alterações'} onClick={handleNewMovieNote} />
          </div>
        </Form>
      
      </main>
      
    </Container>
  );
}