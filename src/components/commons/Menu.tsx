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

interface MenuProps {
  onCadastrar: () => void;
}

export default function Menu({ onCadastrar }: MenuProps) {
  return (
    <MenuWrapper>
      <div className="left">
        <Logo />
      </div>

      <div className="central">
        {
          links.map(link => ((
            <li key={link.texto}>
              <Text href={link.url}>
                {link.texto}
              </Text>
            </li>
          )))
        }
      </div>

      <div className="right">
        <Button variant="secondary.main" ghost href="/login">
          Entrar
        </Button>

        <Button variant="primary.main" onClick={onCadastrar}>
          Cadastrar
        </Button>
      </div>
    </MenuWrapper>
  );
}
