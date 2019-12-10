import UserModel from './user.model';

const getUser = async userId => {
  const user = await UserModel.findById(userId);
  return user;
};

const createUser = async user => {
  const document = { name: user.name };
  const result = await UserModel.create(document);
  return result;
};

const updateUser = async user => {
  const { id, ...update } = user;
  const result = await UserModel.findByIdAndUpdate(id, update);
  return result;
};

export default {
  getUser,
  createUser,
  updateUser
};
