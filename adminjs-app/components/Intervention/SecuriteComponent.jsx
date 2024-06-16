import React, { useState, useEffect } from 'react';
import { Box, Label } from '../styled-componens/CheckBoxGrid.mjs';
import { Select } from '@adminjs/design-system';
import ToggleSwitch from '../styled-componens/ToggleSwitch';

const SecuriteComponent = ({
  parent,
  fetchAux,
  optionsMapper,
  questionsValuesHandler,
}) => {
  const [auxQuestions, setAuxQuestions] = useState(null);
  const [modeOption, setModeOption] = useState('');
  const [fonctionGroupeValue, setFonctionGroupeValue] = useState(false);

  const fonctionGroupe = auxQuestions && auxQuestions[0];

  const mode = auxQuestions && auxQuestions[1];

  const hanldeMode = (selectedOption) => {
    setModeOption(selectedOption.value);
  };

  useEffect(() => {
    if (auxQuestions) {
      questionsValuesHandler({ id: mode.id, response: modeOption });
      questionsValuesHandler({
        id: fonctionGroupe.id,
        response: fonctionGroupeValue,
      });
    }
  }, [modeOption, fonctionGroupeValue, auxQuestions]);

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
          <Box mb={2}>
            <Label
              htmlFor={mode.id}
              my={1}>
              <span>{mode.name}</span>
            </Label>
            <Select
              options={optionsMapper(mode.options)}
              onChange={(selectedOption) => hanldeMode(selectedOption)}
              name={mode.name}
              value={modeOption.value}
            />
          </Box>
        </>
      )}
    </Box>
  );
};

export default SecuriteComponent;
