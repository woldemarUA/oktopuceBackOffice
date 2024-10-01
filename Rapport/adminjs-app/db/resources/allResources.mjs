import '../associations/modelsAssociations.mjs';

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

import {
  InterventionsResource,
  InterventionsQuestionsEquipmentResource,
  InterventionsQuestionsResource,
  InterventionsTypesResource,
  InterventionsQuestionTypesResource,
  InterventionsDepQuestionsResource,
} from './interventionsResource.mjs';

import {
  UserTypesResource,
  UsersResource,

  // creatUserResourceOptions,
} from './usersResource.mjs';

import { SitesResource } from './sitesResource.mjs';

import { FilesResource } from './filesResource.mjs';

const resourcesAll = async () => {
  return [
    ClientTypesResource(),
    await ClientsResource(),
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
    await InterventionsResource(),
    await InterventionsDepQuestionsResource(),
    InterventionsQuestionsEquipmentResource(),
    InterventionsQuestionsResource(),
    InterventionsTypesResource(),
    InterventionsQuestionTypesResource(),
    UserTypesResource(),
    UsersResource(),

    await FilesResource(),
    // creatUserResourceOptions(1),
  ];
};

export default resourcesAll;
