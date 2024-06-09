const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('interventions_questions', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    question_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'intervention_question_types',
        key: 'id'
      }
    },
    response: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    intervention_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'interventions',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'interventions_questions',
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
      {
        name: "fk_intervention_question_types",
        using: "BTREE",
        fields: [
          { name: "question_type_id" },
        ]
      },
      {
        name: "fk_intervention_id",
        using: "BTREE",
        fields: [
          { name: "intervention_id" },
        ]
      },
    ]
  });
};
