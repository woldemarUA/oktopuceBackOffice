import { Clients } from '../entities/Clients/Clients.mjs';
import { ClientTypes } from '../entities/Clients/ClientsTypes.mjs';
import { EquipmentTypesModel } from '../entities/Equipments/EquipmentTypesModel.mjs'; // Assuming this was missing

import { InterventionsTypesModel } from '../entities/Interventions/InterventionsTypesModel.mjs';
import { InterventionsQuestionTypesModel } from '../entities/Interventions/InterventionsQuestionTypesModel.mjs';
import { InterventionsQuestionsEquipmentModel } from '../entities/Interventions/InterventionsQuestionsEquipmentModel.mjs';

import { InterventionsDepQuestionsModel } from '../entities/Interventions/InterventionsDepQuestionsModel.mjs';

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

InterventionsTypesModel.belongsToMany(InterventionsQuestionTypesModel, {
  through: InterventionsQuestionsEquipmentModel,
  foreignKey: 'intervention_type_id',
  otherKey: 'question_type_id',
});
// InterventionsQuestionTypesModel is not associated to InterventionsQuestionsEquipmentModel!
InterventionsQuestionsEquipmentModel.belongsTo(
  InterventionsQuestionTypesModel,
  { foreignKey: 'question_type_id' }
);
InterventionsQuestionsEquipmentModel.belongsTo(InterventionsTypesModel, {
  foreignKey: 'intervention_type_id',
});

EquipmentTypesModel.belongsToMany(InterventionsQuestionTypesModel, {
  through: InterventionsQuestionsEquipmentModel,
  foreignKey: 'equipment_type_id',
  otherKey: 'question_type_id',
});

InterventionsQuestionTypesModel.belongsToMany(InterventionsTypesModel, {
  through: InterventionsQuestionsEquipmentModel,
  foreignKey: 'question_type_id',
  otherKey: 'intervention_type_id',
});

InterventionsQuestionTypesModel.belongsToMany(EquipmentTypesModel, {
  through: InterventionsQuestionsEquipmentModel,
  foreignKey: 'question_type_id',
  otherKey: 'equipment_type_id',
});

// parent kid questions

InterventionsDepQuestionsModel.belongsTo(InterventionsQuestionTypesModel, {
  foreignKey: 'parent_q_id',
  as: 'ParentQuestion',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

// Defining the association for child_q_id
InterventionsDepQuestionsModel.belongsTo(InterventionsQuestionTypesModel, {
  foreignKey: 'child_q_id',
  as: 'ChildQuestion',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

// Optional reverse associations
InterventionsQuestionTypesModel.hasMany(InterventionsDepQuestionsModel, {
  foreignKey: 'parent_q_id',
  as: 'ParentQuestions',
});

InterventionsQuestionTypesModel.hasMany(InterventionsDepQuestionsModel, {
  foreignKey: 'child_q_id',
  as: 'ChildQuestions',
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
