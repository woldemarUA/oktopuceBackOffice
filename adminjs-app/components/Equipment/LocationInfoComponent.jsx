import React, { useState, useEffect } from 'react';

import { Box, Label, CheckBox, H6, TextArea } from '@adminjs/design-system';
import Select from 'react-select';

const LocationInfoComponent = (props) => {
  const { record, property, onChange, resource } = props;
  const [isVisible, setIsVisible] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const perPage = 10; // Quanbtité des options par requette

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

  // SET VISIBILITY - CHANGE THE STATE ONCE FINISHED

  //   useEffect(() => {
  //     setIsVisible(
  //       property.props.isVisible.includes(record.params[property.props.parent])
  //     );
  //   }, [record.params[property.props.parent]]);

  useEffect(() => {
    loadOptions(inputValue, () => {});
  }, [isVisible]);
  //   console.log(resource.properties[property.props.textField.value].propertyPath);
  //   console.log(property.props);

  return (
    <>
      {isVisible && (
        <>
          <H6>{property.props.select.label}</H6>
          <Box
            flex={true}
            flexDirection={['column', 'row']}
            //   justifyContent='space-between'
          >
            <Select
              onInputChange={(value) => setInputValue(value)}
              options={options}
              onMenuScrollToBottom={() => {
                if (!isLoading && hasMore) {
                  loadOptions(inputValue, () => {});
                }
              }}
              isLoading={isLoading}
              isSearchable={true}
              flexGrow={1}
              width='auto'
              minWidth='fit-content'
            />
            <Box
              flex={true}
              flexDirection={['column', 'row']}>
              <Label
                ml={50}
                p={10}>
                {property.props.checkBox.label}
                <CheckBox m={10} />
              </Label>
              <TextArea
                type='text'
                id={
                  resource.properties[property.props.textField.value]
                    .propertyPath
                }
                name={
                  resource.properties[property.props.textField.value]
                    .propertyPath
                }
                //  onChange={handleChange}
                rows={3}
                width={300}
                mx={10}
                placeholder={`Enter ${property.props.textField.label}`}
              />
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default LocationInfoComponent;
