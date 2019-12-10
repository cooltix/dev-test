import { Router } from 'express';
import storyController from './story.controller';

const router = Router();
router.post('/', storyController.postStory);
router.get('/:id', storyController.getStory);

export default router;
