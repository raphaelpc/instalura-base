import React from 'react';
import Head from 'next/head';
import Button from '../components/commons/Button';
import Footer from '../components/commons/Footer';
import Menu from '../components/commons/Menu';
import Box from '../components/foundation/layout/Box';
import Grid from '../components/foundation/layout/Grid';
import Text from '../components/foundation/Text';

export default function Home() {
  return (
    <Box
      flex={1}
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      backgroundImage="url(/images/bubbles.svg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom right"
    >
      <Head>
        <title>Instalura!!</title>
      </Head>

      <Menu />

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

      <Footer />
    </Box>
  );
}
