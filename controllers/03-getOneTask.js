import Task from "../models/task.js";

const getOneTaskController = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findById(taskID).select("-__v");

    if (!task) {
      return res.status(404).json({
        success: false,
        message: `No Task found with ID: '${taskID}'`,
      });
    }

    return res.status(200).json({
      success: true,
      message: `Task with ID of '${taskID}' found`,
      data: { task },
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error });
  }
};

export default getOneTaskController;
