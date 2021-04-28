import React from 'react';
import { AppProps } from 'next/app';
import GlobalProvider from '../components/providers/GlobalProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </GlobalProvider>
  );
}
