import React from 'react';
import { withWebsiteWrapper } from '../../components/wrappers/WebsiteWrapper';

function LoginPage() {
  return (
    <div>
      Página de Login
    </div>
  );
}

export default withWebsiteWrapper(LoginPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Login',
    },
    pageBoxProps: {
      backgroundImage: 'url(/images/bubbles.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right',
    },
    menuProps: {
      display: false,
    },
  },
});
