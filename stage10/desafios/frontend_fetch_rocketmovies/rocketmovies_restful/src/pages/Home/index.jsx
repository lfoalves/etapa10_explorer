import { useEffect, useState } from "react";

import { Link } from 'react-router-dom'
import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'

import { Container, Content, MoviesNotes } from "./styles";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { MovieNote } from "../../components/MovieNote";

import { FiPlus } from 'react-icons/fi'

export function Home() {
  const {  } = useAuth();
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(api.baseURL + '/movies/?title= ', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('@rocketmovies:token')}`
      }
    })
    .then(resolve => resolve.json())
    .then(data => {
      if (data.message) {
        console.log(data.message)
      }
      setMovies(data)
    })
    .catch((err) => console.error(err))
  }, [])

  return(
    <Container>

      <Header isSearch />

      <main>
        <Content>
          <div className="container">
            <Link to={'/new'} title={'Adiconar nova nota'}>
              <FiPlus />
                Adicionar filme
            </Link>
            <Section title={'Meus filmes'}>

              <MoviesNotes>
                {
                  movies.length > 0 && movies.map(movie => {
                    return(
                      <MovieNote data={movie} key={movie.id} />
                    )
                  })
                }
              </MoviesNotes>
            </Section>
          </div>
        </Content>
      </main>
    </Container>
  );
}