import React from 'react';
import { WebsiteWrapperProvider } from '../../components/contexts/WebsiteWrapper';
import FAQScreen, { FAQCategory } from '../../components/screens/FAQScreen';

interface FAQPageProps {
  faqCategories: FAQCategory[];
}

export default function FAQPage({ faqCategories }: FAQPageProps) {
  // FORMA TRADICIONAL:
  // const [faqCategories, setFaqCategories] = useState([]);
  // useEffect(() => {
  //   fetch('https://instalura-api.vercel.app/api/content/faq')
  //     .then(response => response.json())
  //     .then(responseJson => responseJson.data)
  //     .then(data => setFaqCategories(data));
  // }, []);

  return (
    <WebsiteWrapperProvider>
      <FAQScreen faqCategories={faqCategories} />
    </WebsiteWrapperProvider>
  );
}

export async function getStaticProps() {
  const response = await fetch('https://instalura-api.vercel.app/api/content/faq');
  if (!response.ok) {
    return {
      props: {
        faqCategories: [],
      },
    };
  }

  const responseJson = await response.json();
  return {
    props: {
      faqCategories: responseJson?.data,
    },
  };
}
