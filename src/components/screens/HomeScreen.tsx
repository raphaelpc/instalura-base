import React from 'react';
import Button from '../commons/Button';
import Grid from '../foundation/layout/Grid';
import Text from '../foundation/Text';
import { useWebsiteWrapper } from '../wrappers/WebsiteWrapper';

export default function HomeScreen() {
  const { openModalCadastro } = useWebsiteWrapper();
  return (
    <Grid.Container
      marginTop={{ xs: '10px', md: '0px' }}
    >
      <Grid.Row>
        <Grid.Col
          value={{ xs: 12, md: 5 }}
          offset={{ xs: 0, md: 1 }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Text
            tag="h1"
            variant="title"
            color="tertiary.main"
            textAlign={{
              xs: 'center',
              md: 'left',
            }}
          >
            Compartilhe momentos e conecte-se com amigos.
          </Text>

          <Text
            tag="p"
            variant="paragraph1"
            color="tertiary.light"
            textAlign={{
              xs: 'center',
              md: 'left',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>

          <Button
            variant="primary.main"
            display="block"
            margin={{
              xs: 'auto auto 40px',
              md: 'initial',
            }}
            onClick={openModalCadastro}
          >
            Cadastrar
          </Button>
        </Grid.Col>

        <Grid.Col
          value={{ xs: 12, md: 6 }}
        >
          <img
            src="/images/phones.png"
            alt="Instalura"
            style={{
              display: 'block',
              margin: 'auto',
            }}
          />
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
}
