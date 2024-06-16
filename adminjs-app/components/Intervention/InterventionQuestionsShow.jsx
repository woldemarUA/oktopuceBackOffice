import React, { useState, useEffect } from 'react';
import { CheckboxGrid, Box } from '../styled-componens/CheckBoxGrid.mjs';

const trueFalseConverter = (q) => {
  if (q.type === 'checkbox') {
    return parseInt(q.response, 10) ? 'Oui' : 'Non';
  }
  return q.response;
};
const InterventionQuestionsShow = ({ record }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(
          `/api/resources/interventions_questions/actions/getQuestions?intervention_id=${record.params.id}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        setQuestions(data.questions);
      } catch (error) {
        console.error('Failed to fetch options:', error);
      }
    };

    fetchQuestions();
  }, [record.params.id]);

  return (
    <CheckboxGrid columns={4}>
      {questions &&
        questions.map((q) => (
          <Box key={q.id}>
            <span>{q.name}</span>
            <span>{trueFalseConverter(q)}</span>
          </Box>
        ))}
    </CheckboxGrid>
  );
};

export default InterventionQuestionsShow;
