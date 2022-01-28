import { Request, Response } from "express";
import redis from "redis";

const client = redis.createClient();
const db = require("../../dataBase/db");

async function getOneUser(req: Request, res: Response) {
  const data = await client.get("user");
  if (data) {
    res.status(200).send(data);
  } else {
    const id = req.params.id;
    const user = await db.query("SELECT * FROM users WHERE id=$1", [id]);
    client.set("user", user.rows);
    res.status(200).json(user.rows);
  }
}
module.exports = getOneUser;
