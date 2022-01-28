import express from "express";
const { users: ctrl } = require("../../controller");
const { wrapper } = require("../../middlewares");

const router = express.Router();

router.post("/", wrapper(ctrl.add));
router.get("/", wrapper(ctrl.getAll));
router.get("/:id", wrapper(ctrl.getByID));
router.put("/", wrapper(ctrl.update));
router.delete("/:id", wrapper(ctrl.remove));

module.exports = router;
