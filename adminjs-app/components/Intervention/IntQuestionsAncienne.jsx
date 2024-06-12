import React, { useState, useEffect } from 'react';

import { Label, CheckboxGrid } from '../styled-componens/CheckBoxGrid.mjs';
import ToggleSwitch from '../styled-componens/ToggleSwitch';

import AdditionalQuestionsComponent from './AdditionalQuestionsComponent';

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

const fetchAdditionalQuestions = async (parentId) => {
  try {
    const response = await fetch(
      `/api/resources/interventions_dep_questions/actions/getDepQuestions?parent_q_id=${parentId}`
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

const InterventionsQuestionsComponent = ({
  onChange,
  record,
  property,
  resource,
}) => {
  const [questions, setQuestions] = useState([]);

  const [parentId, setParentId] = useState(null);
  const [parentIndex, setParentIndex] = useState(null);

  const [additionalQuestions, setAdditionalQuestions] = useState([]);

  const handleQuestionsValues = (index, parentId) => {
    setParentId(parentId);

    setParentIndex(index);
    setQuestions((previousQuestions) =>
      previousQuestions.map((question, i) =>
        i === index ? { ...question, value: !question.value } : question
      )
    );
  };

  // console.log(record.params);

  useEffect(() => {
    const equipmentRange = [1, 2, 3, 4, 5, 6];
    const equipment = record.params.equipment_type_id;
    const intervention = record.params.intervention_type_id;
    if (intervention === 1 && equipmentRange.includes(equipment))
      console.log(intervention, equipment);
  }, [record.params.equipment_type_id, record.params.intervention_type_id]);

  // useEffect(() => {
  //   if (questions[parentIndex]?.value) {
  //     fetch(
  //       `/api/resources/interventions_dep_questions/actions/getDepQuestions?parent_q_id=${parentId}`
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.questions.length > 0)
  //           setAdditionalQuestions((prevState) => [
  //             ...prevState,
  //             { ...data.questions, parentIndex },
  //           ]);
  //       });
  //   }
  // }, [parentId, parentIndex, questions]);

  useEffect(() => {
    const fetchQuestions = async () => {
      if (questions[parentIndex]?.value) {
        const data = await fetchAdditionalQuestions(parentId);
        if (data && data.questions.length > 0) {
          setAdditionalQuestions((prevState) => [
            ...prevState,
            { ...data.questions, parentIndex },
          ]);
        }
      }
    };
    fetchQuestions();
  }, [parentId, parentIndex, questions]);

  useEffect(() => {
    const updatedAdditionalQuestions = additionalQuestions.filter(
      (q) => questions[q.parentIndex].value
    );

    setAdditionalQuestions(updatedAdditionalQuestions);
    // }
  }, [questions]); //, additionalQuestions

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

  const handleAdditionalQuestions = (i) => {
    const resp = additionalQuestions.filter(
      (question) => question.parentIndex === i
    );

    return resp;
  };

  return (
    <CheckboxGrid>
      {questions.length > 0 ? (
        <>
          {questions.map((question, i) => {
            return (
              <div key={question.id}>
                <Label
                  key={question.id}
                  htmlFor={question.id}>
                  {question.name}
                  <ToggleSwitch
                    id={question.id}
                    checked={questions[i].value}
                    name={question.id}
                    onChange={() => handleQuestionsValues(i, question.id)}
                  />
                </Label>
                {handleAdditionalQuestions(i).length > 0 && (
                  <AdditionalQuestionsComponent
                    key={i}
                    questions={handleAdditionalQuestions(i)}
                    property={property}
                    record={record}
                  />
                )}
              </div>
            );
          })}
        </>
      ) : (
        <div>Choissisez Type d'intervention et equipment</div>
      )}
    </CheckboxGrid>
  );
};

export default InterventionsQuestionsComponent;
