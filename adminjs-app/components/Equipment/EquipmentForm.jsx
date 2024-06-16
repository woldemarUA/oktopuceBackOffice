import React, { useState, useEffect } from 'react';

import {
  Section,
  Heading,
  Row,
  Cell,
  Select,
  Input,
  TextField,
} from '../styled-componens/Atoms.mjs';
import { Label } from '../styled-componens/CheckBoxGrid.mjs';

//  import models

// [
//   rowConfig,
//   [
//     ['site_id', cellConfig],
//     ['nfc_tag_id', cellConfig],
//     ['parent_equipment_id', cellConfig],
//     ['installation_date', cellConfig],
//   ],
// ],

const EquipmentForm = ({ resource }) => {
  console.log(props);
  // console.log(props.resource.properties.produit_id.availableValues);

  return (
    <Section>
      <Heading>Parametrage</Heading>
    </Section>
  );
};

export default EquipmentForm;
