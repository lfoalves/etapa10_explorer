import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { Header } from '../../components/Header'
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Section } from '../../components/Section';
import { Note } from "../../components/Note";

import { FiPlus } from 'react-icons/fi';

const result = [
  {
    title: 'React',
    tags: [
      {id: '1', name: 'react'},
      {id: '2', name: 'rocketseat'}
    ]
  },
  {
    title: 'Node',
    tags: [
      {id: '1', name: 'node'},
      {id: '2', name: 'backend'}
    ]
  },
  {
    title: 'Express',
    tags: [
      {id: '1', name: 'expressjs'},
      {id: '2', name: 'backend'}
    ]
  },
  {
    title: 'LinkedIn',
    tags: [
      {id: '1', name: 'premium'},
      {id: '2', name: 'learning'}
    ]
  }
]

export function Home() {
  const navigate = useNavigate();

  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);
  const [search, setSearch] = useState('');
  const [notes, setNotes] = useState([]);

  function handleTagSelected(tagName) {
    if (tagName === 'all') return setTagsSelected([])

    const alreadySelected = tagsSelected.includes(tagName)

    if (alreadySelected) {
      const filteredTags = tagsSelected.filter((tag) => tag !== tagName)
      setTagsSelected(filteredTags)
    } else {
      setTagsSelected((prevState) => [...prevState, tagName])
    }
  }

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get('/tags')
      setTags(response.data)
    }

    fetchTags()
  }, [])

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
      setNotes(response.data)
    }

    fetchNotes()
  }, [tagsSelected, search])

  return(
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText
            title={'Todos'}
            onClick={() => handleTagSelected('all')}
            isActive={tagsSelected.length === 0}
          />
        </li>
        {
          tags && tags.map(tag => (
            <li key={tag.id} >
              <ButtonText
                title={tag.name}
                onClick={() => handleTagSelected(tag.name)}
                isActive={tagsSelected.includes(tag.name)}
              />
            </li>
          ))
        }
      </Menu>

      <Search>
        <Input
          placeholder={'Pesquisar pelo título'}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search>

      <Content>
        <Section title={'Minhas notas'}>
          {
            notes && notes.map(note => (
              <Note 
                key={String(note.id)}
                data={note} 
                onClick={() => handleDetails(note.id)}
              />
            ))
          }
        </Section>  
      </Content>

      <NewNote to={'/new'}>
        <FiPlus />
        Criar nota
      </NewNote>

    </Container>
  );
}