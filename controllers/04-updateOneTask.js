import Task from "../models/task.js";

const updateOneTaskController = async (req, res) => {
  try {
    const { id: taskID } = req.params;

    //query database
    const updateOneTask = await Task.findByIdAndUpdate(taskID, req.body, {
      new: true,
      runValidators: true,
      select: ["-__v"],
    });

    //if no task is found with taskID
    if (!updateOneTask) {
      return res.status(404).json({ message: `No task with ID: ${taskID}` });
    }

    //if task has been successfully updated
    res.status(200).json(updateOneTask);
  } catch (error) {
    //syntax error with taskID
    res.status(500).json({ message: error });
  }
};

export default updateOneTaskController;
