import React from 'react';
import { withWebsiteWrapper } from '../../components/wrappers/WebsiteWrapper';
import FAQScreen from '../../components/screens/FAQScreen';
import { FAQCategory } from '../../types/faq.types';
import { getFaqCategories } from '../../services/faqServices';

interface FAQPageProps {
  faqCategories: FAQCategory[];
}

function FAQPage({ faqCategories }: FAQPageProps) {
  // FORMA TRADICIONAL:
  // const [faqCategories, setFaqCategories] = useState([]);
  // useEffect(() => {
  //   fetch('https://instalura-api.vercel.app/api/content/faq')
  //     .then(response => response.json())
  //     .then(responseJson => responseJson.data)
  //     .then(data => setFaqCategories(data));
  // }, []);

  return (
    <FAQScreen faqCategories={faqCategories} />
  );
}

export default withWebsiteWrapper(FAQPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Perguntas Frequentes',
    },
  },
});

export async function getStaticProps() {
  const faqCategories = await getFaqCategories();

  return {
    props: {
      faqCategories,
    },
  };
}
