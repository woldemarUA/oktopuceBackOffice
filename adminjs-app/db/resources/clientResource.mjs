import '../associations/clientsAssociations.mjs';

import { Clients } from '../entities/Clients/Clients.mjs';
import { ClientTypes } from '../entities/Clients/ClientsTypes.mjs';

const clientNavigation = {
  name: 'Clients',
};

const ClientsResource = {
  resource: Clients,
  options: {
    navigation: clientNavigation,
    properties: {
      last_name: { position: 1 },
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
      created_at: {
        isVisible: {
          edit: false,
          show: false,
          list: false,
          filter: false,
        },
      },
      phone_number: { position: 8 },
      email: { position: 9 },
      updated_at: {
        isVisible: {
          edit: false,
          show: false,
          list: false,
          filter: false,
        },
      },
      id: {
        isVisible: {
          edit: false,
          show: false,
          list: false,
          filter: true,
        },
      },
    },
  },
};

export const ClientTypesResource = {
  resource: ClientTypes,
  options: {
    navigation: clientNavigation,
  },
};

export default ClientsResource;
