import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { FormGroup, FormMessage, Label } from '@adminjs/design-system';

const SingleSelect = ({ property, record, onChange }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [options, setOptions] = useState([]);
  const [selectedOptionValue, setSelectedOptionValue] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOptionValue(selectedOption);
    onChange(property.path, selectedOption.value);
  };

  useEffect(() => {
    if (typeof property.props.isVisible === 'boolean') {
      setIsVisible(property.props.isVisible);
    } else {
      const newVisibility = property.props.isVisible.includes(
        record.params[property.props.parent]
      );
      setIsVisible(newVisibility);
      //   console.log('Visibility updated to:', newVisibility);
    }
  }, [property.props.isVisible, record.params[property.props.parent]]);

  const fetchOptions = async () => {
    try {
      const response = await fetch(
        `/api/resources/${property.props.tableName}/actions/list`
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
  };

  useEffect(() => {
    if (property.props.options) return setOptions(property.props.options);
    fetchOptions();
  }, [property.props.tableName]);

  //   console.log(record.params);

  return (
    <>
      {isVisible && (
        <FormGroup error={''}>
          <Label htmlFor={property.name}>{property.props.label}</Label>
          <Select
            options={options}
            onChange={(selectedOption) => handleChange(selectedOption)}
            name={property.name}
            value={selectedOptionValue}
          />
          <FormMessage>{''}</FormMessage>
        </FormGroup>
      )}
    </>
  );
};

export default SingleSelect;
