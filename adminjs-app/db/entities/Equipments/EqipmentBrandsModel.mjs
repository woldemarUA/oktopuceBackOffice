import { DataTypes, Model } from 'sequelize';
import sequelize from '../../db_connector.mjs';

export class EquipmentBrandsModel extends Model {}

EquipmentBrandsModel.init(
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
  },
  {
    sequelize,
    modelName: 'EquipmentBrandsModel',
    tableName: 'equipment_brands',
    timestamps: false, // As we are manually handling 'created_at' and 'updated_at'
  }
);
