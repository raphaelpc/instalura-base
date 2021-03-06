import React from 'react';
import { FAQCategory } from '../../types/faq.types';
import Box from '../foundation/layout/Box';
import Grid from '../foundation/layout/Grid';
import Text from '../foundation/Text';

interface FAQScreenProps {
  faqCategories: FAQCategory[];
}

export default function FAQScreen({ faqCategories }: FAQScreenProps) {
  return (
    <Grid.Container>
      <Grid.Row
        marginTop={{ xs: '32px', md: '0px' }}
        marginBottom={{ xs: '32px', md: '100px' }}
        justifyContent="center"
      >
        <Grid.Col
          flex="1"
          value={{ xs: 12, md: 12 }}
        >
          <Text
            variant="title"
            tag="h2"
            color="tertiary.main"
            textAlign="center"
          >
            Como podemos te ajudar?
          </Text>
        </Grid.Col>
      </Grid.Row>

      <Grid.Row
        flex="1"
        alignItems="flex-start"
        justifyContent="center"
      >
        {
          faqCategories && faqCategories.map(category => (
            <Grid.Col
              key={category.title}
              flex="1"
              value={{ xs: 12, md: 3 }}
            >
              <Box width="100%">
                <Text
                  variant="subTitle"
                  tag="h2"
                  color="tertiary.main"
                  marginBottom="26px"
                >
                  {category.title}
                </Text>

                <Box
                  as="ul"
                  padding="0"
                  listStyle="none"
                >
                  {
                    category.questions.map(question => (
                      <li key={question.title}>
                        <Text
                          variant="paragraph1"
                          tag="h2"
                          color="tertiary.light"
                          href={`/faq/${question.slug}`}
                        >
                          {question.title}
                        </Text>
                      </li>
                    ))
                  }
                </Box>
              </Box>
            </Grid.Col>
          ))
        }
      </Grid.Row>
    </Grid.Container>
  );
}
