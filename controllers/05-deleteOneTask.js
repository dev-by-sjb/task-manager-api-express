import { createCustomError } from "../errors/error-class.js";
import { asyncWrapper } from "../middleware/async-wrapper-middleware.js";
import Task from "../models/task.js";

const deleteOneTaskController = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;

  //query database
  const deletedTask = await Task.findByIdAndDelete(taskID);

  //if no task is found with taskID
  if (!deletedTask) {
    // const error = new Error(`There is no Task with ID: ${taskID}`);
    // error.status = 404;

    return next(createCustomError(`There is no Task with ID: ${taskID}`, 404));
  }

  //if task has been deleted
  return res
    .status(200)
    .json({ message: `Task with ID: "${taskID}" has been deleted` });
});

export default deleteOneTaskController;
