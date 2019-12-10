import { Schema } from 'mongoose';
import mongoose from 'app/mongoose';

const StorySchema = new Schema(
  {
    headline: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: false
    }
  }
);

const StoryModel = mongoose.model('Story', StorySchema);
export default StoryModel;
