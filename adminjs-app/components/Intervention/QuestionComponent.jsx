import React, { useState, useEffect } from 'react';

import { Label, Box } from '../styled-componens/CheckBoxGrid.mjs';
import ToggleSwitch from '../styled-componens/ToggleSwitch';

import SoufflageComponent from './SoufflageComponent';
import PressionsComponent from './PressionsComponent';
import PompeEauComponent from './PompeEauComponent';
import EtancheiteComponent from './EtancheiteComponent';
import SecuriteComponent from './SecuriteComponent';
import ResistanceComponent from './ResistanceComponent';

export const fetchAdditionalQuestions = async (parentId, childId = null) => {
  try {
    const url = `/api/resources/interventions_dep_questions/actions/getDepQuestions?parent_q_id=${parentId}${
      childId !== null ? `&child_q_id=${childId}` : ''
    }`;
    const response = await fetch(url);

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

export const optionsMapper = (str) => {
  return str.split(',').map((option) => ({ value: option, label: option }));
};

const QuestionComponent = ({
  question,
  record,
  questionsValuesHandler,
  childQuestionsHandler,
}) => {
  const [parentIds, setParentIds] = useState([]);

  // api/resources/interventions_dep_questions/actions/getParentAll

  const [auxQuestions, setAuxQuestions] = useState([]);
  const [response, setResponse] = useState(false);
  const [auxComp, setAuxComp] = useState(null);

  const auxMapping = new Map([
    [
      6, // added
      <SoufflageComponent
        parent={7}
        fetchAux={fetchAdditionalQuestions}
        optionsMapper={optionsMapper}
        questionsValuesHandler={questionsValuesHandler}
      />,
    ],
    [
      7, // added
      <SoufflageComponent
        parent={question.id}
        fetchAux={fetchAdditionalQuestions}
        optionsMapper={optionsMapper}
        questionsValuesHandler={questionsValuesHandler}
      />,
    ],
    [
      51, // added
      <PressionsComponent
        parent={question.id}
        fetchAux={fetchAdditionalQuestions}
        optionsMapper={optionsMapper}
        questionsValuesHandler={questionsValuesHandler}
      />,
    ],
    [
      28, // added
      <PompeEauComponent
        parent={question.id}
        fetchAux={fetchAdditionalQuestions}
        optionsMapper={optionsMapper}
        questionsValuesHandler={questionsValuesHandler}
      />,
    ],
    [
      69, // added
      <PompeEauComponent
        parent={question.id}
        fetchAux={fetchAdditionalQuestions}
        optionsMapper={optionsMapper}
        questionsValuesHandler={questionsValuesHandler}
      />,
    ],
    [
      57, // added
      <SecuriteComponent
        parent={question.id}
        fetchAux={fetchAdditionalQuestions}
        optionsMapper={optionsMapper}
        questionsValuesHandler={questionsValuesHandler}
      />,
    ],
    [
      58,
      <ResistanceComponent // added
        parent={question.id}
        fetchAux={fetchAdditionalQuestions}
        questionsValuesHandler={questionsValuesHandler}
      />,
    ],
    [
      5,
      <EtancheiteComponent
        parent={5}
        child={17}
        fetchAux={fetchAdditionalQuestions}
        questionsValuesHandler={questionsValuesHandler}
      />,
    ],
  ]);
  //   aux deps - intervention_type_id

  const handleChange = () => {
    setAuxComp(null);
    setResponse(!response);
  };

  useEffect(() => {
    questionsValuesHandler({ id: question.id, response: response });
  }, [question, response]);

  useEffect(() => {
    async function setChildIds() {
      if (!response && parentIds.includes(question.id)) {
        const childIds = await fetchAdditionalQuestions(question.id);

        childQuestionsHandler(
          childIds.questions.map((question) => question.id)
        );
      }
    }

    setChildIds();
  }, [response, question]);

  useEffect(() => {
    if (response && parentIds.includes(question.id)) {
      if (
        record.params.intervention_type_id === 1 &&
        record.params.equipment_type_id === 28 &&
        question.id !== 5
      ) {
        // handle pompe mis en service int
        return setAuxComp(auxMapping.get(record.params.equipment_type_id));
      }
      setAuxComp(auxMapping.get(question.id));
    }
  }, [response, record.params.intervention_type_id, record.params.produit_id]);

  useEffect(() => {
    async function fetchAux() {
      try {
        const response = await fetchAdditionalQuestions(question.id);
        const parentArray = await fetch(
          `/api/resources/interventions_dep_questions/actions/getParentAll`
        );
        const data = await parentArray.json();
        setParentIds(data.questions);
        setAuxQuestions(response);
      } catch (error) {
        console.error('Failed to fetch options:', error);
        return null;
      }
    }
    fetchAux();
  }, [question]);

  // console.log(record.params);

  return (
    <Box>
      <Label htmlFor={question.id}>
        {question.name}
        <ToggleSwitch
          id={question.id}
          name={question.id}
          checked={response}
          onChange={handleChange}
        />
      </Label>
      {auxComp}
    </Box>
  );
};

export default QuestionComponent;
