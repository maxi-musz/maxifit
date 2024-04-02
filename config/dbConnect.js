import mongoose from "mongoose";
import colors from "colors";

const dbConnect = () => {
    try {
        const conn = mongoose.connect(process.env.MONGO_URI)
        if (conn) {
            console.log("Successfully connected to database...".yellow)
        }
    } catch (error) {
        console.log("Database connection failed".red, error)
        throw new Error(error)
    }
}

export default dbConnect;
