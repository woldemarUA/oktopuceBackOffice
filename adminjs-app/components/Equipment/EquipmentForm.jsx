import React from 'react';
import { Box, H3 } from '@adminjs/design-system';
//  import models

const EquipmentForm = (props) => {
  console.log(props);
  // console.log(props.resource.properties.produit_id.availableValues);

  return (
    <Box flex>
      <Box
        variant='white'
        width={1 / 2}
        boxShadow='card'
        mr='xxl'
        flexShrink={0}>
        <H3>Example of a simple page</H3>
        <p>Where you can put almost everything</p>
        <p>like this:</p>
        <p>
          <img
            src='https://i.redd.it/rd39yuiy9ns21.jpg'
            alt='stupid cat'
            width={300}
          />
        </p>
      </Box>
    </Box>
  );
};

export default EquipmentForm;
