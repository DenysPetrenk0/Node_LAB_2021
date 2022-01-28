import { Request, Response } from "express";
const db = require("../../dataBase/db");

async function updateUser(req: Request, res: Response) {
  const { id, firstName, secondName, age, gender, role, faculty, course } =
    req.body;
  const user = await db.query(
    `UPDATE users SET 
      FirstName = $1, 
      SecondName = $2, 
      Age = $3, 
      Gender = $4, 
      Role = $5, 
      Faculty = $6, 
      Course  = $7
      WHERE id = $8
      RETURNING *`,
    [firstName, secondName, age, gender, role, faculty, course, id]
  );
  res.json(user.rows);
}

module.exports = updateUser;
