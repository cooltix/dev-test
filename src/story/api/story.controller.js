import storyService from '../story.service';

const getStory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const story = await storyService.getStory(id);
    return res.status(200).send(story);
  } catch (error) {
    next(error);
  }
};

const postStory = async (req, res, next) => {
  try {
    const story = req.body;
    const newStory = await storyService.createStory(story);
    return res.status(200).send(newStory);
  } catch (error) {
    next(error);
  }
};

export default {
  getStory,
  postStory
};
