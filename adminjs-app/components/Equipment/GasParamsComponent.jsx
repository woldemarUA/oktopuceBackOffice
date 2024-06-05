import React, { useState, useEffect } from 'react';
import {
  CheckboxGrid,
  Label as StyledLabel,
  Box,
} from '../styled-componens/CheckBoxGrid.mjs';
import { Input, Label } from '@adminjs/design-system';
import SingleSelect from './SingleSelect';

import ToggleSwitch from '../styled-componens/ToggleSwitch';

import controleEtancheite from '../../utilities/controleEtancheite.mjs';

const GasParamsComponent = ({ property, record, onChange }) => {
  console.log(property.props);
  const [isVisible, setIsVisible] = useState(false);
  const [periodicite, setPeriodicite] = useState(controleEtancheite());
  const [poidsGaz, setPoidGaz] = useState(0);
  const [has_leak_detection, set_has_leak_detection] = useState(false);

  useEffect(() => {
    const newVisibility = property.props.isVisible.includes(
      record.params[property.props.parent]
    );
    setIsVisible(newVisibility);
  }, [record.params[property.props.parent]]);

  const gasTypeProperty = {
    ...property,
    label: 'gas_type_id',
    name: 'gas_type_id',
    path: 'gas_type_id',
    propertyPath: 'gas_type_id',
    props: {
      ...property.props,
      label: 'Type de gaz',
      isVisible: true,
    },
  };

  const handleInputValue = (gas_weight) => {
    console.log(gas_weight);
    setPoidGaz(parseFloat(gas_weight));
    onChange('gas_weight', parseFloat(gas_weight));
  };

  const handleLeakDetection = () => {
    set_has_leak_detection(!has_leak_detection);
  };

  useEffect(() => {
    const potentiel = property.props.potentiel[record.params.gas_type_id];
    setPeriodicite(controleEtancheite(poidsGaz, potentiel, has_leak_detection));
    onChange('has_leak_detection', has_leak_detection);
    onChange('leak_detection_periodicity', periodicite);
  }, [record.params.gas_type_id, poidsGaz, has_leak_detection]);

  console.log(isVisible);

  return (
    <>
      {isVisible && (
        <Box>
          <StyledLabel>{property.props.label}</StyledLabel>
          <CheckboxGrid>
            <Box>
              <SingleSelect
                property={gasTypeProperty}
                record={record}
                onChange={onChange}
              />
            </Box>
            <Box>
              <Label htmlFor='gas_weight'>Poids de gaz</Label>
              <Input
                id='gas_weight'
                name='gas_weight'
                type='number'
                step='0.01'
                onChange={(e) => handleInputValue(e.target.value)}
              />
            </Box>
            <Box>
              <ToggleSwitch
                id='has_leak_detection'
                onChange={() => handleLeakDetection()}
                checked={has_leak_detection}
                label='Détecteur de fuite'
                name='has_leak_detection'
              />
            </Box>
            <Box>
              <span>{periodicite}</span>
            </Box>
          </CheckboxGrid>
        </Box>
      )}
    </>
  );
};

export default GasParamsComponent;
