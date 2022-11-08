import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { useSearch } from "../../hooks/search";
import { api } from "../../services/api";

import { Container, Content, MoviesNotes } from "./styles";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { MovieNote } from "../../components/MovieNote";

import { FiPlus } from 'react-icons/fi'

export function Home() {
  const navigate = useNavigate();
  const { movies } = useSearch();

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  return(
    <Container>

      <Header />

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
                    <p style={{color: 'white'}}>Sem notas.</p>
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