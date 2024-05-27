import { DataTypes, Model } from 'sequelize';
import sequelize from '../../db_connector.mjs';

export class EquipmentLocationsModel extends Model {}

EquipmentLocationsModel.init(
  {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    sequelize,
    tableName: 'equipment_locations',
    timestamps: false,
  }
);
