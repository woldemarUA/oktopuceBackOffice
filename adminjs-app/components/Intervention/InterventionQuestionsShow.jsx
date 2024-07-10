import React, { useState, useEffect } from 'react';
import { CheckboxGrid, Box } from '../styled-componens/CheckBoxGrid.mjs';
import { customResourceAction } from '../actions/apiCalls.mjs';
import ShowChildrenQuestions from '../atoms/ShowChildrenQuestions';
import { Row } from '../styled-componens/Atoms.mjs';

export const trueFalseConverter = (q) => {
  if (q.type === 'checkbox') {
    return parseInt(q.response, 10) ? 'Oui' : 'Non';
  }
  return q.response;
};
const InterventionQuestionsShow = ({ record }) => {
  const [questions, setQuestions] = useState([]);
  const [section, setSection] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await customResourceAction(
          'interventions_questions',
          'getQuestions',
          { intervention_id: record.params.id }
        );
        response.forEach((question) => {
          if (question.children) {
            setSection((prevState) => [...prevState, question]);
          } else {
            setQuestions((prevState) => [...prevState, question]);
          }
        });
        // setQuestions(response);
      } catch (error) {
        console.error('Failed to fetch options:', error);
      }
    };

    fetchQuestions();
  }, [record.params.id]);

  return (
    <>
      <Row>
        <CheckboxGrid columns={4}>
          {questions &&
            questions.map((q) => (
              <Box key={q.id}>
                <span>{q.name}</span>
                <span>{trueFalseConverter(q)}</span>
              </Box>
            ))}
        </CheckboxGrid>
      </Row>
      <CheckboxGrid columns={4}>
        {section &&
          section.map((q) => (
            <ShowChildrenQuestions
              key={q.id}
              question={q}
            />
          ))}
      </CheckboxGrid>
    </>
  );
};

export default InterventionQuestionsShow;
