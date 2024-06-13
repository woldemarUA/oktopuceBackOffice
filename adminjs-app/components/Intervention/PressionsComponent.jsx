import React, { useState, useEffect } from 'react';
import { Box, Label } from '../styled-componens/CheckBoxGrid.mjs';
import Select from 'react-select';

import { temperatureOptions } from '../../utilities/controleEtancheite.mjs';

const PressionsComponent = ({
  parent,
  fetchAux,
  optionsMapper,
  questionsValuesHandler,
}) => {
  const [auxQuestions, setAuxQuestions] = useState(null);
  const [modeOption, setModeOption] = useState('');
  const [pressionReleveValue, setPressionReleveValue] = useState('');

  const mode = auxQuestions && auxQuestions[0];
  const pressionReleve = auxQuestions && auxQuestions[1];

  const hanldeMode = (selectedOption) => {
    setModeOption(selectedOption.value);
  };
  const handlePressionReleve = (selectedOption) => {
    setPressionReleveValue(selectedOption.value);
  };

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

  useEffect(() => {
    if (auxQuestions) {
      questionsValuesHandler({ id: mode.id, response: modeOption });
      questionsValuesHandler({
        id: pressionReleve.id,
        response: pressionReleveValue,
      });
    }
  }, [modeOption, pressionReleveValue, auxQuestions]);

  return (
    <Box my={1}>
      {auxQuestions && (
        <>
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
          <Box mb={2}>
            <Label
              htmlFor={pressionReleve.id}
              mb={1}>
              {pressionReleve.name}, BAR
            </Label>
            <Select
              options={temperatureOptions(1, 40)}
              onChange={(selectedOption) =>
                handlePressionReleve(selectedOption)
              }
              name={pressionReleve.name}
              value={pressionReleveValue.value}
            />
          </Box>
        </>
      )}
    </Box>
  );
};

export default PressionsComponent;
