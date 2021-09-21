import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
  email: {type: String},
  nickname: {type: String},
  password: {type: String},
  profile_image: {type: String},
})