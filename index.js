import express from "express";
import dotenv from "dotenv";
import connectDB from './config/db.js';
import authRouter from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
connectDB();

const app = express()
const port = process.env.PORT || 3001;

// Body parse 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send(" Maxifit server is running")
});

app.use('/api/users', userRoutes);

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});