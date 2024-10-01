import express from 'express';

export const router = express.Router();

import { clientsRouter } from './routes/clientsRoutes.mjs';
import { equipmentsRouter } from './routes/equipmentRouter.mjs';
import { sitesRouter } from './routes/sitesRoutes.mjs';
import { interventionsRouter } from './routes/interventionRouter.mjs';

router.use('/clients', clientsRouter);
router.use('/equipments', equipmentsRouter);
router.use('/sites', sitesRouter);
router.use('/interventions', interventionsRouter);

router.get('/', async (req, res) => {
  try {
    res.status(200).json({ msg: 'ok' });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});
