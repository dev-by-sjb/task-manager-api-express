import Task from "../models/task.js";

const getOneTaskController = async (req, res) => {
  try {
    const { id: taskID } = req.params;

    //query database
    const task = await Task.findById(taskID).select("-__v");

    //if no task is found with taskID
    if (!task) {
      return res.status(404).json({
        success: false,
        message: `No Task found with ID: '${taskID}'`,
      });
    }

    //if task has been found
    return res.status(200).json({
      success: true,
      message: `Task with ID of '${taskID}' found`,
      data: { task },
    });
  } catch (error) {
    //syntax error with taskID
    res.status(500).json({ error });
  }
};

export default getOneTaskController;
