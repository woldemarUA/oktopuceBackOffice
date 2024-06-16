import React from 'react';

import ProductShow from '../atoms/ProductShow';

const ParametrageShowComponent = ({ record }) => {
  const produit = {
    id: record.populated.produit_id.id,
    name: record.populated.produit_id.title,
  };
  const endroit = {
    id: record.populated.endroit_id.id,
    name: record.populated.endroit_id.title,
  };
  const equipment = {
    id: record.populated.equipment_type_id.id,
    name: record.populated.equipment_type_id.title,
  };

  return (
    <ProductShow
      produit={produit}
      endroit={endroit}
      equipment={equipment}
    />
  );
};

export default ParametrageShowComponent;
