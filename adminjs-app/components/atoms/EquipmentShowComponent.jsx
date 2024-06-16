import React from 'react';

import {
  Section,
  Heading,
  Row,
  Cell,
  Paragraph,
  AHref,
  ColoredSpan,
} from '../styled-componens/Atoms.mjs';

import ProductShow from './ProductShow';

import FrenchDate from './FrenchDate';

export const getAllProperties = (record) => {
  const allEntries = {};

  for (const entry of Object.entries(record.params)) {
    allEntries[entry[0]] = entry[1];
  }

  for (const entry of Object.entries(record.populated)) {
    const key = entry[0];
    const val = entry[1].params;
    allEntries[key] = val;
  }

  return allEntries;
};
const EquipmentShowComponent = ({ record }) => {
  const allEntries = getAllProperties(record);

  return (
    <>
      <Section mx='auto'>
        <Heading>Parametrage</Heading>

        <Row mb={3}>
          <Cell>
            <Paragraph mb={1}>Site:</Paragraph>{' '}
            <AHref
              href={`/resources/sites/records/${allEntries.site_id.id}/show`}>
              {allEntries.site_id.name || 'Link to Site'}
            </AHref>
          </Cell>
          <Cell>
            <Paragraph mb={1}>Puce id: </Paragraph>{' '}
            <AHref
              href={`/resources/nfc_tags/records/${allEntries.nfc_tag_id.id}/show`}>
              {allEntries.nfc_tag_id.id || 'Link to Puce'}
            </AHref>
          </Cell>
          {allEntries.parent_equipment_id && (
            <Cell>
              <Paragraph mb={1}>Pièce couplée: </Paragraph>{' '}
              <AHref
                href={`/resources/equipments/records/${allEntries.parent_equipment_id.id}/show`}>
                {allEntries.parent_equipment_id.id || 'Link to Puce'}
              </AHref>
            </Cell>
          )}
          <Cell>
            <Paragraph mb={1}>Date d'installation: </Paragraph>
            <FrenchDate date={allEntries.installation_date} />
          </Cell>
        </Row>
        <ProductShow
          produit={{
            id: allEntries.produit_id.id,
            name: allEntries.produit_id.name,
          }}
          endroit={{
            id: allEntries.endroit_id.id,
            name: allEntries.endroit_id.name,
          }}
          equipment={{
            id: allEntries.equipment_type_id.id,
            name: allEntries.equipment_type_id.name,
          }}
        />
      </Section>
      <Section>
        <Heading>Informations</Heading>
        <Row mb={2}>
          <Cell>
            <Paragraph>Marque</Paragraph>
            <Paragraph>{allEntries.equipment_brand_id.name}</Paragraph>
          </Cell>
          <Cell>
            <Paragraph>Model</Paragraph>
            <Paragraph>{allEntries.equipment_model}</Paragraph>
          </Cell>
          {allEntries.serial_number && (
            <Cell>
              <Paragraph>N de serie</Paragraph>
              <Paragraph>{allEntries.serial_number}</Paragraph>
            </Cell>
          )}
          {allEntries.remote_control_number && (
            <Cell>
              <Paragraph>Telecommande</Paragraph>
              <Paragraph>{allEntries.remote_control_number}</Paragraph>
            </Cell>
          )}
          {allEntries.equipment_type_id.is_int && (
            <Cell>
              <Paragraph>Type</Paragraph>
              <Paragraph>
                {allEntries.unite_interieur_type_id
                  ? allEntries.unite_interieur_type_id.name
                  : 'non spécifié '}
              </Paragraph>
            </Cell>
          )}
          {allEntries.equipment_type_id.is_ext && (
            <Cell>
              <Paragraph>Type</Paragraph>
              <Paragraph>
                {allEntries.unite_exterieur_type_id
                  ? allEntries.unite_exterieur_type_id.name
                  : 'non spécifié '}
              </Paragraph>
            </Cell>
          )}
        </Row>

        {/* : true finalites.is_plancher_raffraichssant : true
          finalites.is_radiateurs : true finalites.ventilo_convecteurs : true */}
        {allEntries.equipment_type_id.is_finalite && (
          <>
            <Row mb={2}>
              <Paragraph
                fontStyle='italic'
                fontColor='#39FF14'
                mb={1}>
                Finalités
              </Paragraph>
            </Row>
            <Row>
              <Cell>
                <ColoredSpan>Plancher chauffant :</ColoredSpan>
                <ColoredSpan
                  fontColor={
                    allEntries.is_plancher_chauffant ? 'approval' : 'danger'
                  }>
                  {allEntries.is_plancher_chauffant ? ' Oui' : ' Non'}
                </ColoredSpan>
              </Cell>
              <Cell>
                <ColoredSpan>Plancher raffraichissant :</ColoredSpan>
                <ColoredSpan
                  fontColor={
                    allEntries.is_plancher_raffraichssant
                      ? 'approval'
                      : 'danger'
                  }>
                  {allEntries.is_plancher_raffraichssant ? ' Oui' : ' Non'}
                </ColoredSpan>
              </Cell>
              <Cell>
                <ColoredSpan>Radiateurs : </ColoredSpan>
                <ColoredSpan
                  fontColor={allEntries.is_radiateurs ? 'approval' : 'danger'}>
                  {allEntries.is_radiateurs ? ' Oui' : ' Non'}
                </ColoredSpan>
              </Cell>
              <Cell>
                <ColoredSpan>Ventilo-onvecteur(s) :</ColoredSpan>
                <ColoredSpan
                  fontColor={
                    allEntries.ventilo_convecteurs ? 'approval' : 'danger'
                  }>
                  {` ${allEntries.ventilo_convecteurs ? ' Oui' : ' Non'}`}
                </ColoredSpan>
              </Cell>
            </Row>
          </>
        )}

        {allEntries.equipment_type_id.is_gas && (
          <>
            <Row mb={2}>
              <Paragraph
                fontStyle='italic'
                fontColor='#39FF14'
                mb={1}>
                Gas Informations
              </Paragraph>
            </Row>
            <Row mb={2}>
              <Cell>
                <ColoredSpan>Type de gaz</ColoredSpan>{' '}
                <ColoredSpan fontColor='approval'>
                  {allEntries.gas_type_id.name}
                </ColoredSpan>
              </Cell>
              <Cell>
                <ColoredSpan>Poids de gaz</ColoredSpan>{' '}
                <ColoredSpan fontColor='approval'>
                  {allEntries.gas_weight}
                </ColoredSpan>
              </Cell>
              <Cell>
                <ColoredSpan>Détecteur de fuite: </ColoredSpan>{' '}
                <ColoredSpan
                  fontColor={
                    allEntries.has_leak_detection ? 'approval' : 'danger'
                  }>
                  {allEntries.has_leak_detection ? 'Oui' : 'Non'}
                </ColoredSpan>
              </Cell>
              <Cell>
                <ColoredSpan>Contrôle d’étanchéité obligatoire: </ColoredSpan>{' '}
                <ColoredSpan fontColor='approval'>
                  {allEntries.leak_detection_periodicity}
                </ColoredSpan>
              </Cell>
            </Row>
          </>
        )}
      </Section>
    </>
  );
};

export default EquipmentShowComponent;
