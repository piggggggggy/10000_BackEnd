import mongoose from "mongoose";

export const studySchema = new mongoose.Schema({
  nickname: {type: String},
  weekly_time: {type: Date},
  check: {type: Boolean}
})