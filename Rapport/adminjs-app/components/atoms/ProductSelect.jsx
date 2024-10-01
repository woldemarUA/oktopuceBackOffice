import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FormGroup, FormMessage } from '@adminjs/design-system';
import { Row, Label, Box, AHref, Button } from '../styled-componens/Atoms.mjs';

import { Select } from '@adminjs/design-system';
import { getRecordById } from '../actions/apiCalls.mjs';

import { fetchOptions } from '../actions/fetchOptions.mjs';

export const isNotEmpty = (obj) => {
  return Object.keys(obj).length > 0;
};

const ProductSelect = ({ record, onChange, property }) => {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  // console.log(record.params);
  const PRODUCT_FIELD_NAME = property.props.product.field;
  const PRODUCT_TABLE_NAME = property.props.product.table;

  const ENDROIT_FIELD_NAME = property.props.endroit.field;
  const ENDROIT_TABLE_NAME = property.props.endroit.table;

  const EQUIPMENT_TYPE_FIELD_NAME = property.props.equipment.field;
  const EQUIPMENT_TYPE_TABLE_NAME = property.props.equipment.table;
  const [error, setError] = useState(null);
  const [productOptions, setProductOptions] = useState([
    { value: '', label: `Choissisez ${property.props.product.label}` },
  ]);
  const [product_id, setProductID] = useState(null);
  const [productSelected, setProductSelected] = useState([
    { value: '', label: `Choissisez ${property.props.product.label}` },
  ]);

  const [endroitOptions, setEndroitOptions] = useState([
    { value: '', label: `Choissisez ${property.props.product.label}` },
  ]);
  const [endroit_id, setEndroitID] = useState(null);
  const [endroitSelected, setEndroitSelected] = useState([
    { value: '', label: `Choissisez ${property.props.product.label}` },
  ]);

  const [equipmentTypeOptions, setEquipmentTypeOptions] = useState([
    { value: '', label: `Choissisez ${property.props.endroit.label}` },
  ]);
  const [equipment_type_id, setEquipmentTypeId] = useState(null);
  const [equipmentSelected, setEquipmentSelected] = useState([
    { value: '', label: `Choissisez ${property.props.endroit.label}` },
  ]);

  const [isInterventions, setIsInterventions] = useState(
    property.resourceId === 'interventions'
  );

  useEffect(() => {
    async function getInitialState() {
      if (
        // isNotEmpty(record.params)
        record.params[PRODUCT_FIELD_NAME] &&
        record.params[ENDROIT_FIELD_NAME] &&
        record.params[EQUIPMENT_TYPE_FIELD_NAME]
      ) {
        const product = await getRecordById(
          PRODUCT_TABLE_NAME,
          record.params[PRODUCT_FIELD_NAME]
        );

        const endroit = await getRecordById(
          ENDROIT_TABLE_NAME,
          record.params[ENDROIT_FIELD_NAME]
        );

        const equipment = await getRecordById(
          EQUIPMENT_TYPE_TABLE_NAME,
          record.params[EQUIPMENT_TYPE_FIELD_NAME]
        );

        setProductID(product.params.id);
        setProductSelected({
          value: product.params.id,
          label: product.params.name || product.params.last_name,
        });

        setEndroitID(endroit.params.id);
        setEndroitSelected({
          value: endroit.params.id,
          label: endroit.params.name,
        });

        setEquipmentTypeId(equipment.params.id);
        setEquipmentSelected({
          value: equipment.params.id,
          label: equipment.params.name || equipment.params.serial_number,
        });
      }
    }

    getInitialState();
  }, [record.params]);

  useEffect(() => {
    async function fetchProductOptions() {
      const res = await fetchOptions(PRODUCT_TABLE_NAME);
      setProductOptions(res);
    }

    fetchProductOptions();
  }, [record.params.PRODUCT_FIELD_NAME]);

  useEffect(() => {
    if (endroit_id !== null) return;
    setEndroitSelected([
      { value: '', label: `Choissisez ${property.props.product.label}` },
    ]);
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
    if (equipment_type_id !== null) return;
    setEquipmentSelected([
      { value: '', label: `Choissisez ${property.props.endroit.label}` },
    ]);
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
    setProductID(selectedOption?.value || null);
  };
  const handleEndroitSelect = (selectedOption) => {
    setEndroitSelected(selectedOption);
    setEndroitID(selectedOption?.value || null);
  };

  const handleEquipmentSelect = async (selectedOption) => {
    setEquipmentSelected(selectedOption);
    setEquipmentTypeId(selectedOption?.value || null);
    if (EQUIPMENT_TYPE_TABLE_NAME === 'equipments' && selectedOption?.value) {
      const { params } = await getRecordById(
        EQUIPMENT_TYPE_TABLE_NAME,
        selectedOption.value
      );

      onChange('endroit_id', params.endroit_id);
      onChange('equipment_type_id', params.equipment_type_id);
      onChange('produit_id', params.produit_id);
    }
  };

  // on change useEffect

  useEffect(() => {
    onChange(PRODUCT_FIELD_NAME, product_id);
    onChange(ENDROIT_FIELD_NAME, endroit_id);
    onChange(EQUIPMENT_TYPE_FIELD_NAME, equipment_type_id);
  }, [product_id, endroit_id, equipment_type_id]);

  // endroit_id: '',
  // equipment_type_id: '',
  // produit_id: '',
  const link = (tableName, label, fieldName) => {
    const handleOnClick = () => {
      if (fieldName === PRODUCT_FIELD_NAME) {
        delete record.params[ENDROIT_FIELD_NAME];
        delete record.params[EQUIPMENT_TYPE_FIELD_NAME];
      }
      if (fieldName === ENDROIT_FIELD_NAME) {
        delete record.params[EQUIPMENT_TYPE_FIELD_NAME];
      }

      delete record.params.endroit_id;
      delete record.params.produit_id;
      delete record.params.equipment_type_id;
    };
    return (
      <Button
        my={1}
        onClick={() => {
          handleOnClick();
          navigate(
            `/resources/${tableName}/actions/new?referer=${property.resourceId}`,
            {
              state: {
                from: location.pathname,
                record: record.params,
                // recordData,
                // : {
                //   ...record.params,
                //   [fieldName]: '',
                // },
                field: fieldName,
              },
            }
          );
        }}>
        Ajouter {label}
      </Button>
    );
  };

  return (
    <FormGroup>
      <Row>
        <Box>
          <Label
            htmlFor={PRODUCT_FIELD_NAME}
            mb={1}>
            {property.props.product.label}
          </Label>
          <Select
            id={PRODUCT_FIELD_NAME}
            options={productOptions}
            onChange={(selectedOption) => handleProductSelect(selectedOption)}
            name={PRODUCT_FIELD_NAME}
            value={productSelected}
          />
          {record.errors[PRODUCT_FIELD_NAME] && (
            <FormMessage color='red'>
              {record.errors[PRODUCT_FIELD_NAME].message}
            </FormMessage>
          )}
          {isInterventions &&
            link(
              PRODUCT_TABLE_NAME,
              property.props.product.label,
              PRODUCT_FIELD_NAME
            )}
        </Box>
        <Box>
          <Label
            htmlFor={ENDROIT_FIELD_NAME}
            my={1}>
            {property.props.endroit.label}
          </Label>
          <Select
            id={ENDROIT_FIELD_NAME}
            options={endroitOptions}
            onChange={(selectedOption) => handleEndroitSelect(selectedOption)}
            name={ENDROIT_FIELD_NAME}
            value={endroitSelected}
          />
          {record.errors[ENDROIT_FIELD_NAME] && (
            <FormMessage color='red'>
              {record.errors[ENDROIT_FIELD_NAME].message}
            </FormMessage>
          )}
          {isInterventions &&
            link(
              ENDROIT_TABLE_NAME,
              property.props.endroit.label,
              ENDROIT_FIELD_NAME
            )}
        </Box>
        <Box>
          <Label
            htmlFor={EQUIPMENT_TYPE_FIELD_NAME}
            my={1}>
            {property.props.equipment.label}
          </Label>
          <Select
            id={EQUIPMENT_TYPE_FIELD_NAME}
            options={equipmentTypeOptions}
            onChange={(selectedOption) => handleEquipmentSelect(selectedOption)}
            name={EQUIPMENT_TYPE_FIELD_NAME}
            value={equipmentSelected}
          />
          {record.errors[EQUIPMENT_TYPE_FIELD_NAME] && (
            <FormMessage color='red'>
              {record.errors[EQUIPMENT_TYPE_FIELD_NAME].message}
            </FormMessage>
          )}
          {isInterventions &&
            link(
              EQUIPMENT_TYPE_TABLE_NAME,
              property.props.equipment.label,
              EQUIPMENT_TYPE_FIELD_NAME
            )}
        </Box>
      </Row>
    </FormGroup>
  );
};

export default ProductSelect;
