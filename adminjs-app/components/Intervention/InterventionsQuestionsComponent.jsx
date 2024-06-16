import React, { useState, useEffect } from 'react';

import QuestionComponent from './QuestionComponent';

import { CheckboxGrid } from '../styled-componens/CheckBoxGrid.mjs';

const InterventionsQuestionsComponent = ({ onChange, record }) => {
  const [questions, setQuestions] = useState([]);

  const [questionValues, setQuestionValues] = useState([]);
  const [childQuestionIds, setChildQuestionIds] = useState([]);
  const [interventionType, setInterventionType] = useState(null);

  useEffect(() => {
    setInterventionType(record.params.intervention_type_id);
  }, [record.params.intervention_type_id]);

  //  Set questions into the JSON objet pour backend
  useEffect(() => {
    onChange('questions', JSON.stringify(questionValues));
  }, [questionValues]);

  // check for the duplicated values

  const questionsValuesHandler = (newQuestion) => {
    setQuestionValues((prevState) => {
      const newState = [...prevState];
      const existingIndex = prevState.findIndex((q) => q.id === newQuestion.id);
      if (existingIndex > -1) {
        // Replace the existing object with the new one
        newState[existingIndex] = newQuestion;
      } else {
        // Add the new question to the array
        newState.push(newQuestion);
      }
      // Check if the question is a parent and the response is false,
      // then remove all child questions responses
      if (newQuestion.response === false) {
        return newState.filter((q) => !childQuestionIds.includes(q.id));
      }

      return newState;
    });
  };

  // console.log(questionValues);
  // console.log(record.params.questions);
  useEffect(() => {
    setQuestionValues([]);
    fetch(
      `/api/resources/interventions_questions_equipment/actions/getInterventionQuestions?intervention_type_id=${record.params.intervention_type_id}&equipment_type_id=${record.params.equipment_type_id}`
    )
      .then((res) => res.json())
      .then((data) => {
        // const questions = questionsStateMapper(data.questions);
        setQuestions(data.questions);
      });
  }, [
    record.params.equipment_type_id,
    // record.params.intervention_type_id,
    interventionType,
    record.params.produit_id,
    record.params.endroit_id,
  ]);

  return (
    <CheckboxGrid>
      {questions.length > 0 ? (
        questions.map((question) => (
          <QuestionComponent
            key={question.id}
            question={question}
            record={record}
            questionsValuesHandler={questionsValuesHandler}
            childQuestionsHandler={setChildQuestionIds}
          />
        ))
      ) : (
        <div>Choissisez Type d'intervention et / ou equipment</div>
      )}
    </CheckboxGrid>
  );
};

export default InterventionsQuestionsComponent;
