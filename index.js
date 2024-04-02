import express from "express";
import dotenv from "dotenv";

const app = express()
const port = process.env.PORT || 3001;

app.use("/", (req, res) => {
    res.send(" Maxifit server is running")
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});