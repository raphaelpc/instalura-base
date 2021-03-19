import React, { useState } from 'react';
import Menu from '../commons/Menu';
import Modal from '../commons/Modal';
import Box from '../foundation/layout/Box';
import Grid from '../foundation/layout/Grid';
import Text from '../foundation/Text';
import FormCadastro from '../patterns/FormCadastro';

type Question = {
  title?: string;
  slug?: string;
  description?: string;
}

export type FAQCategory = {
  title?: string;
  slug?: string;
  questions?: Question[];
}

interface FAQScreenProps {
  faqCategories: FAQCategory[];
}

export default function FAQScreen({ faqCategories }: FAQScreenProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleModalClose() {
    setIsModalOpen(false);
  }

  function handleCadastrar() {
    setIsModalOpen(true);
  }

  return (
    <Box
      flex="1"
      display="flex"
      flexDirection="column"
    >
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
      >
        {propsDoModal => (
          <FormCadastro propsDoModal={propsDoModal} />
        )}
      </Modal>

      <Menu onCadastrar={handleCadastrar} />

      <Grid.Container flex="1">
        <Grid.Row
          marginTop={{ xs: '32px', md: '100px' }}
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
    </Box>
  );
}
