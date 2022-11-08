import { Link, useNavigate } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'
import { useSearch } from '../../hooks/search';

import { api } from '../../services/api';

import { Container, Profile, Logout } from "./styles";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'


import { Input } from "../Input";

export function Header() {
  const { signOut, user } = useAuth();
  const { setSearch } = useSearch();
  const navigate = useNavigate();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  function handleSignOut() {
    navigate('/')
    signOut();
  }

  return(
    <Container>
      <div className="container">
        <Link to={'/'} title={'Rocketmovies'}>RocketMovies</Link>

        <Input
          type={'text'}
          placeholder={'Pesquisar pelo título'}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Profile>
          <div>
            <Link to={'/profile'} title={'Editar perfil'}>{user.name}</Link>
            <Logout onClick={handleSignOut} title={'Logout'}>
              Sair
            </Logout>
          </div>
          <Link to={'/profile'} title={'Editar perfil'}>
            <img src={avatarUrl} alt={`Foto de ${user.name}`} />
          </Link>
        </Profile>
      </div>
    </Container>
  );
}