import React, { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../commons/Button';
import TextField from '../forms/TextField';
import Text from '../foundation/Text';
import Box from '../foundation/layout/Box';
import Grid from '../foundation/layout/Grid';

function FormContent() {
  const [userInfo, setUserInfo] = useState({
    usuario: 'raphaelpc',
    email: 'rapscavs@gmail.com',
  });

  const isFormInvalid = userInfo.usuario.length === 0 || userInfo.email.length === 0;

  // capturadores, pegadores de ação, manejadores
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('userInfo', userInfo);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Text
        variant="title"
        tag="h1"
        color="tertiary.main"
      >
        Pronto para saber da vida dos outros?
      </Text>

      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.light"
        marginBottom="32px"
      >
        Você está a um passo de saber de tudo que está
        rolando no bairro, complete seu cadastro agora!
      </Text>

      <div>
        <TextField
          placeholder="Email"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <TextField
          placeholder="Usuário"
          name="usuario"
          value={userInfo.usuario}
          onChange={handleChange}
        />
      </div>

      <Button
        variant="primary.main"
        type="submit"
        disabled={isFormInvalid}
        fullWidth
      >
        Cadastrar
      </Button>
    </form>
  );
}

interface FormCadastroProps {
  propsDoModal: any;
}

export default function FormCadastro({ propsDoModal }: FormCadastroProps) {
  return (
    <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex={1}
      justifyContent="flex-end"
    >
      <Grid.Col
        display="flex"
        paddingRight={{ md: '0' }}
        flex={1}
        value={{ xs: 12, md: 5, lg: 4 }}
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          flex={1}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          padding={{
            xs: '16px',
            md: '85px',
          }}
          backgroundColor="white"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...propsDoModal}
        >
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}
