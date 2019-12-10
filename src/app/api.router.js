import { Router } from 'express';
import storyRouter from 'story/api/story.router';
import userRouter from 'user/api/user.router';

const apiRouter = Router();
apiRouter.use('/stories', storyRouter);
apiRouter.use('/users', userRouter);

export default apiRouter;
