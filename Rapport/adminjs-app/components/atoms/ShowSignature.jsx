import React from 'react';
import { Box, Image, Paragraph } from '../styled-componens/Atoms.mjs';

const ShowSignature = ({ record, property }) => {
  return (
    <Box>
      <Paragraph>{property.props.label}</Paragraph>
      <Image src={`/${record.params[property.name]}`} />
    </Box>
  );
};

export default ShowSignature;
