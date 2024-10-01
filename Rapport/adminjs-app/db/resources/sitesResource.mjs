import { SitesModel } from '../entities/Sites/SitesModel.mjs';
import importExportFeature from '@adminjs/import-export';

import { componentLoader } from '../../setUp/componentLoader.mjs';
import { Components } from '../../components/components.mjs';

// shared fields import
import {
  listVisibility,
  idVisibility,
} from './resourcesSharedFields/resourcesSharedFields.mjs';

const sitesNavigation = {
  name: 'Sites',
};

export const SitesResource = () => ({
  resource: SitesModel,
  features: [importExportFeature({ componentLoader })],
  options: {
    navigation: sitesNavigation,
    actions: {
      new: {
        // layout: equipmentFormLayout,
        component: Components.EquipmentForm,
      },
      edit: {
        // layout: equipmentFormLayout,
        component: Components.EquipmentForm,
      },
      getSitesOptions: {
        actionType: 'resource',
        handler: async (request, response, context) => {
          try {
            const sitesOptions = await SitesModel.getSitesOptions();
            return response.send([...sitesOptions]); // Ensure it's an array for JSON serialization
          } catch (error) {
            return response.status(500).send({ error: error.message });
          }
        },
        isVisible: false, // Optionally hide this action in the UI if not needed visibly
      },
    },
    properties: {
      name: { position: 1 },
      client_id: { position: 2 },
      phone_number: { position: 3 },
      email: { position: 4 },
      address: { position: 5 },
      city: { position: 6 },
      postal_code: { position: 7 },
      maintenance_provider: { isVisible: listVisibility },
      created_at: { isVisible: listVisibility },
      updated_at: { isVisible: listVisibility },
      id: { isVisible: idVisibility },
    },
  },
});
