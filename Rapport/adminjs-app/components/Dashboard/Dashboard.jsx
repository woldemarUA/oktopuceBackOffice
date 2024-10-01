import { ApiClient } from 'adminjs';

import React, { useState, useEffect } from 'react';

import {
  DashboardContainer,
  DashboardCardContainer,
  DashboardLogo,
} from '../styled-componens/DashBoard.mjs';

const DashboardCard = () => {
  const [data, setData] = useState(null);
  const api = new ApiClient();
  useEffect(() => {
    api
      .getDashboard()
      .then((response) => {
        console.log(response);
        setData(response.data); // { message: 'Hello World' }
      })
      .catch((error) => {
        // handle any errors
      });
  }, []);

  // ...

  console.log(data);
  return (
    <DashboardContainer>
      <DashboardCardContainer>
        <DashboardLogo
          src='/logo/logo.5fd235f1.svg'
          alt='Company Logo'
        />
      </DashboardCardContainer>
    </DashboardContainer>
  );
};

export default DashboardCard;
