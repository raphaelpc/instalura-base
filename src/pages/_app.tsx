import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import { GlobalStyle } from '../theme/utils/GlobalStyle';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
