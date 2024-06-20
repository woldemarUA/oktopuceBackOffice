import { Clients } from '../entities/Clients/Clients.mjs';
import { ClientTypes } from '../entities/Clients/ClientsTypes.mjs';
import { EquipmentTypesModel } from '../entities/Equipments/EquipmentTypesModel.mjs'; // Assuming this was missing

import { InterventionsTypesModel } from '../entities/Interventions/InterventionsTypesModel.mjs';
import { InterventionsQuestionTypesModel } from '../entities/Interventions/InterventionsQuestionTypesModel.mjs';
import { InterventionsQuestionsEquipmentModel } from '../entities/Interventions/InterventionsQuestionsEquipmentModel.mjs';
import { InterventionsQuestionsModel } from '../entities/Interventions/InterventionsQuestionsModel.mjs';

import { InterventionsDepQuestionsModel } from '../entities/Interventions/InterventionsDepQuestionsModel.mjs';

import { SitesModel } from '../entities/Sites/SitesModel.mjs';

import { FilesModel } from '../entities/Utils/FileModel.mjs';
import { InterventionsModel } from '../entities/Interventions/InterventionsModel.mjs';

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

InterventionsQuestionsModel.belongsTo(InterventionsQuestionTypesModel, {
  foreignKey: 'question_type_id',
  as: 'question_name',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
InterventionsQuestionTypesModel.hasMany(InterventionsQuestionsModel, {
  foreignKey: 'question_type_id',
});

FilesModel.belongsTo(InterventionsModel, {
  foreignKey: 'intervention_id',
  as: 'interventions_file_upload',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

InterventionsModel.hasMany(FilesModel, {
  foreignKey: 'intervention_id',
});
