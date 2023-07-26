import Task from "../models/task.js";

const getOneTaskController = async (req, res) => {
  const { id } = req.params;

  try {
    const { _id, name, desc, completed, createdAt } = await Task.findById(id);

    return res.status(200).json({
      success: true,
      message: `Task with ID of '${id}' has been found`,
      data: { id: _id, name, desc, completed, createdAt },
    });
  } catch (error) {
    console.log(error.message);
    res
      .status(404)
      .json({ success: false, message: `No Task found with ID: '${id}'` });
  }
};

export default getOneTaskController;
