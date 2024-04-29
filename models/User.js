import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists'],
    required: [true, 'Email is required'],
  },
  username: {
    type: String,
    required: [true, 'Username is required'],
  },
  image: {
    type: String
  },
  bookmarks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Property', // referencing the Model 
    }
  ]
}, {
  timestamps: true // automatically creates created_at and updated_at
});

const User = models.user || model('User', UserSchema);

export default User;
