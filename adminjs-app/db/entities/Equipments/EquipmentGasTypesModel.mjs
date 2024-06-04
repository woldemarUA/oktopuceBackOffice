import { DataTypes, Model } from 'sequelize';
import sequelize from '../../db_connector.mjs';

export class EquipmentGasTypesModel extends Model {}

EquipmentGasTypesModel.init(
  {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    global_warming_potential: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE, // Reflecting TIMESTAMP
      allowNull: true,
    },
    updated_at: {
      type: DataTypes.DATE, // Reflecting TIMESTAMP
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'gas_types',
    modelName: 'EquipmentGasTypesModel',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);
