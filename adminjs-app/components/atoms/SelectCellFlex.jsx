import React, { useState, useEffect } from 'react';
import {
  CellFlex,
  Select,
  ColoredSpan,
  Label,
} from '../styled-componens/Atoms.mjs';

const SelectCellFlex = ({ id, label, options, isRequired, onChange }) => {
  const [error, setError] = useState(null);
  const [optionValue, setOptionValue] = useState(null);

  useEffect(() => {
    isRequired && !optionValue && setError(`Ce champ est requis`);
  }, [optionValue]);
  return (
    <CellFlex>
      <Label
        htmlFor={id}
        mb={1}>
        {isRequired && (
          <ColoredSpan
            mr={1}
            fontColor='danger'>
            *
          </ColoredSpan>
        )}
        <ColoredSpan> {label}</ColoredSpan>
      </Label>
      <Select
        id={id}
        onChange={(e) => {
          setOptionValue(e.target.value);
          onChange(e.target.value);
        }}>
        <option value=''>Choissisez</option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}>
            {option.name}
          </option>
        ))}
      </Select>
      {error && <ColoredSpan fontColor='danger'>{error}</ColoredSpan>}
    </CellFlex>
  );
};

export default SelectCellFlex;
