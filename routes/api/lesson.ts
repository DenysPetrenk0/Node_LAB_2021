const express = require("express");
const router = express.Router();
const pool = require("../../dataBase/db");

router.get("/", (req, res, next) => {
    try {
        pool.query("SELECT * FROM lessons", (err, data) => {
            if (err) {
                return console.log(err);
            }
            res.json({
                status: "success",
                code: 200,
                data: {
                    result: data,
                },
            });
        });
    } catch (error) {
        next(error);
    }
});

router.patch("/lesson:id", (req, res, next) => {
    try {
        const id = req.params.id;
        pool.query("UPDATE lessons WHERE id=?", [id], (err, data) => {
            if (err) {
                console.log(err);
            }
            if (!id) {
                return res.status(404).json({
                    status: "error",
                    code: 404,
                    message: "Not found",
                });
            }
            res.json({
                status: "success",
                code: "200",
                data: data,
            });
        });
    } catch (error) {
        next(error);
    }
});

router.post("/lesson", (req, res, next) => {
    try {
        if (!req.body) {
            return res.sendStatus(400);
        }
        const lessonName = req.body.lessonName;
        const course = req.body.course;
        const teacher = req.body.teacher;

        pool.query("INSERT INTO lessons (lessonName, course, teacher) VALUES (?,?,?)",
            [
                lessonName,
                course,
                teacher,
            ], (err, data) => {
                if (err) {
                    return console.log(err);
                }
                res.status(201).json({
                    status: "success",
                    code: 201,
                    data: data,
                });
            });
    } catch (error) {
        next(error);
    }
});

module.exports = router;