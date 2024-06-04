import { DataTypes, Model } from 'sequelize';
import sequelize from '../../db_connector.mjs';

export class EquipmentsModel extends Model {}

EquipmentsModel.init(
  {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    parent_equipment_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'equipments',
        key: 'id',
      },
    },
    site_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'sites',
        key: 'id',
      },
    },
    produit_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'equipment_produit',
        key: 'id',
      },
    },
    endroit_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'equipment_endroit',
        key: 'id',
      },
    },
    location_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'equipment_locations',
        key: 'id',
      },
    },
    nfc_tag_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'nfc_tags',
        key: 'id',
      },
    },
    gas_type_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'gas_types',
        key: 'id',
      },
    },
    equipment_type_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'equipment_types',
        key: 'id',
      },
    },
    equipment_brand_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'equipment_brands',
        key: 'id',
      },
    },
    installation_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    location_precision: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    serial_number: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    remote_control_number: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    gas_weight: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    is_plancher_chauffant: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    is_plancher_raffraichssant: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    is_radiateurs: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    ventilo_convecteurs: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    has_leak_detection: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0,
    },
    last_leak_detection: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    next_leak_detection: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    unite_exterieur_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'equipment_ext_types',
        key: 'id',
      },
    },
    equipment_model: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    leak_detection_periodicity: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    ballon_capacite: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    unite_interieur_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'equipment_int_types',
        key: 'id',
      },
    },
    finalites: {
      type: DataTypes.VIRTUAL,
      get() {
        return {
          is_plancher_chauffant: this.getDataValue('is_plancher_chauffant'),
          is_plancher_raffraichssant: this.getDataValue(
            'is_plancher_raffraichssant'
          ),
          is_radiateurs: this.getDataValue('is_radiateurs'),
          ventilo_convecteurs: this.getDataValue('ventilo_convecteurs'),
        };
      },
      set(value) {
        this.setDataValue('is_plancher_chauffant', value.is_plancher_chauffant);
        this.setDataValue(
          'is_plancher_raffraichssant',
          value.is_plancher_raffraichssant
        );
        this.setDataValue('is_radiateurs', value.is_radiateurs);
        this.setDataValue('ventilo_convecteurs', value.ventilo_convecteurs);
      },
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
    tableName: 'equipments',
    modelName: 'EquipmentModel',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);
