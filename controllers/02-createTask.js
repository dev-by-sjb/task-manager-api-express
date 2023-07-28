import Task from "../models/task.js";

const createTaskController = async (req, res) => {
  try {
    const body = req.body;

    const { _id, name, desc, completed, createdAt } = await Task.create(body);

    return res.status(201).json({
      success: true,
      message: "Task created",
      data: { id: _id, name, desc, completed, createdAt },
    });
  } catch (error) {
    //syntax error with creation of task
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export default createTaskController;
