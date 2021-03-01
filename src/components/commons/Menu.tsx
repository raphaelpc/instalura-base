import { Button } from './Button';
import { MenuWrapper } from './MenuWrapper';
import { Logo } from '../../theme/Logo';

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
            <MenuWrapper.LeftSide>
                <Logo />
            </MenuWrapper.LeftSide>

            <MenuWrapper.CentralSide>
                {
                    links.map(link => ((
                        <li key={link.texto}>
                            <a href={link.url}>
                                {link.texto}
                            </a>
                        </li>
                    )))
                }
            </MenuWrapper.CentralSide>

            <MenuWrapper.RightSide>
                <Button variant="secondary.main" ghost>
                    Entrar
                </Button>

                <Button variant="primary.main">
                    Cadastrar
                </Button>
            </MenuWrapper.RightSide>
        </MenuWrapper>
    )
}