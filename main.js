import "dotenv/config";
import express from "express";
import { connectDB } from "./db/connectDB.js";

//import from routes
import errorHandler from "./middleware/error-handler-middleware.js";
import notFound from "./middleware/not-found.js";
import tasks from "./routes/tasks.js";

const app = express();
const PORT = process.env.PORT;

//for static files
// app.use(express.static("./public"));

//main entry route
app.use("/api/v1/tasks", express.json(), tasks);

//not found routes
app.use(notFound);

//error handler
app.use(errorHandler);

const start = async () => {
  try {
    await connectDB(process.env.URI);
    console.log("\n\nDB connection is active....\n");
    app.listen(PORT, () => {
      console.log(`Server is listening on port: ${PORT}.....`);
    });
  } catch (err) {
    console.log(err.message);
  }
};

start();
