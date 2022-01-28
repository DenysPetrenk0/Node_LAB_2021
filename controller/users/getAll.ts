import { Request, Response } from "express";
import redis from "redis";

const client = redis.createClient();
const db = require("../../dataBase/db");

async function getUser(req: Request, res: Response) {
  const data = await client.get("users");
  if (data) {
    res.status(200).send(data);
  } else {
    await db.query("SELECT * FROM users", (err: any, data: any) => {
      if (err) {
        return console.log(err);
      }
      client.set("users", data.rows);
      res.status(200).json(data.rows);
    });
  }
}

module.exports = getUser;
