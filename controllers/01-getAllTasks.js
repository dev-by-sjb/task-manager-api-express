import { asyncWrapper } from "../middleware/async.js";
import Task from "../models/task.js";

const getAllTaskController = asyncWrapper(async (req, res) => {
  const allTasks = await Task.find().select("-__v");

  res.status(200).json(allTasks);
});

export default getAllTaskController;
