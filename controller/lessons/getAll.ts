import { Request, Response } from "express";
import redis from "redis";

const client = redis.createClient();
const db = require("../../dataBase/db");

async function getAll(req: Request, res: Response): Promise<void> {
  const data = await client.get("lessons");
  if (data) {
    res.status(200).send(data);
  } else {
    await db.query("SELECT * FROM lessons", (err: any, data: any) => {
      if (err) {
        return console.log(err);
      }
      client.set("lessons", data.rows);
      res.status(200).json(data.rows);
    });
  }
}

module.exports = getAll;
