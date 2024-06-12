import { DataTypes, Model } from 'sequelize';
import sequelize from '../../db_connector.mjs';
import { InterventionsQuestionTypesModel } from './InterventionsQuestionTypesModel.mjs';

export class InterventionsDepQuestionsModel extends Model {
  static async getDependentQuestions(parent_q_id) {
    const res = await this.findAll({
      where: { parent_q_id },
      include: [
        {
          model: InterventionsQuestionTypesModel,
          as: 'ChildQuestion',
          attributes: ['id', 'name', 'type'],
        },
      ],
    });

    return res.map((r) => ({
      options: r.dataValues.options,
      ...r.dataValues.ChildQuestion.dataValues,
    }));
  }
}

InterventionsDepQuestionsModel.init(
  {
    parent_q_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: 'intervention_question_types',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    child_q_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: 'intervention_question_types',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    options: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: 'InterventionsDepQuestionsModel',
    tableName: 'interventions_dep_questions',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);
