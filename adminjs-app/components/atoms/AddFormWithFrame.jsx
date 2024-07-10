import React, { useState } from 'react';
import { Box, Button } from '@adminjs/design-system';
import EquipmentForm from '../Equipment/EquipmentForm';

const AddFormWithFrame = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <Box>
      {showForm ? (
        <Box>
          {/* <iframe
            src='/resources/equipments/actions/new'
            style={{ width: '100%', height: '600px', border: 'none' }}
          /> */}
          <EquipmentForm />
          <Button
            variant='danger'
            onClick={() => setShowForm(false)}>
            Cancel
          </Button>
        </Box>
      ) : (
        <Button onClick={() => setShowForm(true)}>Add New Equipment</Button>
      )}
    </Box>
  );
};

export default AddFormWithFrame;
