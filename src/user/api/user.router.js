import { Router } from 'express';
import userController from 'user/api/user.controller';

const router = Router();
router.get('/:id', userController.getUser);

export default router;
