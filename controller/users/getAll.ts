import { Request, Response } from "express";
const db = require("../../dataBase/db");

async function getUser(req: Request, res: Response) {
  await db.query("SELECT * FROM users", (err: any, data: any) => {
    if (err) {
      return console.log(err);
    }
    res.status(200).json(data.rows);
  });
}

module.exports = getUser;
