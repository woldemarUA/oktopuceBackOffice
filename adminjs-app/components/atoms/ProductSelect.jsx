import React, { useState, useEffect } from 'react';

import { Box, Label } from '../styled-componens/CheckBoxGrid.mjs';

import { Select } from '@adminjs/design-system';

import { fetchOptions } from '../actions/fetchOptions.mjs';

const PRODUCT_FIELD_NAME = 'produit_id';
const PRODUCT_TABLE_NAME = 'equipment_produit';

const ENDROIT_FIELD_NAME = 'endroit_id';
const ENDROIT_TABLE_NAME = 'equipment_endroit';

const EQUIPMENT_TYPE_FIELD_NAME = 'equipment_type_id';
const EQUIPMENT_TYPE_TABLE_NAME = 'equipment_types';

const ProductSelect = ({ record, onChange }) => {
  const [productOptions, setProductOptions] = useState([
    { value: '', label: 'Choissisez produit' },
  ]);
  const [product_id, setProductID] = useState(null);
  const [productSelected, setProductSelected] = useState([
    { value: '', label: 'Choissisez produit' },
  ]);

  const [endroitOptions, setEndroitOptions] = useState([
    { value: '', label: 'Choissisez produit' },
  ]);
  const [endroit_id, setEndroitID] = useState(null);
  const [endroitSelected, setEndroitSelected] = useState([
    { value: '', label: 'Choissisez produit' },
  ]);

  const [equipmentTypeOptions, setEquipmentTypeOptions] = useState([
    { value: '', label: 'Choissisez endroit' },
  ]);
  const [equipment_type_id, setEquipmentTypeId] = useState(null);
  const [equipmentSelected, setEquipmentSelected] = useState([
    { value: '', label: 'Choissisez endroit' },
  ]);

  // initial setup

  useEffect(() => {
    async function fetchProductOptions() {
      const res = await fetchOptions(PRODUCT_TABLE_NAME);
      setProductOptions(res);
    }

    fetchProductOptions();
  }, [record.params.PRODUCT_FIELD_NAME]);

  useEffect(() => {
    setEndroitSelected([{ value: '', label: 'Choissisez produit' }]);
    setEndroitID(null);
    async function fetchEndroitOptions() {
      if (!product_id) return;
      const res = await fetchOptions(
        ENDROIT_TABLE_NAME,
        PRODUCT_FIELD_NAME,
        product_id
      );
      setEndroitOptions(res);
    }

    fetchEndroitOptions();
  }, [product_id, record.params.PRODUCT_FIELD_NAME]);

  useEffect(() => {
    setEquipmentSelected([{ value: '', label: 'Choissisez endroit' }]);
    setEquipmentTypeId(null);
    async function fetchEquipmentOptions() {
      if (!product_id || !endroit_id) return;
      const res = await fetchOptions(
        EQUIPMENT_TYPE_TABLE_NAME,
        ENDROIT_FIELD_NAME,
        endroit_id
      );

      setEquipmentTypeOptions(res);
    }

    fetchEquipmentOptions();
  }, [
    product_id,
    endroit_id,
    record.params.ENDROIT_FIELD_NAME,
    record.params.PRODUCT_FIELD_NAME,
  ]);

  // handlers
  const handleProductSelect = (selectedOption) => {
    setProductSelected(selectedOption);
    setProductID(selectedOption.value);
  };
  const handleEndroitSelect = (selectedOption) => {
    setEndroitSelected(selectedOption);
    setEndroitID(selectedOption.value);
  };

  const handleEquipmentSelect = (selectedOption) => {
    setEquipmentSelected(selectedOption);
    setEquipmentTypeId(selectedOption.value);
  };

  // on change useEffect

  useEffect(() => {
    onChange(PRODUCT_FIELD_NAME, product_id);
    onChange(ENDROIT_FIELD_NAME, endroit_id);
    onChange(EQUIPMENT_TYPE_FIELD_NAME, equipment_type_id);
  }, [product_id, endroit_id, equipment_type_id]);

  console.log(record.params);

  // setOptions(formattedOptions);
  // // FOR EDIT ACTION Set initial value after options have loaded
  // if (record && record.params[property.name]) {
  //   const initialValue = formattedOptions.find(
  //     (opt) => opt.value === record.params[property.name]
  //   );
  //   console.log(initialValue);
  //   setSelectedOptionValue(initialValue);
  // }
  return (
    <Box direction='row'>
      <Box>
        <Label
          htmlFor={PRODUCT_FIELD_NAME}
          mb={1}>
          Sur quel produit est installé le puce?
        </Label>
        <Select
          id={PRODUCT_FIELD_NAME}
          options={productOptions}
          onChange={(selectedOption) => handleProductSelect(selectedOption)}
          name={PRODUCT_FIELD_NAME}
          value={productSelected}
        />
      </Box>
      <Box>
        <Label
          htmlFor={ENDROIT_FIELD_NAME}
          my={1}>
          A quel endroit?
        </Label>
        <Select
          id={ENDROIT_FIELD_NAME}
          options={endroitOptions}
          onChange={(selectedOption) => handleEndroitSelect(selectedOption)}
          name={ENDROIT_FIELD_NAME}
          value={endroitSelected}
        />
      </Box>
      <Box>
        <Label
          htmlFor={EQUIPMENT_TYPE_FIELD_NAME}
          my={1}>
          Type d'unité?
        </Label>
        <Select
          id={EQUIPMENT_TYPE_FIELD_NAME}
          options={equipmentTypeOptions}
          onChange={(selectedOption) => handleEquipmentSelect(selectedOption)}
          name={EQUIPMENT_TYPE_FIELD_NAME}
          value={equipmentSelected}
        />
      </Box>
    </Box>
  );
};

export default ProductSelect;
