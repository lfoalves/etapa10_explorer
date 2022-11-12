import { Link, useNavigate } from 'react-router-dom'
import { useSearch } from "../../hooks/search";

import { Container, Content, MoviesNotes, NotNotes } from "./styles";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { MovieNote } from "../../components/MovieNote";

import { FiPlus, FiBox } from 'react-icons/fi'
import { useEffect } from 'react';

export function Home() {
  const navigate = useNavigate();
  const { movies, setSearch, setMovies, fetchMovieNotes } = useSearch();

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    fetchMovieNotes()
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
                { movies && movies.length > 0 ?
                  (
                    movies.map(movie => (
                      <MovieNote
                        data={movie}
                        key={String(movie.id)}
                        onClick={() => handleDetails(movie.id)}
                      />
                    ))
                  ) : (
                    <NotNotes>
                      <FiBox />
                      <p>Sem notas.</p>
                    </NotNotes>
                  )                  
                }
              </MoviesNotes>
            </Section>
          </div>
        </Content>
      </main>
    </Container>
  );
}