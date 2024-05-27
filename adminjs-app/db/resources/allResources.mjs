import ClientsResource, { ClientTypesResource } from './clientResource.mjs';
import {
  EquipmentBrandsResource,
  EquipmentExtTypesResource,
  EquipmentIntTypesResource,
  EquipmentLocationsResource,
  EquipmentTypesResource,
  EquipmentsResoource,
  EquipmentGasTypesResource,
} from './equipmentResource.mjs';

import { SitesResource } from './sitesResource.mjs';

const resourcesAll = [
  ClientTypesResource,
  ClientsResource,
  EquipmentBrandsResource,
  EquipmentExtTypesResource,
  EquipmentIntTypesResource,
  EquipmentLocationsResource,
  EquipmentTypesResource,
  EquipmentsResoource,
  EquipmentGasTypesResource,
  SitesResource,
];

export default resourcesAll;
