import { Request, Response } from "express";
import redis from "redis";

const client = redis.createClient();
const db = require("../../dataBase/db");

async function createLesson(req: Request, res: Response): Promise<void> {
  const { lessonName, course, teacher } = req.body;
  const data = await client.get("lesson");
  if (data) {
    res.status(200).send(data);
  } else {
    const newLesson = await db.query(
      `INSERT INTO lessons (
      LessonName, 
      Course, 
      Teacher 
      ) VALUES ($1, $2, $3) RETURNING *`,
      [lessonName, course, teacher]
    );
    client.set("lesson", newLesson.rows[0]);
    res.status(200).json(newLesson.rows[0]);
  }
}

module.exports = createLesson;
