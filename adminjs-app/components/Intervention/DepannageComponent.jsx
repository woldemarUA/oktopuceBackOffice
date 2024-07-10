import React, { useState, useEffect } from 'react';
import {
  TextField,
  Label,
  Row,
  CellFlex,
  Section,
} from '../styled-componens/Atoms.mjs';
import ToggleSwitch from '../styled-componens/ToggleSwitch';

const DepannageComponent = ({ questions, questionsValuesHandler }) => {
  const [codeDefautVisible, setCodeDeautVisible] = useState(false);
  const [dossierVisible, setDossierVisible] = useState(false);
  const [corrigeValue, setCorrigeValue] = useState(false);
  const [nouvelleInterventionValue, setNouvelleInterventionValue] =
    useState(false);
  const [descriptionValue, setDescriptionValue] = useState('');
  const [intervDescriptionValue, setIntervDescriptionValue] = useState('');
  const [defautIndiqueValue, setDefautIndiqueValue] = useState('');
  const [dossierValue, setDossierValue] = useState('');

  useEffect(() => {
    questionsValuesHandler({
      id: description.id,
      response: descriptionValue,
      parent_id: 'depannage',
    });
    questionsValuesHandler({
      id: description.id,
      response: descriptionValue,
      parent_id: 'depannage',
    });
    questionsValuesHandler({
      id: defaut.id,
      response: codeDefautVisible,
      parent_id: 'depannage',
    });
    questionsValuesHandler({
      id: corrige.id,
      response: corrigeValue,
      parent_id: 'depannage',
    });
    questionsValuesHandler({
      id: nouvelleIntervention.id,
      response: nouvelleInterventionValue,
      parent_id: 'depannage',
    });
    questionsValuesHandler({
      id: intervDescription.id,
      response: intervDescriptionValue,
      parent_id: 'depannage',
    });
    questionsValuesHandler({
      id: defauIndique.id,
      response: defautIndiqueValue,
      parent_id: 'depannage',
    });
    questionsValuesHandler({
      id: dossier.id,
      response: dossierValue,
      parent_id: 'depannage',
    });
    questionsValuesHandler({
      id: stationTechnique.id,
      response: dossierVisible,
      parent_id: 'depannage',
    });
  }, [
    codeDefautVisible,
    dossierVisible,
    corrigeValue,
    nouvelleInterventionValue,
    descriptionValue,
    intervDescriptionValue,
    defautIndiqueValue,
    dossierValue,
  ]);

  const description = questions[0] || {};
  const defaut = questions[1] || {};
  const defauIndique = questions[2] || {};
  const stationTechnique = questions[3] || {};
  const dossier = questions[4] || {};
  const intervDescription = questions[5] || {};
  const corrige = questions[6] || {};
  const nouvelleIntervention = questions[7] || {};

  //   console.log(intervDescriptionValue);
  return (
    <>
      <Section borderW='0px'>
        <Row>
          <CellFlex>
            <Label
              htmlFor={description.id || ''}
              mb={1}>
              {description.name || 'Description'}
            </Label>
            <TextField
              id={description.id || ''}
              defaultValue={descriptionValue}
              onChange={(e) => setDescriptionValue(e.target.value)}></TextField>
          </CellFlex>
        </Row>
        <Row>
          <Label htmlFor={defaut.id || ''}>{defaut.name || 'Defaut'}</Label>
          <ToggleSwitch
            id={defaut.id || ''}
            checked={codeDefautVisible}
            name={defaut.id || ''}
            onChange={() => setCodeDeautVisible(!codeDefautVisible)}
          />
        </Row>
        {codeDefautVisible && (
          <Row>
            <CellFlex>
              <Label
                htmlFor={defauIndique.id || ''}
                mb={1}>
                {defauIndique.name || 'Defau Indique'}
              </Label>
              <TextField
                id={defauIndique.id || ''}
                defaultValue={defautIndiqueValue}
                onChange={(e) =>
                  setDefautIndiqueValue(e.target.value)
                }></TextField>
            </CellFlex>
          </Row>
        )}
      </Section>
      <Section borderW='0px'>
        <Row>
          <CellFlex>
            <Label
              htmlFor={intervDescription.id || ''}
              mb={1}>
              {intervDescription.name || 'Description intervention'}
            </Label>
            <TextField
              id={intervDescription.id || ''}
              defaultValue={intervDescriptionValue}
              onChange={(e) =>
                setIntervDescriptionValue(e.target.value)
              }></TextField>
          </CellFlex>
        </Row>
        <Row>
          <Label htmlFor={corrige.id || ''}>{corrige.name || 'Defaut'}</Label>
          <ToggleSwitch
            id={corrige.id || ''}
            checked={corrigeValue}
            name={corrige.id || ''}
            onChange={() => setCorrigeValue(!corrigeValue)}
          />
        </Row>
      </Section>
      <Section borderW='0px'>
        {dossierVisible && (
          <Row>
            <CellFlex>
              <Label
                htmlFor={dossier.id || ''}
                mb={1}>
                {dossier.name || 'Dossier'}
              </Label>
              <TextField
                id={dossier.id || ''}
                defaultValue={dossierValue}
                onChange={(e) => setDossierValue(e.target.value)}></TextField>
            </CellFlex>
          </Row>
        )}
        <Row mb={1}>
          <Label htmlFor={stationTechnique.id || ''}>
            {stationTechnique.name || 'Station Technique'}
          </Label>
          <ToggleSwitch
            id={stationTechnique.id || ''}
            checked={dossierVisible}
            name={stationTechnique.id || ''}
            onChange={() => setDossierVisible(!dossierVisible)}
          />
        </Row>
        <Row>
          <CellFlex>
            <Label htmlFor={nouvelleIntervention.id || ''}>
              {nouvelleIntervention.name || 'Defaut'}
            </Label>
          </CellFlex>
          <CellFlex>
            <ToggleSwitch
              id={nouvelleIntervention.id || ''}
              checked={nouvelleInterventionValue}
              name={nouvelleIntervention.id || ''}
              onChange={() =>
                setNouvelleInterventionValue(!nouvelleInterventionValue)
              }
            />
          </CellFlex>
        </Row>
      </Section>
    </>
  );
};

export default DepannageComponent;
