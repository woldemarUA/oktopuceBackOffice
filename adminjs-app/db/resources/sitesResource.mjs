import { SitesModel } from '../entities/Sites/SitesModel.mjs';
import importExportFeature from '@adminjs/import-export';
// import { componentLoader } from '../../../server.mjs';
import { componentLoader } from '../../setUp/componentLoader.mjs';

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
