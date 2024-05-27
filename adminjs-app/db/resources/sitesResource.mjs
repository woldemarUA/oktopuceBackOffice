import { SitesModel } from '../entities/Sites/SitesModel.mjs';
const sitesNavigation = {
  name: 'Sites',
};

export const SitesResource = {
  resource: SitesModel,
  options: {
    navigation: sitesNavigation,
  },
};
