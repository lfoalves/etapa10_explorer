import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const SearchContext = createContext({})

function SearchProvider({ children }) {
  const [movies, setMovies] = useState();
  const [search, setSearch] = useState();
  const [alter, setAlter] = useState(false);

  useEffect(() => {
    async function fetchMovieNotes() {
      const response = await api.get(`/movies?title=${search ? search : ''}`)
      setMovies(response.data)
    }
    fetchMovieNotes()
  }, [search, alter])

  return (
    <SearchContext.Provider value={{ movies, setSearch, setAlter }}>
      { children }
    </SearchContext.Provider>
  )
}

function useSearch() {
  const context = useContext(SearchContext);
  return context;
} 

export { SearchProvider, useSearch }