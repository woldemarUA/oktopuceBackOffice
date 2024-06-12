import React, { useState, useEffect } from 'react';

import QuestionComponent from './QuestionComponent';

import { CheckboxGrid } from '../styled-componens/CheckBoxGrid.mjs';

const InterventionsQuestionsComponent = ({
  onChange,
  record,
  property,
  resource,
}) => {
  const [questions, setQuestions] = useState([]);
  const [parentId, setParentId] = useState(null);
  const [parentIndex, setParentIndex] = useState(null);
  const handleQuestionsValues = (index, parentId) => {
    setParentId(parentId);

    setParentIndex(index);
    setQuestions((previousQuestions) =>
      previousQuestions.map((question, i) =>
        i === index ? { ...question, value: !question.value } : question
      )
    );
  };
  //  Set questions into the JSON objet pour backend
  useEffect(() => {
    onChange('questions', JSON.stringify(questions));
  }, [questions]);

  useEffect(() => {
    fetch(
      `/api/resources/interventions_questions_equipment/actions/getInterventionQuestions?intervention_type_id=${record.params.intervention_type_id}&equipment_type_id=${record.params.equipment_type_id}`
    )
      .then((res) => res.json())
      .then((data) => {
        // const questions = questionsStateMapper(data.questions);
        setQuestions(data.questions);
      });
  }, [record.params.equipment_type_id, record.params.intervention_type_id]);

  // console.log(questions);

  return (
    <CheckboxGrid>
      {questions.length > 0 ? (
        questions.map((question, i) => (
          <QuestionComponent
            key={i}
            question={question}
            record={record}
          />
        ))
      ) : (
        <div>Choissisez Type d'intervention et / ou equipment</div>
      )}
    </CheckboxGrid>
  );
};

export default InterventionsQuestionsComponent;
