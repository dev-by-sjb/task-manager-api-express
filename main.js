import "dotenv/config";
import express from "express";
import { connectDB } from "./db/connectDB.js";

//import from routes
import tasks from "./routes/tasks.js";

const app = express();
const PORT = process.env.PORT;

//main entry route
app.use("/api/v1/tasks", express.json(), tasks);

const start = async () => {
  try {
    await connectDB(process.env.URI);
    console.log("DB connection is active....\n");
    app.listen(PORT, () => {
      console.log(`Server is listening on port: ${PORT}.....`);
    });
  } catch (err) {
    console.log(err.message);
  }
};

start();
