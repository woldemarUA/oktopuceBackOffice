import React, { useState, useEffect } from 'react';
import { Box, Label } from '../styled-componens/CheckBoxGrid.mjs';

import ToggleSwitch from '../styled-componens/ToggleSwitch';

const EtancheiteComponent = ({ parent, fetchAux, questionsValuesHandler }) => {
  const [auxQuestions, setAuxQuestions] = useState(null);
  const [etancheReseauxValue, setEtancheReseauxValue] = useState(false);

  const etancheReseaux = auxQuestions && auxQuestions[0];

  useEffect(() => {
    if (auxQuestions) {
      questionsValuesHandler({
        id: etancheReseaux.id,
        response: etancheReseauxValue,
        parent_id: 'etancheite',
      });
    }
  }, [etancheReseauxValue, auxQuestions]);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const data = await fetchAux(parent);
        const parentData = await fetch(
          `/api/resources/intervention_question_types/records/${parent}/show`
        );

        setAuxQuestions(data.questions);
        console.log(auxQuestions);
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
              htmlFor={etancheReseaux.id}
              my={1}>
              <span>{etancheReseaux.name}</span>
              <ToggleSwitch
                id={etancheReseaux.id}
                name={etancheReseaux.id}
                checked={etancheReseauxValue}
                onChange={() => setEtancheReseauxValue(!etancheReseauxValue)}
              />
            </Label>
          </Box>
        </>
      )}
    </Box>
  );
};

export default EtancheiteComponent;
