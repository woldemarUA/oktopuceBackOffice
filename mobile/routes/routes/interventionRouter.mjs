import express from 'express';

import db from '../../db/associations/associationsMobile.mjs';
import { extractId } from '../../utlis/extractId.mjs';

import { interventionQuestions } from '../../utlis/interventionsQuestions.mjs';

export const interventionsRouter = express.Router();

interventionsRouter.get('/eq-id/:id', async (req, res) => {
  const id = extractId(req);

  try {
    const interventions = await db.InterventionsModel.findAll({
      where: { equipment_id: id },
      include: { all: true },
    });
    res.status(200).json({ msg: 'ok', data: interventions });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});
interventionsRouter.get('/question-id/:id', async (req, res) => {
  const id = extractId(req);

  try {
    const result = await db.InterventionsQuestionsModel.findAll({
      where: { intervention_id: id },
      include: { all: true },
    });
    const sorted = await interventionQuestions(result);
    const questions = [];

    for (const item of sorted) {
      questions.push(item.dataValues);
    }
    for (const question of questions) {
      question.name = question.question_name.name;
      delete question.question_name;
    }
    res.status(200).json({ msg: 'ok', data: questions });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

interventionsRouter.get('/', async (req, res) => {
  try {
    const interventions = await db.InterventionsModel.findAll({
      include: { all: true },
    });
    res.status(200).json({ msg: 'ok', data: interventions });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});
