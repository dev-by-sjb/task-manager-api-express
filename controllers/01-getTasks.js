import Task from "../models/task.js";

const getTaskController = async (req, res) => {
  try {
    let allTasks = await Task.find();
    allTasks = allTasks.map(({ _id, name, desc, completed, createdAt }) => {
      return {
        id: _id,
        name,
        desc,
        completed,
        createdAt,
      };
    });

    res.status(200).json({
      success: true,
      message: "All Tasks retrieved",
      data: allTasks,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default getTaskController;
