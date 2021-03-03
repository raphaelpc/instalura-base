import { DefaultTheme } from 'styled-components';
import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { typographyVariants } from './typographyVariants';

const myTheme: DefaultTheme = {
    colors,
    typographyVariants,
    breakpoints,
    borderRadius: '8px',
    fontFamily: '\'Rubik\', sans-serif',
    transition: '200ms ease-in-out',
};

export default myTheme;