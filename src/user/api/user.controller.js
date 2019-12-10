import userService from 'user/user.service';

const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userService.getUser(id);
    return res.status(200).send(user);
  } catch (error) {
    next(error);
  }
};

export default {
  getUser
};
