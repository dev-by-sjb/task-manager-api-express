import { asyncWrapper } from "../middleware/async.js";
import Task from "../models/task.js";

const createTaskController = asyncWrapper(async (req, res) => {
  const body = req.body;

  const task = await Task.create(body);

  return res.status(201).json(task);
});

export default createTaskController;
