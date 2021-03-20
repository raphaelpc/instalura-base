import React from 'react';
import Head from 'next/head';
import HomeScreen from '../components/screens/HomeScreen';
import { WebsiteWrapperProvider } from '../components/contexts/WebsiteWrapper';

export default function HomePage() {
  return (
    <WebsiteWrapperProvider>
      <HomeScreen />
    </WebsiteWrapperProvider>
  );

  // return (
  //   <Box
  //     flex="1"
  //     display="flex"
  //     flexDirection="column"
  //     flexWrap="wrap"
  //     justifyContent="space-between"
  //     backgroundImage="url(/images/bubbles.svg)"
  //     backgroundRepeat="no-repeat"
  //     backgroundPosition="bottom right"
  //   >
  //     <Head>
  //       <title>Instalura!!</title>
  //     </Head>

  //   </Box>
  // );
}
