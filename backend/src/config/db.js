import mongoose from "mongoose";
import { ENV } from "./env.js";
export const connectDB = async()=>{
    try {
        if(!ENV.MONGO_URI){
            throw new Error("MONGO_URI is not defined please check env!!!")
        }
        const conn = await mongoose.connect(ENV.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`)
        
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
    process.exit(1);
    }
}