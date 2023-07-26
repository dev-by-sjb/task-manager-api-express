import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must provide name"],
    trim: true,
    maxLength: [25, "Name can not be more than 25 characters"],
  },
  desc: {
    type: String,
    trim: true,
    required: [false, "Must provide Desc"],
    default: null,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
});

const Task = mongoose.model("Task", TaskSchema);

export default Task;
