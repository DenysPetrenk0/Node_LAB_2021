import express from "express";
const { lessons: ctrl } = require("../../controller");
const { wrapper } = require("../../middlewares");

const router = express.Router();

router.post("/", wrapper(ctrl.addLesson));
router.get("/", wrapper(ctrl.getAllLessons));
router.delete("/:id", wrapper(ctrl.removeLesson));

module.exports = router;
