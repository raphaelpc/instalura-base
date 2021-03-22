import React from 'react';
import { useTheme } from 'styled-components';
import { FAQCategory, Question } from '../../types/faq.types';
import Box from '../foundation/layout/Box';
import Grid from '../foundation/layout/Grid';
import Text from '../foundation/Text';

interface FAQQuestionScreenProps {
  category: FAQCategory;
  question: Question;
}

export default function FAQQuestionScreen({
  category,
  question,
}: FAQQuestionScreenProps) {
  const theme = useTheme();
  return (
    <Grid.Container
      flex="1"
      marginTop={{
        xs: '32px',
        md: '80px',
      }}
    >
      <Grid.Row
        flexDirection={{
          xs: 'column-reverse',
          md: 'row',
        }}
      >
        <Grid.Col
          offset={{ sm: 0, lg: 1 }}
          value={{ xs: 12, md: 4 }}
        >
          <Text
            variant="title"
            color="tertiary.main"
            marginBottom="25px"
          >
            Artigos
            <br />
            Relacionados
          </Text>

          <Box
            as="ul"
            listStyle="none"
            padding="24px 30px"
            backgroundColor={theme.colors.borders.main.color}
          >
            {
              category?.questions.map(currentQuestion => (
                <li key={currentQuestion.slug}>
                  <Text
                    variant="paragraph2"
                    href={`/faq/${currentQuestion.slug}`}
                    color="primary.main"
                    marginBottom="16px"
                    display="block"
                  >
                    {currentQuestion.title}
                  </Text>
                </li>
              ))
            }
          </Box>
        </Grid.Col>

        <Grid.Col
          value={{ lg: 6 }}
          marginBottom={{
            xs: '50px',
            md: '0',
          }}
        >
          <Text
            variant="title"
            color="tertiary.main"
          >
            {question.title}
          </Text>

          <Text
            as="p"
            variant="paragraph1"
            color="tertiary.light"
          >
            {question.description}
          </Text>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
}
