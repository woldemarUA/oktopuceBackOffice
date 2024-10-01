import React, { useState, useEffect } from 'react';

import { H6 } from '@adminjs/design-system'; //Box, Label,

import { Label, CheckboxGrid, Box } from '../styled-componens/CheckBoxGrid.mjs';
import ToggleSwitch from '../styled-componens/ToggleSwitch';

const CustomCheckBox = (props) => {
  const { onChange, record, property } = props;
  const checkBoxes = property.availableValues;
  const [parentValue, setParentValue] = useState(
    record.params[property.props.parent]
  );
  const initialState = checkBoxes.reduce((acc, check) => {
    acc[check.value] = false;
    return acc;
  }, {});

  const [isVisible, setIsVisible] = useState(
    property.props.isVisible.includes(record.params[property.props.parent])
  );

  const [checked, setChecked] = useState(initialState);

  const handleChange = (field) => {
    setChecked((prevState) => ({
      ...prevState,
      [field]: !checked[field],
    }));
  };

  useEffect(() => {
    const newVisibility = property.props.isVisible.includes(
      record.params[property.props.parent]
    );
    setIsVisible(newVisibility);
  }, [record.params[property.props.parent]]); // record.params[property.props.parent]  JSON.stringify(record.params[property.props.parent])

  useEffect(() => {
    Object.keys(checked).forEach((key) => onChange(key, checked[key]));
  }, [checked]);

  useEffect(() => {
    if (!isVisible) setChecked(initialState);
  }, [isVisible]);

  return (
    <>
      {isVisible && (
        <>
          <H6>{property.props.label}</H6>
          <CheckboxGrid>
            {checkBoxes.map((box, i) => (
              <Box key={i}>
                <Label htmlFor={i}>
                  {box.label}
                  <ToggleSwitch
                    id={i}
                    onChange={(e) => handleChange(box.value, e.target.checked)}
                    checked={checked[box.value]}
                    name={box.value}
                  />
                </Label>
              </Box>
            ))}
          </CheckboxGrid>
        </>
      )}
    </>
  );
};
export default CustomCheckBox;
