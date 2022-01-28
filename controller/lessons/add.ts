import { Request, Response } from "express";
const db = require("../../dataBase/db");

async function createLesson(req: Request, res: Response): Promise<void> {
  const { lessonName, course, teacher } = req.body;
  const newLesson = await db.query(
    `INSERT INTO lessons (
      LessonName, 
      Course, 
      Teacher 
      ) VALUES ($1, $2, $3) RETURNING *`,
    [lessonName, course, teacher]
  );
  res.json(newLesson.rows[0]);
}

module.exports = createLesson;
