import { Request, Response } from "express";
const db = require("../../dataBase/db");

async function removeLesson(req: Request, res: Response): Promise<void> {
  const id = req.params.id;
  const lesson = await db.query("DELETE FROM lessons WHERE id = $1", [id]);
  res.json(lesson.rows);
}

module.exports = removeLesson;
