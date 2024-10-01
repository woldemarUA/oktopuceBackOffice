import React from 'react';
// import { Label } from '@adminjs/design-system';

import { ToggleLabel, ToggleInput, ToggleIndicator } from './Switch.mjs';

export default function ToggleSwitch({ id, checked, onChange, name }) {
  return (
    <ToggleLabel htmlFor={id}>
      <ToggleInput
        id={id}
        checked={checked}
        onChange={onChange}
        name={name}
      />
      <ToggleIndicator checked={checked} />
    </ToggleLabel>
  );
}
