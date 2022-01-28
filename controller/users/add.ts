import { Request, Response } from "express";
const db = require("../../dataBase/db");

async function createUser(req: Request, res: Response): Promise<void> {
  const { firstName, secondName, age, gender, role, faculty, course } =
    req.body;
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
  res.json(newUser.rows[0]);
}

module.exports = createUser;
