import express, { Request, Response } from "express";
const appServer = require("../app");

const PORT = process.env.PORT || 3000;

appServer.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
