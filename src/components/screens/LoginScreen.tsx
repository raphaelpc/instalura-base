import React from 'react';
import Logo from '../../styles/img/Logo';
import Button from '../commons/Button';
import Link from '../commons/Link';
import TextField from '../forms/TextField';
import Box from '../foundation/layout/Box';
import Grid from '../foundation/layout/Grid';
import Text from '../foundation/Text';
import { useWebsiteWrapper } from '../wrappers/WebsiteWrapper';

function LoginForm() {
  return (
    <form id="formCadastro" action="/app/profile">
      <TextField
        placeholder="Usuário"
        name="usuario"
      />
      <TextField
        placeholder="Senha (senhasegura)"
        name="senha"
        type="password"
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

export default function LoginScreen() {
  const { openModalCadastro } = useWebsiteWrapper();
  return (
    <Grid.Container>
      <Grid.Row
        flex="1"
        alignItens="center"
        justifyContent="center"
      >
        <Grid.Col
          display="flex"
          flexDirection="column"
          justifyContent="center"
          offset={{ leg: 2 }}
          value={{ xs: 12, md: 6, lg: 4 }}
          flex="1"
        >
          <Box
            display="flex"
            alignItens="center"
            justifyContent="center"
            marginTop="37px"
            marginBottom="37px"
          >
            <Link
              href="/"
              color="secondary.main"
            >
              <Logo size="large" />
            </Link>
          </Box>

          <LoginForm />

          <Text
            variant="paragraph1"
            tag="p"
            color="tertiary.light"
            textAlign="center"
          >
            {'Não tem uma conta? '}
            <Link
              href="/"
              color="secondary.main"
              onClick={event => {
                event.preventDefault();
                openModalCadastro();
              }}
            >
              Cadastre-se
            </Link>
          </Text>
        </Grid.Col>

        <Grid.Col value={{ xs: 12, md: 6 }}>
          <Box
            display="flex"
            justifyContent="center"
          >
            <img
              src="/images/phones.png"
              alt="Telefones mostrando as páginas internas do app"
            />
          </Box>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
}
