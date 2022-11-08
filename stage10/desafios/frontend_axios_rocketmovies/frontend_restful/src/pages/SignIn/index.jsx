import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from '../../hooks/auth'

import { Container, Form, Background } from "./styles";

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { FiMail, FiLock } from 'react-icons/fi'

export function SignIn() {
  const { signIn } = useAuth();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSignIn() {
    signIn({ email, password });
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
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type={'password'}
          placeholder={'Senha'}
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title={'Entrar'} type={'button'} onClick={handleSignIn} />

        <Link to={'/register'}>
          Criar conta
        </Link>
      </Form>

      <Background />

    </Container>
  );
}