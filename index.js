import express from "express";
import dotenv from "dotenv";
import connectDB from './config/db.js';
import authRouter from "./routes/authRoutes.js"

dotenv.config();
connectDB();

const app = express()
const port = process.env.PORT || 3001;

// Body parse 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/user", authRouter)


app.use("/", (req, res) => {
    res.send(" Maxifit server is running")
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});