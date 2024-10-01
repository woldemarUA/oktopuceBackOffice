import { InterventionsQuestionsModel } from '../../entities/Interventions/InterventionsQuestionsModel.mjs';
import { InterventionsDepQuestionsModel } from '../../entities/Interventions/InterventionsDepQuestionsModel.mjs';

export const getQuestions = async (intervention_id) => {
  const questions = await InterventionsQuestionsModel.getQuestions(
    intervention_id
  );

  for (const question of questions) {
    if (question.parent) {
      const res = await InterventionsDepQuestionsModel.getParentByChildId(
        question.question_type_id
      );

      for (const q of questions) {
        if (q.question_type_id === res.id) {
          q.children = [];
          q.label = question.parent;
          for (const br of questions) {
            if (br.parent === question.parent) q.children.push(br);
          }
        }
      }
    }
  }

  const reply = questions.filter((q) => !q.parent);

  return reply;
  // return questions;
};
