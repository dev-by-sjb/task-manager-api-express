import express from "express";
import getTaskController from "../controllers/01-getTasks.js";
import createTaskController from "../controllers/02-createTask.js";
import getOneTaskController from "../controllers/03-getOneTask.js";

const router = express.Router();

router.route("/").get(getTaskController).post(createTaskController);
router.route("/:id").get(getOneTaskController);

export default router;
