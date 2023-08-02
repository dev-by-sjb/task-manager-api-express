import { createCustomError } from "../errors/error-class.js";
import { asyncWrapper } from "../middleware/async-wrapper-middleware.js";
import Task from "../models/task.js";

const getOneTaskController = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;

  //query database
  const task = await Task.findById(taskID).select("-__v");

  //if no task is found with taskID
  if (!task) {
    return next(createCustomError(`No Task found with ID: '${taskID}'`, 404));
  }

  //if task has been found
  return res.status(200).json(task);
});

export default getOneTaskController;
