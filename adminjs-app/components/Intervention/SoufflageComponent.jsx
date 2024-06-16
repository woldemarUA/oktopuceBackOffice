import React, { useState, useEffect } from 'react';
import { Box, Label } from '../styled-componens/CheckBoxGrid.mjs';
import { Select } from '@adminjs/design-system';

import { temperatureOptions } from '../../utilities/controleEtancheite.mjs';

const SoufflageComponent = ({
  parent,
  fetchAux,
  optionsMapper,
  questionsValuesHandler,
}) => {
  const [auxQuestions, setAuxQuestions] = useState(null);
  const [modeOption, setModeOption] = useState('');
  const [releveValue, setReleveValue] = useState('');
  const [repriseValue, setRepriseValue] = useState('');
  const [soufDeltaValue, setSoufDeltaValue] = useState(null);

  const mode = auxQuestions && auxQuestions[0];
  const tempReleve = auxQuestions && auxQuestions[1];
  const tempReprise = auxQuestions && auxQuestions[2];
  const soufflageDelta = auxQuestions && auxQuestions[3];

  const hanldeMode = (selectedOption) => {
    setModeOption(selectedOption.value);
  };

  const handleReleve = (selectedOption) => {
    setReleveValue(selectedOption.value);
  };
  const handleReprise = (selectedOption) => {
    setRepriseValue(selectedOption.value);
  };

  useEffect(() => {
    if (auxQuestions) {
      questionsValuesHandler({ id: mode.id, response: modeOption });
      questionsValuesHandler({
        id: tempReleve.id,
        response: releveValue,
      });
      questionsValuesHandler({
        id: tempReprise.id,
        response: repriseValue,
      });
      questionsValuesHandler({
        id: soufflageDelta.id,
        response: soufDeltaValue,
      });
    }
  }, [
    modeOption,
    releveValue,
    repriseValue,
    soufflageDelta,
    soufDeltaValue,
    auxQuestions,
  ]);
  useEffect(() => {
    if (
      releveValue !== null &&
      releveValue !== undefined &&
      repriseValue !== null &&
      repriseValue !== undefined
    ) {
      setSoufDeltaValue(releveValue - repriseValue);
    } else {
      setSoufDeltaValue(null);
    }
  }, [releveValue, repriseValue]);

  // useEffect(() => {

  //   setSoufDeltaValue(
  //     releveValue && repriseValue ? releveValue - repriseValue : null
  //   );
  // }, [releveValue, repriseValue]);
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
              htmlFor={tempReleve.id}
              mb={1}>
              {tempReleve.name}
            </Label>
            <Select
              options={temperatureOptions(-5, 61)}
              onChange={(selectedOption) => handleReleve(selectedOption)}
              name={tempReleve.name}
              value={releveValue.value}
            />
          </Box>
          <Box mb={2}>
            <Label
              htmlFor={tempReprise.id}
              mb={1}>
              {tempReprise.name}
            </Label>
            <Select
              options={temperatureOptions(-5, 41)}
              onChange={(selectedOption) => handleReprise(selectedOption)}
              name={tempReprise.name}
              value={repriseValue.value}
            />
          </Box>
          <Box mb={2}>
            <Label
              htmlFor={soufflageDelta.id}
              mb={1}>
              {soufflageDelta.name}
            </Label>
            <span>
              {soufDeltaValue ? soufDeltaValue : 'Entrez releve ou reprise'}
            </span>
          </Box>
        </>
      )}
    </Box>
  );
};

export default SoufflageComponent;
