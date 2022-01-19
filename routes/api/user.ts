import express from "express";
const router = express.Router();
import operations from '../../model';


router.get("/", (req, res, next) => {
    try {
        const contacts = operations.getUsers();
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

router.post("/admin", (req, res, next) => {
    try {
        const result = operations.createAdmin(req.body);
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

router.post("/teacher", (req, res, next) => {
    try {
        const result = operations.createTeacher(req.body);
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

router.post("/student", (req, res, next) => {
    try {
        const result = operations.createStudent(req.body);
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

router.delete("/user", (req, res, next) => {
    try {
        const { userId } = req.params;
        const result = operations.deleteUser(userId);
        if (!result) {
            return res.status(404).json({
                status: "error",
                code: 404,
                message: "Not found",
            });
        }
        res.json({
            status: "success",
            code: 200,
            message: "Contact deleted",
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
