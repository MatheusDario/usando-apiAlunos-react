import React, { useState } from 'react';
import { isEmail } from 'validator';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';

import { Container } from '../../styles/GlobalStyles';
import { Title, Form } from './styled';
import * as actions from '../../store/modules/auth/actions';
import Loading from '../../components/Loading';

export default function Login(props) {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.auth.isLoading);

  const prevPath = get(props, 'location.state.prevPath', '/');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('O E-mail informado deve ser válido');
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('Senha Inválida');
    }

    if (formErrors) return;

    dispatch(actions.loginRequest({ email, password, prevPath }));
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>Acesse Sua Conta</Title>

      <Form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="email">
          <span>E-mail:</span>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite o seu E-mail"
          />
        </label>
        <label htmlFor="password">
          <span>Senha:</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite a sua Senha"
          />
        </label>
        <button type="submit">Entrar</button>
      </Form>
    </Container>
  );
}
