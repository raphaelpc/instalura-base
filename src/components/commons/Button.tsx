import styled, { css } from 'styled-components';
import { get } from 'lodash';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';
import { PropToStyle, propToStyle } from '../../theme/utils/propToStyle';
import { TextStyleVariants } from '../../theme/utils/text/TextStyleVariants';

interface ButtonProps {
    variant: string;
    ghost?: boolean;
    margin?: PropToStyle;
    display?: PropToStyle;
    [propName: string]: any;
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

    ${breakpointsMedia({
        xs: css`
            ${TextStyleVariants.smallestException}
        `,
        md: css`
            ${TextStyleVariants.paragraph1}
        `,
    })}

    ${propToStyle('margin')}
    ${propToStyle('display')}
`;