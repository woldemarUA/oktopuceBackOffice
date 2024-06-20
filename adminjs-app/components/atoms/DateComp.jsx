import React, { useState } from 'react';
import { Box } from '../styled-componens/Atoms.mjs';
import { Label, DatePicker } from '@adminjs/design-system';

const DateComp = () => {
  const [startDate, setStartDate] = useState(new Date());
  const handleDateChange = (e) => {
    setStartDate(e);
  };

  return (
    <Box>
      <Label>Date</Label>
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
