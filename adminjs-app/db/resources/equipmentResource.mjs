import { EquipmentBrandsModel } from '../entities/Equipments/EqipmentBrandsModel.mjs';
import { EquipmentExtTypesModel } from '../entities/Equipments/EquipmentExtTypesModel.mjs';
import { EquipmentIntTypesModel } from '../entities/Equipments/EquipmentIntTypesModel.mjs';
import { EquipmentLocationsModel } from '../entities/Equipments/EquipmentLocationsModel.mjs';
import { EquipmentTypesModel } from '../entities/Equipments/EquipmentTypesModel.mjs';
import { EquipmentsModel } from '../entities/Equipments/EquipmentsModel.mjs';
import { EquipmentGasTypesModel } from '../entities/Equipments/EquipmentGasTypesModel.mjs';

const equipmentNavigation = {
  name: 'Equipments',
};

export const EquipmentsResoource = {
  resource: EquipmentsModel,
  options: {
    navigation: equipmentNavigation,
  },
};

export const EquipmentBrandsResource = {
  resource: EquipmentBrandsModel,
  options: {
    navigation: equipmentNavigation,
  },
};

export const EquipmentExtTypesResource = {
  resource: EquipmentExtTypesModel,
  options: {
    navigation: equipmentNavigation,
  },
};

export const EquipmentIntTypesResource = {
  resource: EquipmentIntTypesModel,
  options: {
    navigation: equipmentNavigation,
  },
};

export const EquipmentLocationsResource = {
  resource: EquipmentLocationsModel,
  options: {
    navigation: equipmentNavigation,
  },
};

export const EquipmentTypesResource = {
  resource: EquipmentTypesModel,
  options: {
    navigation: equipmentNavigation,
  },
};

export const EquipmentGasTypesResource = {
  resource: EquipmentGasTypesModel,
  options: {
    navigation: equipmentNavigation,
  },
};
