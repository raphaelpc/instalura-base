import { Button } from './Button';
import { MenuWrapper, MenuWrapperCentral, MenuWrapperLeft, MenuWrapperRight } from './MenuWrapper';
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
            <MenuWrapperLeft>
                <Logo />
            </MenuWrapperLeft>

            <MenuWrapperCentral>
                {
                    links.map(link => ((
                        <li key={link.texto}>
                            <a href={link.url}>
                                {link.texto}
                            </a>
                        </li>
                    )))
                }
            </MenuWrapperCentral>

            <MenuWrapperRight>
                <Button variant="secondary.main" ghost>
                    Entrar
                </Button>

                <Button variant="primary.main">
                    Cadastrar
                </Button>
            </MenuWrapperRight>
        </MenuWrapper>
    )
}