import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { Container, Form } from "./styles";

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'

export function New() {
  const navigate = useNavigate();

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState('')

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')


  function handleAddLink() {
    if (!newLink) return alert('Insira um link')
    setLinks((prevState) => [...prevState, newLink])
    setNewLink('')
  }

  function handleRemoveLink(deleted) {
    setLinks((prevState) => prevState.filter((link) => link != deleted))
  }

  function handleAddTag() {
    if (!newTag) return alert('Insira uma tag')
    setTags((prevState) => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag != deleted))
  }

  async function handleNewNote() {
    if (!title) return alert('Digite o título da nota')
    if (newLink) return alert('Existe links não adicionados à nota.')
    if (newTag) return alert('Existe tags não adicionados à nota.')
    
    try {
      await api.post('/notes', {
        title,
        description,
        tags,
        links
      })
  
      alert('Nota criada com sucesso!')
      navigate(-1)
    } catch (error) {
      console.error(error)
      
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível cadastrar nota.')
      }
    }
  }

  return(
    <Container>
      <Header />

      <main>

        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to={-1}>Voltar</Link>
          </header>

          <Input
            placeholder={'Título'}
            onChange={(e) => setTitle(e.target.value)}
          />

          <Textarea
            placeholder={'Observações'}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Section title={'Links úteis'}>
            {
              links.map((link, index) => (
                <NoteItem
                  key={String(index)}
                  value={link}
                  onClick={() => handleRemoveLink(link)}
                />
              ))
            }
            <NoteItem
              placeholder={'Novo link'}
              isNew
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title={'Marcadores'}>
            <div className="tags">
              {
                tags.map((tag, index) => (
                  <NoteItem
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }
              <NoteItem
                placeholder={'Nova tag'}
                isNew
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>
          
          <Button title={'Salvar'} onClick={handleNewNote}/>

        </Form>

      </main>

    </Container>
  );
}