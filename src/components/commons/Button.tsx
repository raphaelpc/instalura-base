import styled, { css } from 'styled-components';
import { get } from 'lodash';

interface ButtonProps {
    variant: string;
    ghost: boolean;
}

const ButtonGhost = css<ButtonProps>`
    background: transparent;
    color: ${props => get(props.theme, `colors.${props.variant}.color`)};
`;

const ButtonDefault = css<ButtonProps>`
    background-color: ${props => get(props.theme, `colors.${props.variant}.color`)};
    color: ${props => get(props.theme, `colors.${props.variant}.contrastText`)};
`;

export const Button = styled.button<ButtonProps>`
    border: 0;
    padding: 12px 26px;
    cursor: pointer;
    font-weight: bold;
    opacity: 1;
    
    ${props => props.ghost ? ButtonGhost : ButtonDefault}

    transition: opacity ${props => props.theme.transition};
    border-radius: ${props => props.theme.borderRadius};

    &:hover,
    &:focus {
        opacity: .5;
    }
`;