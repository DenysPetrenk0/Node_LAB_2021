const express = require("express");
const cors = require("cors");

const userRouter = require("./routes/api/user");
const lessonRouter = require("./routes/api/lesson");
const app = express();


app.use(cors());
app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/lesson", lessonRouter)

app.use((req, res) => {
    res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
    const { status = 500, message = "Server error" } = err;
    res.status(status).json({ message });
});

module.exports = app;
