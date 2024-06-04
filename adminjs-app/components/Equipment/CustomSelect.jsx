import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { FormGroup, FormMessage } from '@adminjs/design-system';
import { Label } from '@adminjs/design-system';

const CustomSelect = ({ property, record, onChange }) => {
  const [options, setOptions] = useState([]);
  const [parentField, setParentField] = useState(property.props.parent);
  const [parentValue, setParentValue] = useState(
    record.params[property.props.parent]
  );
  const [selectedOptionValue, setSelectedOptionValue] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOptionValue(selectedOption);
    onChange(property.path, selectedOption.value);
  };

  async function fetchOptions() {
    if (parentField && parentValue !== undefined) {
      try {
        const response = await fetch(
          `/api/resources/${property.props.tableName}/actions/list?filters.${parentField}=${parentValue}`
        );
        // `/api/resources/${property.props.tableName}/actions/list?filters.${parentField}=${parentValue}`
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        setOptions(
          data.records.map((item) => ({ value: item.id, label: item.title }))
        );
      } catch (error) {
        console.error('Failed to fetch options:', error);
      }
    }
  }

  useEffect(() => {
    setParentField(property.props.parent);
    setParentValue(record.params[property.props.parent]);
  }, [record.params, property.props.parent]);

  useEffect(() => {
    setOptions([]);
    setSelectedOptionValue(null);
    record.params[property.name] = '';
    fetchOptions();
  }, [parentField, parentValue]);

  return (
    <>
      {/* {options.length > 0 && (
        <FormGroup error={''}>
          <Label htmlFor={property.name}>
            {property.props.label} {property.name}
          </Label>
          <Select
            options={options}
            onChange={(selectedOption) => handleChange(selectedOption)}
            name={property.name}
            value={selectedOptionValue}
          />
          <FormMessage>{''}</FormMessage>
        </FormGroup>
      )} */}
      <FormGroup error={''}>
        <Label htmlFor={property.name}>
          {property.props.label} {property.name}
        </Label>
        <Select
          options={options}
          onChange={(selectedOption) => handleChange(selectedOption)}
          name={property.name}
          value={selectedOptionValue}
        />
        <FormMessage>{''}</FormMessage>
      </FormGroup>
    </>
  );
};

export default CustomSelect;
