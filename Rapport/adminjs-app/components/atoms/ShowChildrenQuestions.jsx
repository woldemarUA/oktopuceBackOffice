import React from 'react';

import {
  Section,
  Heading,
  Box,
  Row,
  Paragraph,
  ColoredSpan,
} from '../styled-componens/Atoms.mjs';

import { trueFalseConverter } from '../Intervention/InterventionQuestionsShow';

const ShowChildrenQuestions = ({ question }) => {
  return (
    <Section
      mt={3}
      min-width='content'>
      <Heading>{question.label.toUpperCase()}</Heading>
      <Row>
        <Paragraph mb={1}>
          <ColoredSpan>{question.name}</ColoredSpan>
          <ColoredSpan
            mx={2}
            fontColor='primary'>
            {trueFalseConverter(question)}
          </ColoredSpan>
        </Paragraph>
      </Row>

      {question &&
        question.children.map((q, i) => (
          <Box key={q.id}>
            <Paragraph
              key={q.id}
              mb={1}>
              <ColoredSpan>{q.name}</ColoredSpan>
              <ColoredSpan
                mx={2}
                fontColor='primary'>
                {trueFalseConverter(q)}
              </ColoredSpan>
            </Paragraph>
          </Box>
        ))}
    </Section>
  );
};

export default ShowChildrenQuestions;
