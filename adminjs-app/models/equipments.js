const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('equipments', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    parent_equipment_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'equipments',
        key: 'id'
      }
    },
    site_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'sites',
        key: 'id'
      }
    },
    location_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    nfc_tag_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'nfc_tags',
        key: 'id'
      }
    },
    gas_type_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'gas_types',
        key: 'id'
      }
    },
    equipment_type_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'equipment_types',
        key: 'id'
      }
    },
    equipment_brand_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'equipment_brands',
        key: 'id'
      }
    },
    installation_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    location_precision: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    serial_number: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    remote_control_number: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    gas_weight: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    is_plancher_chauffant: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_plancher_raffraichssant: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_radiateurs: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ventilo_convecteurs: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    has_leak_detection: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    last_leak_detection: {
      type: DataTypes.DATE,
      allowNull: true
    },
    next_leak_detection: {
      type: DataTypes.DATE,
      allowNull: true
    },
    unite_exterieur_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'equipment_ext_types',
        key: 'id'
      }
    },
    equipment_model: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    leak_detection_periodicity: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ballon_capacite: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    unite_interieur_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'equipment_int_types',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'equipments',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "equipments_parent_equipment_id_foreign",
        using: "BTREE",
        fields: [
          { name: "parent_equipment_id" },
        ]
      },
      {
        name: "equipments_site_id_foreign",
        using: "BTREE",
        fields: [
          { name: "site_id" },
        ]
      },
      {
        name: "equipments_nfc_tag_id_foreign",
        using: "BTREE",
        fields: [
          { name: "nfc_tag_id" },
        ]
      },
      {
        name: "equipments_gas_type_id_foreign",
        using: "BTREE",
        fields: [
          { name: "gas_type_id" },
        ]
      },
      {
        name: "equipments_equipment_type_id_foreign",
        using: "BTREE",
        fields: [
          { name: "equipment_type_id" },
        ]
      },
      {
        name: "equipments_equipment_brand_id_foreign",
        using: "BTREE",
        fields: [
          { name: "equipment_brand_id" },
        ]
      },
      {
        name: "equipments_exterieur_types",
        using: "BTREE",
        fields: [
          { name: "unite_exterieur_type_id" },
        ]
      },
      {
        name: "equipments_int_types",
        using: "BTREE",
        fields: [
          { name: "unite_interieur_type_id" },
        ]
      },
    ]
  });
};
