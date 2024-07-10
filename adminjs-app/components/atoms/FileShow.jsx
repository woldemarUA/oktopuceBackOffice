import React, { useState, useEffect } from 'react';
// import pddf
import { pdfjs } from 'react-pdf';
import { getFileType } from '../../utilities/getFileType.mjs';
import { Box, Paragraph, Image, Button } from '../styled-componens/Atoms.mjs';
import { Document, Page } from 'react-pdf';

// import pdf worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const FileShow = ({ property, record }) => {
  const [fileUrl, setFileUrl] = useState(null);
  const [fileType, setFileType] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  useEffect(() => {
    if (record.params.document_upload) {
      setFileUrl(record.params.document_upload);
      setFileType(getFileType(record.params.document_upload));
    }
  }, [record.params.document_upload]);

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <>
      {fileUrl && (
        <Box>
          <Paragraph my={3}>Fichier jointé</Paragraph>
          {fileUrl && fileType === 'image' && (
            <Image
              src={`/${record.params[property.name]}`}
              width='50%'
            />
          )}
          {fileUrl && fileType === 'pdf' && (
            <Box>
              <Box style={{ width: '100%', margin: 'auto' }}>
                <Document
                  file={`/${record.params[property.name]}`}
                  onLoadSuccess={onDocumentLoadSuccess}>
                  <Page
                    pageNumber={pageNumber}
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                    width={300}
                  />
                </Document>
              </Box>
              <Box
                direction='row'
                justifyContent='space-between'
                marginTop='1rem'>
                <Paragraph>
                  Page {pageNumber || (numPages ? 1 : '--')} de{' '}
                  {numPages || '--'}
                </Paragraph>
                <Box direction='row'>
                  <Button
                    type='button'
                    disabled={pageNumber <= 1}
                    onClick={previousPage}>
                    Page précédente
                  </Button>
                  <Button
                    type='button'
                    disabled={pageNumber >= numPages}
                    onClick={nextPage}
                    marginLeft='1rem'>
                    Page suivante
                  </Button>
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      )}
    </>
  );
};

export default FileShow;
