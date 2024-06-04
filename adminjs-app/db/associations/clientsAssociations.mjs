import { Clients } from '../entities/Clients/Clients.mjs';
import { ClientTypes } from '../entities/Clients/ClientsTypes.mjs';

import { EquipmentsModel } from '../entities/Equipments/EquipmentsModel.mjs';
import { EquipmentBrandsModel } from '../entities/Equipments/EqipmentBrandsModel.mjs';
import { EquipmentExtTypesModel } from '../entities/Equipments/EquipmentExtTypesModel.mjs';
import { EquipmentIntTypesModel } from '../entities/Equipments/EquipmentIntTypesModel.mjs';
import { EquipmentTypesModel } from '../entities/Equipments/EquipmentTypesModel.mjs'; // Assuming this was missing
import { EquipmentGasTypesModel } from '../entities/Equipments/EquipmentGasTypesModel.mjs';
import { NfcTagsModel } from '../entities/Equipments/NfcTagsModel.mjs';
import { EquipmentLocationsModel } from '../entities/Equipments/EquipmentLocationsModel.mjs';
import { EquipmentEndroitModel } from '../entities/Equipments/EquipmentEndroitModel.mjs';
import { EquipmentProduitModel } from '../entities/Equipments/EquipmentProduitModel.mjs';

import { SitesModel } from '../entities/Sites/SitesModel.mjs';

// Define the relationship
Clients.belongsTo(ClientTypes, {
  foreignKey: 'type_id',
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE',
});
ClientTypes.hasMany(Clients, {
  foreignKey: 'type_id',
});

SitesModel.belongsTo(Clients, {
  as: 'client',
  foreignKey: 'client_id',
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE',
});
Clients.hasMany(SitesModel, {
  as: 'sites',
  foreignKey: 'client_id',
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE',
});

// EquipmentsModel.belongsTo(EquipmentBrandsModel, {
//   as: 'equipment_brand',
//   foreignKey: 'equipment_brand_id',
//   onDelete: 'RESTRICT',
//   onUpdate: 'CASCADE',
// });
// EquipmentBrandsModel.hasMany(EquipmentsModel, {
//   as: 'equipment_brand_equipments', // Unique alias
//   foreignKey: 'equipment_brand_id',
//   onDelete: 'RESTRICT',
//   onUpdate: 'CASCADE',
// });

// EquipmentsModel.belongsTo(EquipmentExtTypesModel, {
//   as: 'unite_exterieur_type',
//   foreignKey: 'unite_exterieur_type_id',
//   onDelete: 'RESTRICT',
//   onUpdate: 'CASCADE',
// });
// EquipmentExtTypesModel.hasMany(EquipmentsModel, {
//   as: 'unite_exterieur_equipments', // Unique alias
//   foreignKey: 'unite_exterieur_type_id',
//   onDelete: 'RESTRICT',
//   onUpdate: 'CASCADE',
// });

// EquipmentsModel.belongsTo(EquipmentIntTypesModel, {
//   as: 'unite_interieur_type',
//   foreignKey: 'unite_interieur_type_id',
//   onDelete: 'RESTRICT',
//   onUpdate: 'CASCADE',
// });
// EquipmentIntTypesModel.hasMany(EquipmentsModel, {
//   as: 'unite_interieur_equipments', // Unique alias
//   foreignKey: 'unite_interieur_type_id',
//   onDelete: 'RESTRICT',
//   onUpdate: 'CASCADE',
// });

// EquipmentsModel.belongsTo(EquipmentTypesModel, {
//   as: 'equipment_type',
//   foreignKey: 'equipment_type_id',
//   onDelete: 'RESTRICT',
//   onUpdate: 'CASCADE',
// });
// EquipmentTypesModel.hasMany(EquipmentsModel, {
//   as: 'equipment_type_equipments', // Unique alias
//   foreignKey: 'equipment_type_id',
//   onDelete: 'RESTRICT',
//   onUpdate: 'CASCADE',
// });

// EquipmentsModel.belongsTo(EquipmentsModel, {
//   as: 'parent_equipment',
//   foreignKey: 'parent_equipment_id',
//   onDelete: 'RESTRICT',
//   onUpdate: 'CASCADE',
// });
// EquipmentsModel.hasMany(EquipmentsModel, {
//   as: 'child_equipments', // Unique alias
//   foreignKey: 'parent_equipment_id',
//   onDelete: 'RESTRICT',
//   onUpdate: 'CASCADE',
// });

// EquipmentsModel.belongsTo(EquipmentGasTypesModel, {
//   as: 'gas_type',
//   foreignKey: 'gas_type_id',
//   onDelete: 'RESTRICT',
//   onUpdate: 'CASCADE',
// });
// EquipmentGasTypesModel.hasMany(EquipmentsModel, {
//   as: 'gas_type_equipments', // Unique alias
//   foreignKey: 'gas_type_id',
//   onDelete: 'RESTRICT',
//   onUpdate: 'CASCADE',
// });

// EquipmentsModel.belongsTo(NfcTagsModel, {
//   as: 'nfc_tag',
//   foreignKey: 'nfc_tag_id',
//   onDelete: 'RESTRICT',
//   onUpdate: 'CASCADE',
// });
// NfcTagsModel.hasMany(EquipmentsModel, {
//   as: 'nfc_tag_equipments', // Unique alias
//   foreignKey: 'nfc_tag_id',
//   onDelete: 'RESTRICT',
//   onUpdate: 'CASCADE',
// });

// EquipmentsModel.belongsTo(SitesModel, {
//   as: 'site',
//   foreignKey: 'site_id',
//   onDelete: 'RESTRICT',
//   onUpdate: 'CASCADE',
// });
// SitesModel.hasMany(EquipmentsModel, {
//   as: 'site_equipments', // Unique alias
//   foreignKey: 'site_id',
//   onDelete: 'RESTRICT',
//   onUpdate: 'CASCADE',
// });

// EquipmentsModel.belongsTo(EquipmentLocationsModel, {
//   as: 'location',
//   foreignKey: 'location_id',
//   onDelete: 'RESTRICT',
//   onUpdate: 'CASCADE',
// });

// EquipmentLocationsModel.hasMany(EquipmentsModel, {
//   as: 'location',
//   foreignKey: 'location_id',
//   onDelete: 'RESTRICT',
//   onUpdate: 'CASCADE',
// });

// EquipmentEndroitModel.belongsTo(EquipmentProduitModel, {
//   as: 'endroit',
//   foreignKey: 'produit_id',
//   onDelete: 'RESTRICT',
//   onUpdate: 'CASCADE',
// });
// EquipmentProduitModel.hasMany(EquipmentEndroitModel, {
//   as: 'endroit',
//   foreignKey: 'produit_id',
//   onDelete: 'RESTRICT',
//   onUpdate: 'CASCADE',
// });
// EquipmentTypesModel.belongsTo(EquipmentEndroitModel, {
//   as: 'equipment_endroit',
//   foreignKey: 'endroit_id',
//   onDelete: 'RESTRICT',
//   onUpdate: 'CASCADE',
// });
// EquipmentEndroitModel.hasMany(EquipmentTypesModel, {
//   as: 'equipment_endroit',
//   foreignKey: 'endroit_id',

//   onDelete: 'RESTRICT',
//   onUpdate: 'CASCADE',
// });
