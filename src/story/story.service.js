import StoryModel from './story.model';

const getStory = async storyId => {
  const story = await StoryModel.findById(storyId);
  return story;
};

const createStory = async story => {
  const document = {
    headline: story.headline,
    description: story.description,
    user: story.userId
  };
  const result = await StoryModel.create(document);
  return result;
};

const updateStory = async story => {
  const { id, ...update } = story;
  const result = await StoryModel.findByIdAndUpdate(id, update);
  return result;
};

export default {
  getStory,
  createStory,
  updateStory
};
