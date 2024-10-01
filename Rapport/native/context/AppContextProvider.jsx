import React from 'react';

import ClientsProvider from './ClientsProvider';
import SitesProvider from './SitesProvider';
import EquipmentProvider from './EquipmentProvider';
import InterventionsProvider from './InterventionsProvider';

const AppContextProvider = ({ children }) => {
  return (
    <ClientsProvider>
      <SitesProvider>
        <EquipmentProvider>
          <InterventionsProvider>{children}</InterventionsProvider>
        </EquipmentProvider>
      </SitesProvider>
    </ClientsProvider>
  );
};

export default AppContextProvider;
