import express from "express"
import { ENV } from "./config/env.js"
import { connectDB } from "./config/db.js"
import {clerkMiddleware} from "@clerk/express"


const app = express()

app.use(express.json())
app.use(clerkMiddleware())


const startServer = async () => {
    try {
        await connectDB()
        if (ENV.NODE_ENV !== "production") {
            app.listen(ENV.PORT, () => {
                console.log("Server started on port " + ENV.PORT);
            });
        } else {
            app.listen(80, () => {
                console.log("Server started on port 80");
            });
        }
    } catch (error) {
        console.error("Error starting server:", error);
        process.exit(1); // Exit with a non-zero status code
    }
}

startServer()

export default app