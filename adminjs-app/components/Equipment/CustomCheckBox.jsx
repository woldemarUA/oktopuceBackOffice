import React, { useState, useEffect } from 'react';

import { Box, Label, CheckBox, H6 } from '@adminjs/design-system';

const CustomCheckBox = (props) => {
  const { onChange, record, property, resource } = props;
  const checkBoxes = property.availableValues;
  const [isVisible, setIsVisible] = useState(false);
  const [checked, setChecked] = useState(
    checkBoxes.reduce((acc, check) => {
      acc[check.value] = false;
      return acc;
    }, {})
  );

  const handleChange = (field) => {
    setChecked((prevState) => ({
      ...prevState,
      [field]: !checked[field],
    }));
  };

  useEffect(() => {
    if (record.params[property.props.parent]) {
      setIsVisible(
        property.props.isVisible.includes(record.params[property.props.parent])
      );
    }
  }, [record.params[property.props.parent]]);

  useEffect(() => {
    Object.keys(checked).forEach((key) => onChange(key, checked[key]));
  }, [checked]);

  return (
    <>
      {isVisible && (
        <>
          <H6>{property.props.label}</H6>
          {checkBoxes.map((box, i) => (
            <Box key={i}>
              <Label>
                {box.label}
                <CheckBox
                  key={i}
                  onChange={(e) => handleChange(box.value, e.target.checked)}
                  checked={checked[box.value]}
                />
              </Label>
            </Box>
          ))}
        </>
      )}
    </>
  );
};
export default CustomCheckBox;

{
  /* <label
htmlFor={`${id}`}
className='relative inline-block w-14 h-8 bg-gray-200 rounded-full cursor-pointer'>
<Field
  id={`${id}`}
  type='checkbox'
  className='sr-only'
  checked={checked}
  onChange={onChange}
  name={name}
/>
<span
  className={`absolute left-1 top-1  w-6 h-6 rounded-full transition-transform ${
    checked
      ? 'bg-teal-600 translate-x-6'
      : 'bg-red-600 translate-x-0'
  }`}
/>
</label> */
}
