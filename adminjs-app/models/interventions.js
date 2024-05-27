const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('interventions', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    site_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    company_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    intervention_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    equipment_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    endroit: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    equipment_type_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    intervention_type_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    additional_information: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_electrical_connections_done: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    is_network_leakage_tested: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    is_refrigerant_connections_done: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    is_unit_installed: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    is_functionality_tested: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    clima_functionality_mode: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    technician_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    soufflage_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    soufflage_relevee: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    is_controle_reprise: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    reprise_relevee: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    soufflage_delta: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    signature_client: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    signature_technicien: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    document_upload: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    signatures: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'interventions',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
