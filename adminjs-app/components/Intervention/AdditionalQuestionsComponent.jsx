import React from 'react';
import { Label } from '../styled-componens/CheckBoxGrid.mjs';
import { Select } from '@adminjs/design-system';
import ToggleSwitch from '../styled-componens/ToggleSwitch';

const convertOptions = (str) => {
  return str.split(',').map((option) => ({ value: option, label: option }));
};

const convertQuestions = (arr) => {
  const obj = { ...arr[0] };
  delete obj.parentIndex;
  return Object.values(obj);
};

const AdditionalQuestionsComponent = ({ questions }) => {
  const questionItems = convertQuestions(questions);
  // console.log(questionItems);
  return (
    <>
      {questionItems.map((question, i) =>
        question.options ? (
          <div key={i}>
            <Label htmlFor={i}>Mode</Label>
            <Select
              key={i}
              id={i}
              options={convertOptions(question.options)}
            />
          </div>
        ) : (
          <Label
            key={i}
            htmlFor={question.id}>
            {question.name}
            <ToggleSwitch id={question.id} />
          </Label>
        )
      )}
    </>
  );
};

export default AdditionalQuestionsComponent;
