import { useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { Container, Form, Background } from "./styles";

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { FiUser ,FiMail, FiLock, FiArrowLeft } from 'react-icons/fi'

export function SignUp() {
  const { signUp } = useAuth();
  const [name, setName] = useState('Luiz');
  const [email, setEmail] = useState('luiz@email.com');
  const [password, setPassword] = useState('123');

  function handleSignUp() {
    signUp({ name, email, password })
  }

  return(
    <Container>

      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

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
          placeholder={'Senha'}
          icon={FiLock}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          title={'Cadastrar'}
          type={'button'}
          onClick={handleSignUp}
        />

        <Link to={-1}>
          <FiArrowLeft />
          Voltar para o login
        </Link>
      </Form>

      <Background />

    </Container>
  );
}