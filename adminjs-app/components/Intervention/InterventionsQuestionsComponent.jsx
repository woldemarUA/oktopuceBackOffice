import React, { useState, useEffect } from 'react';

import SingleSelect from '../Equipment/SingleSelect';
import { Label, CheckboxGrid, Box } from '../styled-componens/CheckBoxGrid.mjs';
import ToggleSwitch from '../styled-componens/ToggleSwitch';

export const questionsStateMapper = (questions) => {
  return questions.map((question) => {
    const obj = {
      name: question.name,
      id: question.id,
      value: question.type === 'checkbox' ? false : '',
      type: question.type,
    };

    return obj;
  });
};

const InterventionsQuestionsComponent = ({
  onChange,
  record,
  property,
  resource,
}) => {
  const [questions, setQuestions] = useState([]);

  const handleQuestionsValues = (index) => {
    setQuestions((previousQuestions) =>
      previousQuestions.map((question, i) =>
        i === index ? { ...question, value: !question.value } : question
      )
    );
  };

  useEffect(() => {
    onChange('questions', JSON.stringify(questions));
  }, [questions]);

  useEffect(() => {
    fetch(
      `/api/resources/interventions_questions_equipment/actions/getInterventionQuestions?intervention_type_id=${record.params.intervention_type_id}&equipment_type_id=${record.params.equipment_type_id}`
    )
      .then((res) => res.json())
      .then((data) => {
        const questions = questionsStateMapper(data.questions);
        setQuestions(questions);
      });
  }, [record.params.equipment_type_id, record.params.intervention_type_id]);

  console.log(record.params);
  // interventions_questions;

  const questionsMapper = (quests) => {
    return questions.map((question, i) => {
      if (question.type === 'select') {
        return <SingleSelect key={question.id} />;
      } else if (question.type === 'checkbox') {
        return (
          <Label
            key={question.id}
            htmlFor={question.id}>
            {question.name}

            <ToggleSwitch
              id={question.id}
              checked={questions[i].value}
              name={question.id}
              onChange={() => handleQuestionsValues(i)}
            />
          </Label>
        );
      }
      return null; // Handle unexpected types
    });
  };

  console.log(questions);

  return (
    <CheckboxGrid>
      {questions.length > 0 ? (
        <>{questionsMapper(questions)}</>
      ) : (
        <div>InterventionsQuestionsComponent</div>
      )}
    </CheckboxGrid>
  );
};

export default InterventionsQuestionsComponent;
