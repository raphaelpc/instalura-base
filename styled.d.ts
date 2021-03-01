// https://styled-components.com/docs/api#create-a-declarations-file
// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {

    export interface DefaultTheme {
        colors: {
            background: {
                light: {
                    color: string;
                };
                main: {
                    color: string;
                };
            };
            borders: {
                main: {
                    color: string;
                };
            };
            primary: {
                main: {
                    color: string;
                    contrastText: string;
                };
            };
            secondary: {
                main: {
                    color: string;
                    contrastText: string;
                };
            };
            tertiary: {
                main: {
                    color: string;
                    contrastText: string;
                };
                light: {
                    color: string;
                    contrastText: string;
                };
            };
            modes: {
                dark: {};
            };
        };
        borderRadius: string;
        fontFamily: string;
        transition: string;
    }
}