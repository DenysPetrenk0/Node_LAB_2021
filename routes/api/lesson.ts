import express from "express";
const router = express.Router();
import operations from '../../model';

router.get("/", (req, res, next) => {
    try {
        const contacts = operations.getLessons();
        res.json({
            status: "success",
            code: 200,
            data: {
                result: contacts,
            },
        });
    } catch (error) {
        next(error);
    }
});

router.patch("/:lessonId", (req, res, next) => {
    try {
        const result = operations.updateLesson(req.body);
        if (!result) {
            return res.status(404).json({
                status: "error",
                code: 404,
                message: "Not found",
            });
        }
        res.json({
            status: "success",
            code: "200",
            data: {
                result,
            },
        });
    } catch (error) {
        next(error);
    }
});

router.post("/lesson", (req, res, next) => {
    try {
        const result = operations.createLesson(req.body);
        res.status(201).json({
            status: "success",
            code: 201,
            data: {
                result,
            },
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router;