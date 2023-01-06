import { Router } from 'express';
import { index, hello } from '../default';

const router = Router();

router.get('/', index);
router.get('/hello/:name', hello);

export default router;