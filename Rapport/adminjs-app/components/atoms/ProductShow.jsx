import React from 'react';
import { Row, Cell, Paragraph, AHref } from '../styled-componens/Atoms.mjs';

const ProductShow = ({ produit, endroit, equipment }) => {
  return (
    <Row>
      <Cell>
        <Paragraph mb={2}>Sur quel produit est installé la puce </Paragraph>{' '}
        <AHref href={`/resources/equipment_produit/records/${produit.id}/show`}>
          {produit.name || 'Link to produit'}
        </AHref>
      </Cell>
      <Cell>
        <Paragraph mb={2}>A quel endroit</Paragraph>{' '}
        <AHref href={`/resources/equipment_endroit/records/${endroit.id}/show`}>
          {endroit.name || 'Link to endroit'}
        </AHref>
      </Cell>
      <Cell>
        <Paragraph mb={2}>Type d’unité</Paragraph>{' '}
        <AHref href={`/resources/equipment_types/records/${equipment.id}/show`}>
          {equipment.name || 'Link to unité'}
        </AHref>
      </Cell>
    </Row>
  );
};

export default ProductShow;
