import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide unique Username"],
    unique: [true, "Username exists!"],
  },
  password: {
    type: String,
    required: [true, "Please provide a Password"],
    unique: false,
  },
  email: {
    type: String,
    required: [true, "Please provide an unique email"],
    unique: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  mobile: {
    type: Number,
  },
  address: {
    type: String,
  },
  profile: {
    type: String,
  },
});


export default mongoose.model('User', UserSchema)