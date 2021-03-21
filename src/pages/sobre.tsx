import React from 'react';
import { withWebsiteWrapper } from '../components/wrappers/WebsiteWrapper';

function LoginPage() {
  return (
    <div>
      Sobre o Instalura
    </div>
  );
}

export default withWebsiteWrapper(LoginPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Sobre o Instalura',
    },
  },
});
