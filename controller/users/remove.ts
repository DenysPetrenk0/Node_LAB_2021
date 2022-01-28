import { Request, Response } from "express";
const db = require("../../dataBase/db");

async function deleteUser(req: Request, res: Response) {
  const id = req.params.id;
  const user = await db.query("DELETE FROM users WHERE id = $1", [id]);
  res.json(user.rows);
}

module.exports = deleteUser;
