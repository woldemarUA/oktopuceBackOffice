import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import SignatureCanvas from 'react-signature-canvas';
import { Label } from '@adminjs/design-system';
import {
  ColoredSpan,
  Paragraph,
  Box,
  CanvasContainer,
  Button,
} from '../styled-componens/Atoms.mjs';

const SignatureComp = ({ property, record, onChange, resource }) => {
  const [filePath, setFilePath] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const [errMsg, setErrMsg] = useState(null);
  const sigCanvas = useRef(null);

  const clear = () => {
    sigCanvas.current?.clear();
  };

  const dataURLToBlob = (dataURL) => {
    const [header, base64] = dataURL.split(',');
    const mime = header.match(/:(.*?);/)[1];
    const bstr = atob(base64);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new Blob([u8arr], { type: mime });
  };

  const sendToServer = async (dataURL) => {
    const formData = new FormData();
    const blob = dataURLToBlob(dataURL);
    formData.append('myfile', blob, 'signature.png');

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
      setSuccessMsg('La signature a été ajoutée avec succès');
      clear();
    } catch (error) {
      console.error('Error uploading file:', error);
      setErrMsg(`Erreur lors du téléchargement de la signature`);
    }
  };
  const save = () => {
    if (sigCanvas.current) {
      const imageDataURL = sigCanvas.current.toDataURL('image/png');

      sendToServer(imageDataURL);
    }
  };

  useEffect(() => {
    if (filePath) {
      onChange(property.name, filePath);
    }
  }, [filePath]);

  console.log(record.params);

  return (
    <>
      <Box>
        <Label htmlFor={property.name}>{property.props.label}</Label>
        <Button
          hoverColor='danger'
          type='button'
          onClick={clear}
          id={`clearButton-${property.name}`}>
          Effacer
        </Button>
      </Box>

      <CanvasContainer>
        <SignatureCanvas
          ref={sigCanvas}
          penColor='black'
          canvasProps={{
            id: property.name,
            width: 'auto',
            height: '100%',
            // className: 'sigCanvas w-full h-full rounded',
          }}
          backgroundColor='rgba(240, 240, 240,1)'
        />
      </CanvasContainer>

      <Box>
        <Button
          hoverColor='primary'
          type='button'
          onClick={save}
          id={`clearButton-${property.name}`}>
          Confirmer
        </Button>
      </Box>
      <Box my={1}>
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
    </>
  );
};

export default SignatureComp;
