import { useState } from 'react';
import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import { FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { Container, Avatar, Form } from "./styles";

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { GoBack } from '../../components/GoBack';

export function Profile() {
  const { user, updateProfile } = useAuth();

  const avatarURL = user.avatar ? `${api.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarURL);
  const [avatarFile, setAvatarFile] = useState(null);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState('123');
  const [newPassword, setNewPassword] = useState('');

  console.log(avatarFile)

  function handleUserUpdate() {
    const updated = { name, email, newPassword, oldPassword }
    const userUpdated = Object.assign(user, updated)
    updateProfile({ user: userUpdated, avatarFile });
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)
    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  function avatarExists() {
    fetch(api.baseURL+'/files/'+'aa2c9b89934cae4fe857-WhatsApp Image 2022-10-06 at 09.32.41.jpeg', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': `Bearer ${localStorage.getItem('@rocketmovies:token')}`
      }
    })
    .then((response) => {
      if (response.status === 200) {}
    })
    .catch((error) => console.error(error))
  }

  return(
    <Container>

      <header>
        <GoBack />
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt={user.name} />

          <label htmlFor="avatar">
            <FiCamera />
            <input
              type="file"
              id="avatar"
              accept='.png, .jpeg'
              onChange={handleChangeAvatar}
            />
          </label>
        </Avatar>


        <Input
          type={'text'}
          placeholder={'Name'}
          icon={FiUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          type={'email'}
          placeholder={'E-mail'}
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type={'password'}
          placeholder={'Senha atual'}
          icon={FiLock}
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />

        <Input
          type={'password'}
          placeholder={'Nova senha'}
          icon={FiLock}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <Button
          title={'Salvar'}
          onClick={handleUserUpdate}
        />
      </Form>
      
    </Container>
  );
}