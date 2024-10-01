import React, { useState, useEffect } from 'react';
import { Box } from '../styled-componens/Atoms.mjs';
import { Label, DatePicker } from '@adminjs/design-system';
// import DatePicker from 'react-datepicker';

const DateComp = ({ onChange, property }) => {
  const [startDate, setStartDate] = useState(new Date());
  const handleDateChange = (date) => {
    // console.log(date.split('T')[0]);
    setStartDate(date.split('T')[0]);
  };

  useEffect(() => {
    onChange(property.name, startDate);
  }, [startDate, property]);

  return (
    <Box>
      <Label>{property.props.label || 'Date'}</Label>
      <DatePicker
        value={startDate}
        propertyType='date'
        onChange={handleDateChange}
        dateFormat='yyyy/MM/dd'
      />
    </Box>
  );
};

export default DateComp;
