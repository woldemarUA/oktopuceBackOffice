import importExportFeature from '@adminjs/import-export';
// import { componentLoader } from '../../../server.mjs';
import { componentLoader } from '../../setUp/componentLoader.mjs';

import { Clients } from '../entities/Clients/Clients.mjs';
import { ClientTypes } from '../entities/Clients/ClientsTypes.mjs';

// import shared fields
import {
  listVisibility,
  idVisibility,
} from './resourcesSharedFields/resourcesSharedFields.mjs';

const clientNavigation = {
  name: 'Clients',
};

const ClientsResource = () => ({
  resource: Clients,
  features: [importExportFeature({ componentLoader })],
  options: {
    // navigation: clientNavigation,
    navigation: false,
    properties: {
      last_name: { position: 1, isTitle: true },
      first_name: { position: 2 },
      contact_name: { position: 3 },
      type_id: {
        position: 4,
        isVisible: {
          edit: true,
          show: true,
          list: true,
          filter: false,
        },
      },
      address: { position: 5 },
      postal_code: { position: 6 },
      city: { position: 7 },
      phone_number: { position: 8 },
      email: { position: 9 },
      created_at: { isVisible: listVisibility },
      updated_at: { isVisible: listVisibility },
      id: { isVisible: idVisibility },
    },
  },
});

export const ClientTypesResource = () => {
  return {
    resource: ClientTypes,
    options: {
      // navigation: clientNavigation,
      navigation: false,
      properties: {
        created_at: { isVisible: listVisibility },
        updated_at: { isVisible: listVisibility },
        id: { isVisible: idVisibility },
      },
    },
  };
};

export default ClientsResource;
