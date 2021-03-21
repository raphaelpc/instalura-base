import React from 'react';
import HomeScreen from '../components/screens/HomeScreen';
import { WebsiteWrapperProvider } from '../components/contexts/WebsiteWrapper';

export default function HomePage() {
  return (
    <WebsiteWrapperProvider
      seoProps={{
        headTitle: 'Home',
      }}
      pageBoxProps={{
        backgroundImage: 'url(/images/bubbles.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom right',
      }}
      menuProps={{
        display: false,
      }}
    >
      <HomeScreen />
    </WebsiteWrapperProvider>
  );
}
