import React, { useState, useEffect } from 'react';

import { Box, Label, H6, TextArea } from '@adminjs/design-system';

import { CheckboxGrid } from '../styled-componens/CheckBoxGrid.mjs';
import Select from 'react-select';

import ToggleSwitch from '../styled-componens/ToggleSwitch';

const LocationInfoComponent = (props) => {
  const { record, property, onChange, resource } = props;
  const [isVisible, setIsVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const perPage = 10; // Quanbtité des options par requette

  // gerer le precision

  const [showPrecision, setShowPrecision] = useState(false);

  const loadOptions = async (inputValue, callback) => {
    if (!hasMore && inputValue === '') return; // pas des action sil ny a pas des options

    setIsLoading(true);
    try {
      const response = await fetch(
        `/api/resources/equipment_locations/actions/list?perPage=${perPage}&page=${page}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();

      const newOptions = data.records.map((item) => ({
        value: item.id,
        label: item.title,
      }));

      setOptions((prev) => [...prev, ...newOptions]); // Jounte les options
      setHasMore(data.records.length >= perPage); // Vefirier si il y aura encore des pages
      setPage((prev) => prev + 1); // MAj Page numero
      setIsLoading(false);

      callback(newOptions);
    } catch (error) {
      console.error('Failed to fetch options:', error);
      setIsLoading(false);
    }
  };
  const [selectedOptionValue, setSelectedOptionValue] = useState(null);
  const [textFieldValue, setTextFieldValue] = useState('');
  const handleChangeSelect = (selectedOption) => {
    setSelectedOptionValue(selectedOption);
    onChange(property.props.select.value, selectedOption.value);
  };

  const handleChangeTextField = (text) => {
    setTextFieldValue(text);

    onChange(property.props.textField.value, textFieldValue);
  };
  // SET VISIBILITY - CHANGE THE STATE ONCE FINISHED

  useEffect(() => {
    setIsVisible(
      property.props.isVisible.includes(record.params[property.props.parent])
    );
  }, [record.params[property.props.parent]]);

  useEffect(() => {
    loadOptions(inputValue, () => {});
  }, [isVisible]);
  //   console.log(resource.properties[property.props.textField.value].propertyPath);
  //   console.log(property.props);
  // console.log(showPrecision);

  useEffect(() => {
    if (!isVisible) {
      onChange(property.props.select.value, null);
      onChange(property.props.textField.value, '');
    }
  }, [isVisible]);

  return (
    <>
      {isVisible && (
        <>
          <H6>{property.props.select.label}</H6>

          <CheckboxGrid>
            <Select
              onInputChange={(value) => setInputValue(value)}
              options={options}
              onMenuScrollToBottom={() => {
                if (!isLoading && hasMore) {
                  loadOptions(inputValue, () => {});
                }
              }}
              onChange={(selectedOption) => handleChangeSelect(selectedOption)}
              isLoading={isLoading}
              isSearchable={true}
              flexGrow={1}
              width={2 / 3}
              minWidth='fi/t-content'
            />
            <Box
              flexGrow={1}
              width={1 / 3}>
              <ToggleSwitch
                label={property.props.checkBox.label}
                id='precision_toggle'
                checked={showPrecision}
                onChange={() => setShowPrecision(!showPrecision)}
              />
            </Box>
          </CheckboxGrid>

          {showPrecision && (
            <TextArea
              type='text'
              id={
                resource.properties[property.props.textField.value].propertyPath
              }
              name={
                resource.properties[property.props.textField.value].propertyPath
              }
              onChange={(e) => handleChangeTextField(e.target.value)}
              rows={3}
              my={10}
              width={1}
              placeholder={property.props.textField.label}
            />
          )}
        </>
      )}
    </>
  );
};

export default LocationInfoComponent;
