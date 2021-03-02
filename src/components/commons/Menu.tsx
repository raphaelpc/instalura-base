import styled from 'styled-components';
import { Button } from './Button';
import { Logo } from '../../theme/Logo';
import Text from '../foundation/Text';

const MenuWrapper = styled.nav`
    font-family: ${props => props.theme.fontFamily};

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    margin-top: 18px;
    padding-left: 28px;
    padding-right: 28px;

    div {
        padding: 0;
        margin: 0;

        &.left {
            order: 1;
        }

        &.central {
            order: 3;
            width: 100%;
            list-style: none;

            display: flex;
            align-items: center;
            justify-content: space-between;

            margin-top: 17px;
            border-top: 1px solid #88989E;
            border-bottom: 1px solid #88989E;
            padding: 12px;

            a {
                text-align: center;
                display: block;
                text-decoration: none;
                color: #88989E;
                transition: 200ms ease-in-out;

                &:hover,
                &:focus {
                    font-weight: 500;
                    color: #070C0E;
                }
            }
        }

        &.right {
            order: 2;
            flex: 1;

            display: flex;
            justify-content: flex-end;
        }
    }
`;

const links = [
    {
        texto: 'Home',
        url: '/',
    },
    {
        texto: 'Perguntas Frequentes',
        url: '/faq',
    },
    {
        texto: 'Sobre',
        url: '/sobre',
    },
]

export function Menu() {

    return (
        <MenuWrapper>
            <div className="left">
                <Logo />
            </div>

            <div className="central">
                {
                    links.map(link => ((
                        <li key={link.texto}>
                            {/* <a href={link.url}>
                                {link.texto}
                            </a> */}
                            <Text variant="smallestException" tag="a" href={link.url}>
                                {link.texto}
                            </Text>
                        </li>
                    )))
                }
            </div>

            <div className="right">
                <Button variant="secondary.main" ghost>
                    Entrar
                </Button>

                <Button variant="primary.main">
                    Cadastrar
                </Button>
            </div>
        </MenuWrapper>
    )
}