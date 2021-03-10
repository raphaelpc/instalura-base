import React from 'react';
import Button from './Button';
import Text from '../foundation/Text';
import Logo from '../../styles/img/Logo';
import MenuWrapper from '../../styles/components/commons/Menu';

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
];

export default function Menu() {
  return (
    <MenuWrapper>
      <div className="left">
        <Logo />
      </div>

      <div className="central">
        {
          links.map(link => ((
            <li key={link.texto}>
              <Text tag="a" href={link.url}>
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
  );
}
