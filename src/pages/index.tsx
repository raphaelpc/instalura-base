import HomeScreen from '../components/screens/HomeScreen';
import { withWebsiteWrapper } from '../components/wrappers/WebsiteWrapper';

export default withWebsiteWrapper(HomeScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
    },
    pageBoxProps: {
      backgroundImage: 'url(/images/bubbles.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right',
    },
    menuProps: {
      display: true,
    },
  },
});

// export default function HomePage() {
//   return (
//     <WebsiteWrapperProvider
//       seoProps={{
//         headTitle: 'Home',
//       }}
//       pageBoxProps={{
//         backgroundImage: 'url(/images/bubbles.svg)',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'bottom right',
//       }}
//       menuProps={{
//         display: false,
//       }}
//     >
//       <HomeScreen />
//     </WebsiteWrapperProvider>
//   );
// }
