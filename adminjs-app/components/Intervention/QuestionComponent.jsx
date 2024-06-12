import React, { useState, useEffect } from 'react';

import { Label, CheckboxGrid, Box } from '../styled-componens/CheckBoxGrid.mjs';
import ToggleSwitch from '../styled-componens/ToggleSwitch';

import SoufflageComponent from './SoufflageComponent';

export const fetchAdditionalQuestions = async (parentId, childId = null) => {
  try {
    const url = `/api/resources/interventions_dep_questions/actions/getDepQuestions?parent_q_id=${parentId}${
      childId !== null ? `&child_q_id=${childId}` : ''
    }`;
    const response = await fetch(
      //   `/api/resources/interventions_dep_questions/actions/getDepQuestions?parent_q_id=${parentId}${
      //     childId && `&child_q_id=${childId}`
      //   }`
      url
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch options:', error);
    return null;
  }
};

const QuestionComponent = ({ question, record }) => {
  const [auxQuestions, setAuxQuestions] = useState([]);
  const [response, setResponse] = useState(false);
  const [auxComp, setAuxComp] = useState(null);

  const auxMapping = new Map([
    [6, <SoufflageComponent />],
    [7, <SoufflageComponent />],
  ]);
  //   aux deps - intervention_type_id

  useEffect(() => {
    async function fetchAux() {
      try {
        const response = await fetchAdditionalQuestions(question.id);
        setAuxQuestions(response);
      } catch (error) {
        console.error('Failed to fetch options:', error);
        return null;
      }
    }
    fetchAux();
  }, [question]);

  //   console.log(record.params);
  console.log(question);
  return (
    <Box>
      <Label htmlFor={question.id}>
        {question.name}
        <ToggleSwitch
          id={question.id}
          name={question.id}
          checked={response}
          onChange={() => setResponse(!response)}
        />
      </Label>
      {auxComp}
    </Box>
  );
};

export default QuestionComponent;
