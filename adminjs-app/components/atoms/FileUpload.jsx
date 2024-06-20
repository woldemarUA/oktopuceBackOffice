// FileUploader.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Label } from '@adminjs/design-system';
import {
  InputAtom,
  ColoredSpan,
  Paragraph,
  Box,
} from '../styled-componens/Atoms.mjs';

function FileUploader({ property, record, resource, onChange }) {
  const [filePath, setFilePath] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const [errMsg, setErrMsg] = useState(null);

  const handleChange = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('myfile', file);
    try {
      setErrMsg(null);
      setSuccessMsg(null);
      const response = await axios.post(
        `/upload?resourceId=${encodeURIComponent(
          resource.id
        )}&propertyName=${encodeURIComponent(property.name)}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      const { data } = response;

      setFilePath(data.path);
      setSuccessMsg('Fichier téléchargé avec succès');
    } catch (error) {
      console.error('Error uploading file:', error.response);
      setErrMsg(
        `Erreur lors du téléchargement du fichier: ${error.response.statusText}`
      );
    }
  };

  useEffect(() => {
    if (filePath) {
      onChange(property.name, filePath);
    }
  }, [filePath]);

  return (
    <Box>
      <Label htmlFor={property.name}>{property.props.label}</Label>
      <InputAtom
        if={property.name}
        type='file'
        onChange={handleChange}
      />

      {successMsg && (
        <Paragraph>
          <ColoredSpan fontColor='approval'>{successMsg}</ColoredSpan>
        </Paragraph>
      )}
      {errMsg && (
        <Paragraph>
          <ColoredSpan fontColor='danger'>{errMsg}</ColoredSpan>
        </Paragraph>
      )}
    </Box>
  );
}

export default FileUploader;
