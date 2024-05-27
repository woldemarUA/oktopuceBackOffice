import { DataTypes, Model } from 'sequelize';
import sequelize from '../../db_connector.mjs';

export class Clients extends Model {}

Clients.init(
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED, // Reflecting BIGINT UNSIGNED
      primaryKey: true,
      autoIncrement: true,
    },
    type_id: {
      type: DataTypes.BIGINT.UNSIGNED, // Reflecting BIGINT UNSIGNED
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING(255), // Reflecting VARCHAR(255)
      allowNull: true,
    },
    last_name: {
      type: DataTypes.STRING(255), // Reflecting VARCHAR(255)
      allowNull: true,
    },
    contact_name: {
      type: DataTypes.STRING(255), // Reflecting VARCHAR(255)
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING(255), // Reflecting VARCHAR(255)
      allowNull: false,
    },
    postal_code: {
      type: DataTypes.STRING(255), // Reflecting VARCHAR(255)
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING(255), // Reflecting VARCHAR(255)
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING(255), // Reflecting VARCHAR(255)
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255), // Reflecting VARCHAR(255)
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
    modelName: 'Clients',
    tableName: 'clients',
    timestamps: false, // As we are manually handling 'created_at' and 'updated_at'
  }
);
