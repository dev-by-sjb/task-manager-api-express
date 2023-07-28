import Task from "../models/task.js";

const updateOneTaskController = async (req, res) => {
  try {
    const { id: taskID } = req.params;

    const updateOneTask = await Task.findByIdAndUpdate(taskID, req.body, {
      new: true,
      runValidators: true,
      select: ["-__v"],
    });

    if (!updateOneTask) {
      return res
        .status(404)
        .json({ success: false, message: `No task with ID: ${taskID}` });
    }

    res.status(200).json({
      success: true,
      message: `Task with ID:${taskID} has been updated`,
      data: updateOneTask,
    });
  } catch (error) {
    // console.log(error.message);
    res.status(500).json({ success: false, message: error });
  }
};

export default updateOneTaskController;
