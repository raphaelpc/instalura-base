import styled, { css } from 'styled-components';
import { get } from 'lodash';
import breakpointsMedia from '../../styles/utils/breakpointsMedia';
import propToStyle, { PropToStyle } from '../../styles/utils/propToStyle';
import TextStyleVariants from '../../styles/components/foundation/TextStyleVariants';

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

const cssByBreakpointsButton = {
  xs: css`${TextStyleVariants.smallestException}`,
  md: css`${TextStyleVariants.paragraph1}`,
};

const Button = styled.button<ButtonProps>`
  border: 0;
  padding: 12px 26px;
  cursor: pointer;
  font-weight: bold;
  opacity: 1;

  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}

  transition: opacity ${props => props.theme.transition};
  border-radius: ${props => props.theme.borderRadius};

  &:hover,
  &:focus {
    opacity: .5;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: .2;
  }

  ${props => props.fullWidth && css`
    width: 100%;
  `}

  ${breakpointsMedia(cssByBreakpointsButton)}
  ${propToStyle('margin')}
  ${propToStyle('display')}
`;

export default Button;
