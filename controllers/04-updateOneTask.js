// import Task from "../models/task.js";

// const updateOneTaskController = async (req, res) => {
//   const { id } = req.params ? req.params;
//   const { body } = req.body;

//   try {
//     const updateOneTask = await Task.findById(id);

//   } catch (error) {
//     console.log(error.message);
//     res.status(400).json({success:false, message:`Invalid patch request`})
//   }
// };

// export default updateOneTaskController;
