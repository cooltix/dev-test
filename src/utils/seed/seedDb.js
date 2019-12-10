import UserModel from 'user/user.model';
import StoryModel from 'story/story.model';
import users from './users.json';
import stories from './stories.json';

const toOperation = document => ({ insertOne: { document } });

const seedDb = async () => {
  const userOperations = users.map(toOperation);
  await UserModel.bulkWrite(userOperations);

  const storyOperations = stories.map(toOperation);
  await StoryModel.bulkWrite(storyOperations);
};

export default seedDb;
