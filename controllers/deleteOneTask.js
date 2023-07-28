import Task from "../models/task.js";

const deleteOneTaskController = async (req, res) => {
  try {
    const { id: taskID } = req.params;

    const deletedTask = await Task.findByIdAndDelete(taskID);

    //if no task is found with taskID
    if (!deletedTask) {
      return res.status(404).json({
        success: false,
        message: `There is no Task with ID: ${taskID}`,
      });
    }

    //if task has been deleted
    return res.status(200).json({
      success: true,
      message: `Task with ID: ${taskID} has been deleted`,
      status: "success",
      data: null,
    });
  } catch (error) {
    //syntax error with taskID
    // console.error(error);
    res.status(500).json({ success: false, message: error });
  }
};

export default deleteOneTaskController;
