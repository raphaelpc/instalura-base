// https://styled-components.com/docs/api#create-a-declarations-file
// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {

    export interface ColorType {
        color: string;
        contrastText?: string;
    }

    export interface Color {
        main: ColorType;
        light?: ColorType;
    }

    export interface Colors {
        background: Color;
        borders: Color;
        primary: Color;
        secondary: Color;
        tertiary: Color;
        modes: {
            dark: any;
        };
    }

    export interface TypographyVariant {
        fontSize: string;
        fontWeight: string;
        lineHeight: number;
    }

    export interface TypographyVariants {
        title: TypographyVariant;
        titleXS: TypographyVariant;
        subTitle: TypographyVariant;
        paragraph1: TypographyVariant;
        paragraph2: TypographyVariant;
        smallestException: TypographyVariant;
    }

    export interface Breakpoints {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
    }

    export interface DefaultTheme {
        colors: Colors;
        typographyVariants: TypographyVariants;
        breakpoints: Breakpoints;
        borderRadius: string;
        fontFamily: string;
        transition: string;
    }
}
