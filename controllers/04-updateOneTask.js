import { createCustomError } from "../errors/error-class.js";
import { asyncWrapper } from "../middleware/async-wrapper-middleware.js";
import Task from "../models/task.js";

const updateOneTaskController = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;

  //query database
  const updateOneTask = await Task.findByIdAndUpdate(taskID, req.body, {
    new: true,
    runValidators: true,
    select: ["-__v"],
  });

  //if no task is found with taskID
  if (!updateOneTask) {
    return next(createCustomError(`No task with ID: ${taskID}`, 404));
  }

  //if task has been successfully updated
  res.status(200).json(updateOneTask);
});

export default updateOneTaskController;
