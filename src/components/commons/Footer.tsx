import styled from 'styled-components';

const FooterWrapper = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 14px 28px;
    border-radius: 4px;

    img {
        width: 58px;
        margin-right: 23px;
    }

    a {
        color: ${props => props.theme.colors.primary.main.color};
        text-decoration: none;
        transition: .3s;

        &:hover,
        &:focus {
            opacity: .5;
        }
    }
`;

export function Footer(props) {
    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <FooterWrapper {...props}>
            <a href="https://www.alura.com.br/">
                <img src="https://www.alura.com.br/assets/img/alura-logo.svg" alt="Logo Alura" />
            </a>
            <p>
                Orgulhosamente criado durante o
                {' '}
                <a href="https://www.alura.com.br/">
                    <span>Bootcamp Alura JAM Stack</span>
                </a>
            </p>
        </FooterWrapper>
    );
} 