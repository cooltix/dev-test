import { Schema } from 'mongoose';
import mongoose from 'app/mongoose';

const UserSchema = new Schema({
  name: {
    type: String
  }
});

const UserModel = mongoose.model('User', UserSchema);
export default UserModel;
