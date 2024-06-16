import React, { useState, useEffect } from 'react';
import { Box, Label } from '../styled-componens/CheckBoxGrid.mjs';
import { Select } from '@adminjs/design-system';

// Température de départ d’eau ? (LISTE DE CHOIX) de -5° à +70° de 1 en 1 (Exemple : -5° ; -4° ; -3° ;
//   -2° ; -1° ; 0° ; 1° ; 2° ; 3…70°)
//   Température de retour d’eau ? (LISTE DE CHOIX) de -5° à +70° de 1 en 1 (Exemple : -5° ; -4° ; -3° ; -
//   2° ; -1° ; 0° ; 1° ; 2° ; 3…70°)

import { temperatureOptions } from '../../utilities/controleEtancheite.mjs';

const PompeEauComponent = ({
  parent,
  fetchAux,
  optionsMapper,
  questionsValuesHandler,
}) => {
  const [auxQuestions, setAuxQuestions] = useState(null);
  const [modeOption, setModeOption] = useState('');
  const [departEauValue, setDepartEauValue] = useState('');
  const [retourEauValue, setRetourEauValue] = useState('');

  const mode = auxQuestions && auxQuestions[1];
  const departEau = auxQuestions && auxQuestions[2];
  const retourEau = auxQuestions && auxQuestions[3];

  const hanldeMode = (selectedOption) => {
    setModeOption(selectedOption.value);
  };

  const handleDepart = (selectedOption) => {
    setDepartEauValue(selectedOption.value);
  };
  const handleRetour = (selectedOption) => {
    setRetourEauValue(selectedOption.value);
  };

  useEffect(() => {
    if (auxQuestions) {
      questionsValuesHandler({ id: mode.id, response: modeOption });
      questionsValuesHandler({
        id: departEau.id,
        response: departEauValue,
      });
      questionsValuesHandler({
        id: retourEau.id,
        response: retourEauValue,
      });
    }
  }, [modeOption, departEauValue, retourEauValue, auxQuestions]);

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
              htmlFor={departEau.id}
              mb={1}>
              {departEau.name}
            </Label>
            <Select
              options={temperatureOptions(-5, 71)}
              onChange={(selectedOption) => handleDepart(selectedOption)}
              name={departEau.name}
              value={departEauValue.value}
            />
          </Box>
          <Box mb={2}>
            <Label
              htmlFor={retourEau.id}
              mb={1}>
              {retourEau.name}
            </Label>
            <Select
              options={temperatureOptions(-5, 71)}
              onChange={(selectedOption) => handleRetour(selectedOption)}
              name={retourEau.name}
              value={retourEauValue.value}
            />
          </Box>
        </>
      )}
    </Box>
  );
};

export default PompeEauComponent;
