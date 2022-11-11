import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api';

import { Container, Profile, Logout } from "./styles";

import { Input } from "../Input";

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Header({ isSearch = false }) {
  const { signOut, user } = useAuth();
  const avatarURL = user.avatar ? `${api.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarURL);

  function handleSignOut() {
    signOut()
  }

  return(
    <Container>
      <div className="container">
        <Link to={'/'} title={'Rocketmovies'}>RocketMovies</Link>

        {
          isSearch &&
          <Input
            type={'text'}
            placeholder={'Pesquisar pelo título'}
            maxlength={50}
            mixlength={5}
          />
        }

        <Profile>
          <Link to={'/profile'}>
            <strong>
            {user.name}
            </strong>
            <img src={avatar} alt={`Foto de ${user.name}`} />
          </Link>

          <Logout onClick={handleSignOut}>
            Sair
          </Logout>
        </Profile>
      </div>
    </Container>
  );
}