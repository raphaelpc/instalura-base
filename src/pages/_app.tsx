import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import { GlobalStyle } from '../theme/GlobalStyle';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}
