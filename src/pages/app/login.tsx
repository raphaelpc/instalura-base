import LoginScreenPageObject from '../../components/screens/LoginScreen';
import { withWebsiteWrapper } from '../../components/wrappers/WebsiteWrapper';

export default withWebsiteWrapper(LoginScreenPageObject, {
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
