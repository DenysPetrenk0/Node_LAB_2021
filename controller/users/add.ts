import { Request, Response } from "express";
import redis from "redis";

const client = redis.createClient();
const db = require("../../dataBase/db");

async function createUser(req: Request, res: Response): Promise<void> {
  const { firstName, secondName, age, gender, role, faculty, course } =
    req.body;
  const data = await client.get("user");
  if (data) {
    res.status(200).send(data);
  } else {
    const newUser = await db.query(
      `INSERT INTO users (
      FirstName, 
      SecondName, 
      Age, 
      Gender, 
      Role, 
      Faculty, 
      Course
      ) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [firstName, secondName, age, gender, role, faculty, course]
    );
    client.set("user", newUser.rows[0]);
    res.json(newUser.rows[0]);
  }
}

module.exports = createUser;
