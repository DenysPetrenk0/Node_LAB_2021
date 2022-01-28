import express, { Request, Response } from "express";
import cors from "cors";

const usersRouter = require("./routes/api/users.router");
const lessonsRouter = require("./routes/api/lessons.router");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", usersRouter);
app.use("/api/lessons", lessonsRouter);

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err: any, req: Request, res: Response, next: any) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
