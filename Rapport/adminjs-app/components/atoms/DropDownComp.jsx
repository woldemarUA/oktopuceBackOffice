import React from 'react';

import {
  DropdownContainer,
  DropdownLink,
} from '../styled-componens/DropDownMenu.mjs';

const DropDownComp = ({ options }) => {
  return (
    <DropdownContainer>
      <ul>
        {options &&
          options.map((option) => (
            <li key={option.value}>
              <DropdownLink
                href={`/resources/${option.link}/records/${option.value}/show`}>
                {option.name}
              </DropdownLink>
            </li>
          ))}
      </ul>
    </DropdownContainer>
  );
};

export default DropDownComp;
