import Task from "../models/task.js";

const deleteOneTaskController = async (req, res) => {
  try {
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
    return res.status(200).send();
  } catch (error) {
    //syntax error with taskID
    res.status(500).json({ message: error });
  }
};

export default deleteOneTaskController;
