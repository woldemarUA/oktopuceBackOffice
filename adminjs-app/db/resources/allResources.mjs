import '../associations/clientsAssociations.mjs';

import ClientsResource, { ClientTypesResource } from './clientResource.mjs';
import {
  EquipmentBrandsResource,
  EquipmentExtTypesResource,
  EquipmentIntTypesResource,
  EquipmentLocationsResource,
  EquipmentTypesResource,
  EquipmentsResource,
  EquipmentGasTypesResource,
  NfcTagsResource,
  EquipmentProduitResource,
  EquipmentEndroitResource,
} from './equipmentResource.mjs';

import { SitesResource } from './sitesResource.mjs';

const resourcesAll = async () => {
  return [
    ClientTypesResource(),
    ClientsResource(),
    EquipmentBrandsResource(),
    EquipmentExtTypesResource(),
    EquipmentIntTypesResource(),
    EquipmentLocationsResource(),
    EquipmentTypesResource(),
    await EquipmentsResource(),
    EquipmentGasTypesResource(),
    SitesResource(),
    NfcTagsResource(),
    EquipmentProduitResource(),
    EquipmentEndroitResource(),
  ];
};

export default resourcesAll;
