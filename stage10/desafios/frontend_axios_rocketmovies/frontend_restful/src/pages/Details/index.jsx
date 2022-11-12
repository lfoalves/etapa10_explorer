import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

import { Button } from '../../components/Button'

import { Container, Content, Title, InfoUser, Description } from "./styles";

import { Header } from '../../components/Header'
import { Star } from '../../components/Star'
import { StarEmpty } from "../../components/StarEmpty";
import { Tag } from '../../components/Tag'
import { GoBack } from "../../components/GoBack";

import { FiClock } from 'react-icons/fi'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
export function Details() {
  const params = useParams()
  const { user } = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  const navigate = useNavigate();
  const [data, setData] = useState(null)

  async function handleRemoveMovieNote(noteId) {
    const confirm = window.confirm('Deseja realmente excluir a nota?')

    if (confirm) {
      await api.delete('/movies/' + noteId)
        .then(() => {
          alert('Nota excluída com sucesso!')
          navigate('/')
        })
        .catch((error) => {
          if (error.response) {
            alert(error.response.data.message)
          } else {
            alert('Não foi possível excluir a nota.')
          }
        })
    }
  }

  useEffect(() => {
    async function fetchMovieNote() {
      const response = await api.get('/movies/' + params.id)
      setData(response.data)
    }
    fetchMovieNote();
  }, [])

  return(
    <Container>
      <Header />

      { data &&
        <main>
          <Content>

          <section>
            <GoBack />
              <Title>
                <h1>{data.title}</h1>
                <div>
                { data.rating  && data.rating == 1 ? <><Star /> <StarEmpty /><StarEmpty /><StarEmpty /><StarEmpty /></> : '' }
                { data.rating  && data.rating == 2 ? <><Star /><Star /> <StarEmpty /><StarEmpty /><StarEmpty /></> : '' }
                { data.rating  && data.rating == 3 ? <><Star /><Star /><Star /> <StarEmpty /><StarEmpty /></> : '' }
                { data.rating  && data.rating == 4 ? <><Star /><Star /><Star /><Star /> <StarEmpty /></> : '' }
                { data.rating  && data.rating == 5 ? <><Star /><Star /><Star /><Star /><Star /></> : '' }
                </div>
              </Title>

              <InfoUser>
                <img src={avatarUrl} alt="Foto do usuário" />
                <p>{ user.name }</p>
                <FiClock />
                <span>{ data.created_at.replace(' ', ' às ').slice(0, data.created_at.length) + 'h' }</span>
              </InfoUser>

              { data.tags &&
                <div className="tags">
                  {
                    data.tags.map((tag, index) => (
                      <Tag title={tag.name} key={String(tag.id)} />
                    ))
                  }
                </div>
              }
          </section>

          <Description>
            { data.description }
          </Description>

          <Button title={'Excluir Nota'} onClick={() => handleRemoveMovieNote(params.id) } />

          </Content>
        </main>
      }
    </Container>
  );
}