import ProfileScreen from '../../components/screens/ProfileScreen';
import { withWebsiteWrapper } from '../../components/wrappers/WebsiteWrapper';

export default withWebsiteWrapper(ProfileScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Profile',
    },
  },
});
