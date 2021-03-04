import Head from 'next/head';
import styled from 'styled-components';
import { Button } from '../components/commons/Button';
import { Footer } from '../components/commons/Footer'
import { Menu } from '../components/commons/Menu'
import { Grid } from '../components/foundation/layout/Grid';
import Text from '../components/foundation/Text';

export const HomeTemplate = styled.main`
    flex: 1;

    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
`;

export default function Home() {
    return (
        <HomeTemplate>
            <Head>
                <title>Instalura!!</title>
            </Head>

            <Menu />

            <Grid.Container>
                <Grid.Row>
                    <Grid.Col
                        value={{ xs: 12, md: 5 }}
                        offset={{ xs: 0, md: 1 }}
                    >
                        <Text
                            variant="title"
                            tag="h1"
                            color="tertiary.main"
                            textAlign={{
                                xs: 'center',
                                md: 'left',
                            }}
                        >
                            Compartilhe momentos e conecte-se com amigos.
                        </Text>

                        <Text
                            variant="paragraph1"
                            tag="p"
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
                                xs: "auto",
                                md: "initial"
                            }}
                        >
                            Cadastrar
                        </Button>
                    </Grid.Col>

                    <Grid.Col
                        value={{ xs: 12, md: 6 }}
                    >
                        <img
                            src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
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
        </HomeTemplate>
    )
}
