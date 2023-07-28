import express from "express";
import getTaskController from "../controllers/01-getAllTasks.js";
import createTaskController from "../controllers/02-createTask.js";
import getOneTaskController from "../controllers/03-getOneTask.js";
import updateOneTaskController from "../controllers/04-updateOneTask.js";
import deleteOneTaskController from "../controllers/05-deleteOneTask.js";

const router = express.Router();

//routes for api
router.route("/").get(getTaskController).post(createTaskController);
router
  .route("/:id")
  .get(getOneTaskController)
  .patch(updateOneTaskController)
  .delete(deleteOneTaskController);

export default router;
