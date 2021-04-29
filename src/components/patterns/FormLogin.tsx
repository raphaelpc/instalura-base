import React from 'react';
import { useRouter } from 'next/router';
import Button from '../commons/Button';
import TextField from '../forms/TextField';
import loginServices from '../../services/login/loginServices';
import useForm from '../../infra/hooks/form/useForm';

export default function FormLogin() {
  const router = useRouter();

  const initialValues = {
    usuario: '',
    senha: '',
  };

  const {
    values,
    handleChange,
    handleSubmit,
  } = useForm({
    initialValues,
    onSubmit: async submitValues => {
      const { usuario, senha } = submitValues;
      const response = await loginServices.doLogin({
        username: usuario,
        password: senha,
      });
      console.log(response);
      router.push('/app/profile');
    },
  });

  return (
    <form id="formCadastro" onSubmit={handleSubmit}>
      <TextField
        placeholder="Usuário"
        name="usuario"
        value={values.usuario}
        onChange={handleChange}
      />
      <TextField
        placeholder="Senha (senhasegura)"
        name="senha"
        type="password"
        value={values.senha}
        onChange={handleChange}
      />

      <Button
        type="submit"
        variant="primary.main"
        margin={{
          xs: '0 auto',
          md: 'initial',
        }}
        fullWidth
      >
        Entrar
      </Button>
    </form>
  );
}
