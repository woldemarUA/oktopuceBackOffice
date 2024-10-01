import React, { useState, useEffect } from 'react';

import {
  Section,
  Heading,
  Row,
  Cell,
  Paragraph,
  AHref,
  ColoredSpan,
} from '../styled-componens/Atoms.mjs';

import FrenchDate from './FrenchDate';

import { getAllProperties } from './EquipmentShowComponent';

const InterventionShowComponent = ({ record }) => {
  const allEntries = getAllProperties(record);

  console.log(allEntries);
  return <div>InterventionShowComponent</div>;
};

export default InterventionShowComponent;
