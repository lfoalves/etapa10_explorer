import { Link } from "react-router-dom";
import { useAuth } from '../../hooks/auth'

import { Container, Form, Background } from "./styles";

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { FiMail, FiLock } from 'react-icons/fi'
import { useState } from "react";

export function SignIn() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('luiz@email.com');
  const [password, setPassword] = useState('123');

  function handleSignIn() {
    signIn({ email, password })
  }

  return(
    <Container>

      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

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
          title={'Entrar'}
          type={'button'}
          onClick={handleSignIn}
        />

        <Link to={'/register'}>
          Criar conta
        </Link>
      </Form>

      <Background />

    </Container>
  );
}