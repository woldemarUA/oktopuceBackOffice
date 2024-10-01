import React from 'react';
import { Box, Button, Icon } from '@adminjs/design-system';
// import { ChevronLeft } from '@adminjs/design-system/icons';

const GoBackComponent = (props) => {
  const handleGoBack = () => {
    const referer = document.referrer;
    const fallbackUrl = '/';
    console.log(referer);
    window.location.href = referer ? referer : fallbackUrl;
  };

  return (
    <Button
      variant='primary'
      onClick={handleGoBack}>
      Go Back
    </Button>
  );
};

export default GoBackComponent;
