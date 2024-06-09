const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('equipment_types', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    endroit_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'equipment_endroit',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_finalite: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_gas: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_int: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_ext: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'equipment_types',
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
        name: "fk_endroit",
        using: "BTREE",
        fields: [
          { name: "endroit_id" },
        ]
      },
    ]
  });
};
