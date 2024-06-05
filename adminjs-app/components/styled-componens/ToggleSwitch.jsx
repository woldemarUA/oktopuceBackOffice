import React from 'react';
// import { Label } from '@adminjs/design-system';

import { Label } from './CheckBoxGrid.mjs';
import { ToggleLabel, ToggleInput, ToggleIndicator } from './Switch.mjs';

export default function ToggleSwitch({ id, checked, onChange, name, label }) {
  return (
    <Label htmlFor={id}>
      <span>{label}</span>
      <ToggleLabel htmlFor={id}>
        <ToggleInput
          id={id}
          checked={checked}
          onChange={onChange}
          name={name}
        />
        <ToggleIndicator checked={checked} />
      </ToggleLabel>
    </Label>
  );
}
