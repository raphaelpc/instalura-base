import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import FAQQuestionScreen from '../../components/screens/FAQQuestionScreen';
import { WebsiteWrapperProvider } from '../../components/wrappers/WebsiteWrapper';
import { getFaqCategories } from '../../services/faqServices';
import { FAQCategory, Question } from '../../types/faq.types';

interface FAQQuestionPageProps {
  category: FAQCategory;
  question: Question;
}

export default function FAQQuestionPage({
  category,
  question,
}: FAQQuestionPageProps) {
  return (
    <WebsiteWrapperProvider
      seoProps={{
        headTitle: question.title,
      }}
    >
      <FAQQuestionScreen
        category={category}
        question={question}
      />
    </WebsiteWrapperProvider>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const faqCategories = await getFaqCategories();

  let props = {
    category: null,
    question: null,
  };

  faqCategories.forEach(faqCategory => {
    const foundQuestion = faqCategory.questions
      .find(question => question.slug === params.slug);

    // ou seja, exibirá a primeira categoria que
    // contenha a questão correspondente ao slug
    if (foundQuestion) {
      props = {
        category: faqCategory,
        question: foundQuestion,
      };
    }
  });

  return {
    props,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const faqCategories = await getFaqCategories();

  const paths = faqCategories.reduce((acc, faqCategory) => {
    const questionsPaths = faqCategory.questions.map(question => ({
      params: { slug: question.slug },
    }));

    return [
      ...acc,
      ...questionsPaths,
    ];
  }, []);

  return {
    paths,
    fallback: false,
  };
};
