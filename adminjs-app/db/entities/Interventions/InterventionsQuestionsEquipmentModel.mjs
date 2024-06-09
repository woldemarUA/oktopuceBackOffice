import { DataTypes, Model } from 'sequelize';
import sequelize from '../../db_connector.mjs';

export class InterventionsQuestionsEquipmentModel extends Model {}

InterventionsQuestionsEquipmentModel.init(
  {
    intervention_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'intervention_types',
        key: 'id',
      },
    },
    equipment_type_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'equipment_types',
        key: 'id',
      },
    },
    question_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'intervention_question_types',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    tableName: 'interventions_questions_equipment',
    modelName: 'InterventionsQuestionsEquipmentModel',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'intervention_type_id' },
          { name: 'equipment_type_id' },
          { name: 'question_type_id' },
        ],
      },
      {
        name: 'fk_question_types_config',
        using: 'BTREE',
        fields: [{ name: 'question_type_id' }],
      },
      {
        name: 'fk_equipment_types_config',
        using: 'BTREE',
        fields: [{ name: 'equipment_type_id' }],
      },
    ],
  }
);
