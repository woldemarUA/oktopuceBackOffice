import importExportFeature from '@adminjs/import-export';

import { componentLoader } from '../../setUp/componentLoader.mjs';
import { Components } from '../../components/components.mjs';

import { Clients } from '../entities/Clients/Clients.mjs';
import { SitesModel } from '../entities/Sites/SitesModel.mjs';
import { ClientTypes } from '../entities/Clients/ClientsTypes.mjs';
import { EquipmentsModel } from '../entities/Equipments/EquipmentsModel.mjs';

// import shared fields
import {
  listVisibility,
  idVisibility,
} from './resourcesSharedFields/resourcesSharedFields.mjs';

const clientNavigation = {
  name: 'Clients',
};

const ClientsResource = async () => ({
  resource: Clients,
  features: [importExportFeature({ componentLoader })],
  options: {
    navigation: clientNavigation,
    actions: {
      new: {
        // layout: equipmentFormLayout,
        component: Components.EquipmentForm,
      },
      edit: {
        // layout: equipmentFormLayout,
        component: Components.EquipmentForm,
      },
      getSites: {
        actionType: 'resource',
        handler: async (request, response, context) => {
          try {
            const client_id = request.query.id;
            const sites = await SitesModel.getSitesOptions(client_id);
            const siteIDs = sites.map((site) => site.value);
            const equipments = await EquipmentsModel.getBySitesIds(siteIDs);

            return response.send({
              sites: [...sites],
              equipments: [...equipments],
            }); // Ensure it's an array for JSON serialization
          } catch (error) {
            return response.status(500).send({ error: error.message });
          }
        },
        isVisible: false, // Optionally hide this action in the UI if not needed visibly
      },
    },
    // navigation: false,
    properties: {
      last_name: { position: 1, isTitle: true },
      first_name: { position: 2 },
      contact_name: { position: 3 },
      type_id: {
        position: 4,

        isVisible: {
          edit: true,
          show: true,
          list: false,
          filter: false,
        },
      },
      sites: {
        position: 9,
        components: {
          list: Components.ListPropertySitesSelectComponent,
        },
        props: {
          resource: 'clients',
          actionName: 'getSites',
          label: 'Sites',
        },
        isVisible: {
          edit: false,
          show: true,
          list: true,
          filter: false,
        },
      },
      equipment: {
        position: 10,
        components: {
          list: Components.ListPropertySitesSelectComponent,
        },
        props: {
          resource: 'clients',
          actionName: 'getSites',
          label: 'Equipments',
        },

        isVisible: {
          edit: false,
          show: true,
          list: true,
          filter: false,
        },
      },
      address: { position: 5 },
      postal_code: {
        position: 6,
        isVisible: {
          edit: true,
          show: true,
          list: false,
          filter: false,
        },
      },
      city: { position: 7 },
      phone_number: { position: 8 },
      email: { position: 11 },
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
