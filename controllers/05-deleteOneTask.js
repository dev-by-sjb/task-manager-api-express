import { asyncWrapper } from "../middleware/async-wrapper-middleware.js";
import Task from "../models/task.js";

const deleteOneTaskController = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;

  //query database
  const deletedTask = await Task.findByIdAndDelete(taskID);

  //if no task is found with taskID
  if (!deletedTask) {
    return res.status(404).json({
      message: `There is no Task with ID: ${taskID}`,
    });
  }

  //if task has been deleted
  return res
    .status(200)
    .json({ message: `Task with ID: "${taskID}" has been deleted` });
});

export default deleteOneTaskController;
