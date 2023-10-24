import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import { isEmail, isInt, isFloat } from 'validator';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { FaUserCircle, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container } from '../../styles/GlobalStyles';
import { Title, Form, ProfilePicture } from './styled';
import Loading from '../../components/Loading';
import axios from '../../services/axios';
import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';

export default function Aluno({ match }) {
  const id = get(match, 'params.id', '');
  const dispatch = useDispatch();
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [foto, setFoto] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    async function getData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        const Foto = get(data, 'Fotos[0].url', '');
        setFoto(Foto);

        setNome(data.nome);
        setSobrenome(data.sobrenome);
        setEmail(data.email);
        setIdade(data.idade);
        setPeso(data.peso);
        setAltura(data.altura);

        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        const status = get(err, 'response.status', 0);
        const errors = get(err, 'response.data.errors', []);

        if (status === 400) errors.map((error) => toast.error(error));
        history.push('/');
      }
    }
    getData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = false;

    if (nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error('O campo nome precisa ter entre 3 e 255 caracteres');
    }
    if (sobrenome.length < 3 || sobrenome.length > 255) {
      formErrors = true;
      toast.error('O campo sobrenome precisa ter entre 3 e 255 caracteres');
    }
    if (!isEmail(email)) {
      formErrors = true;
      toast.error('Informe um e-mail válido');
    }
    if (!isInt(String(idade))) {
      formErrors = true;
      toast.error('Infome um valor válido para idade');
    }
    if (!isFloat(String(peso))) {
      formErrors = true;
      toast.error('Informe um valor válido para o peso');
    }
    if (!isFloat(String(altura))) {
      formErrors = true;
      toast.error('Informe um valor válido para altura');
    }

    if (formErrors) return;

    try {
      setIsLoading(true);
      if (id) {
        await axios.put(`/alunos/${id}`, {
          nome, sobrenome, email, idade, peso, altura,
        });
        toast.success('Aluno(a) editado(a) com Sucesso!');
      } else {
        const { data } = await axios.post('/alunos/', {
          nome, sobrenome, email, idade, peso, altura,
        });

        history.push(`/aluno/${data.id}/edit`);
        toast.success('Aluno(a) criado(a) com Sucesso!');
      }

      setIsLoading(false);
    } catch (err) {
      const status = get(err, 'response.status', 0);
      const data = get(err, 'response.data', []);
      const errors = get(data, 'response.errors', []);

      if (errors.length > 0) {
        errors.map((error) => toast.error(error));
      } else {
        toast.error('Erro desconhecido');
      }

      if (status === 401) {
        dispatch(actions.loginFailure());
      }
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>{id ? 'Editar Aluno' : 'Cadastrar um Novo Aluno'}</Title>

      {id && (
        <ProfilePicture>
          {foto ? (
            <img crossOrigin="" src={foto} alt={nome} />
          ) : (
            <FaUserCircle size={150} />
          )}
          <Link to={`/fotos/${id}`}>
            <FaEdit size={23} />
          </Link>
        </ProfilePicture>
      )}

      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          <span>Nome:</span>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite o nome do Aluno"
          />
        </label>
        <label htmlFor="sobrenome">
          <span>Sobrenome:</span>
          <input
            type="text"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
            placeholder="Digite o sobrenome do Aluno"
          />
        </label>
        <label htmlFor="email">
          <span>Email:</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite o e-mail do Aluno"
          />
        </label>
        <label htmlFor="idade">
          <span>Idade:</span>
          <input
            type="number"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            placeholder="Digite a idade do Aluno"
          />
        </label>
        <label htmlFor="peso">
          <span>Peso:</span>
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Digite o peso do Aluno"
          />
        </label>
        <label htmlFor="altura">
          <span>Altura:</span>
          <input
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            placeholder="Digite a altura do Aluno"
          />
        </label>
        <button type="submit">{id ? 'Editar Aluno' : 'Cadastrar Aluno'}</button>
      </Form>
    </Container>
  );
}

Aluno.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
