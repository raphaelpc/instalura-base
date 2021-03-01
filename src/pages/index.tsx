import Head from 'next/head';
import styled from 'styled-components';
import { Footer } from '../components/commons/Footer'
import { Menu } from '../components/commons/Menu'

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
            <Footer />
        </HomeTemplate>
    )
}
