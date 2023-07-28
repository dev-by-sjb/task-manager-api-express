import Task from "../models/task.js";

const getTaskController = async (req, res) => {
  try {
    const allTasks = await Task.find().select("-__v");

    res.status(200).json({
      success: true,
      message: "All Tasks retrieved",
      data: allTasks,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default getTaskController;
