import React, { useState, useEffect } from 'react';
import { Box, Label } from '../styled-componens/CheckBoxGrid.mjs';

import ToggleSwitch from '../styled-componens/ToggleSwitch';

const ResistanceComponent = ({ parent, fetchAux, questionsValuesHandler }) => {
  const [auxQuestions, setAuxQuestions] = useState(null);
  const [fonctionGroupeValue, setFonctionGroupeValue] = useState(false);

  const fonctionGroupe = auxQuestions && auxQuestions[0];

  useEffect(() => {
    if (auxQuestions) {
      questionsValuesHandler({
        id: fonctionGroupe.id,
        response: fonctionGroupeValue,
      });
    }
  }, [fonctionGroupeValue, auxQuestions]);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const data = await fetchAux(parent);
        const parentData = await fetch(
          `/api/resources/intervention_question_types/records/${parent}/show`
        );

        setAuxQuestions(data.questions);
      } catch (error) {
        console.error('Failed to fetch options:', error);
        return null;
      }
    }

    fetchQuestions();
  }, [parent]);

  return (
    <Box my={1}>
      {auxQuestions && (
        <>
          <Box mb={2}>
            <Label
              htmlFor={fonctionGroupe.id}
              my={1}>
              <span>{fonctionGroupe.name}</span>
              <ToggleSwitch
                id={fonctionGroupe.id}
                name={fonctionGroupe.id}
                checked={fonctionGroupeValue}
                onChange={() => setFonctionGroupeValue(!fonctionGroupeValue)}
              />
            </Label>
          </Box>
        </>
      )}
    </Box>
  );
};

export default ResistanceComponent;
