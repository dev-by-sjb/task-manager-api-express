import Task from "../models/task.js";

const createTaskController = async (req, res) => {
  try {
    const body = req.body;

    const task = await Task.create(body);

    return res.status(201).json(task);
  } catch (error) {
    //syntax error with creation of task
    return res.status(500).json({ message: error });
  }
};

export default createTaskController;
