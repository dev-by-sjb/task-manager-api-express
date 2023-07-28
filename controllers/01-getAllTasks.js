import Task from "../models/task.js";

const getTaskController = async (req, res) => {
  try {
    const allTasks = await Task.find().select("-__v");

    res.status(200).json(allTasks);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export default getTaskController;
