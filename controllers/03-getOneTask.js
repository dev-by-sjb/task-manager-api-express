import { asyncWrapper } from "../middleware/async.js";
import Task from "../models/task.js";

const getOneTaskController = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;

  //query database
  const task = await Task.findById(taskID).select("-__v");

  //if no task is found with taskID
  if (!task) {
    return res.status(404).json({
      message: `No Task found with ID: '${taskID}'`,
    });
  }

  //if task has been found
  return res.status(200).json(task);
});

export default getOneTaskController;
