import { Router } from 'express';
import { getRecommended } from '../controller/recommendedController.js';

const router = Router();

router.get('/recommended', getRecommended);

export default router;
