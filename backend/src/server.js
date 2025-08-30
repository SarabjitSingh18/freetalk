import express from "express"
import { ENV } from "./config/env.js"
import { connectDB } from "./config/db.js"
import {clerkMiddleware} from "@clerk/express"
import {serve} from "inngest/express"
import { functions, inngest } from "./config/inngest.js";
const app = express()

app.use(express.json())
app.use(clerkMiddleware())


app.use("/api/inngest", serve({ client: inngest, functions }));


const startServer = async () => {
  try {
    await connectDB();
    if (ENV.NODE_ENV !== "production") {
      app.listen(ENV.PORT, () => {
        console.log("Server has started on the port and running:", ENV.PORT);
      });
    }
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1); // Exit the process with a failure code
  }
};

startServer()

export default app