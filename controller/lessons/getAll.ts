import { Request, Response } from "express";
const db = require("../../dataBase/db");

async function getAll(req: Request, res: Response): Promise<void> {
  await db.query("SELECT * FROM lessons", (err: any, data: any) => {
    if (err) {
      return console.log(err);
    }
    res.status(200).json(data.rows);
  });
}

module.exports = getAll;
