const express = require("express");
const router = express.Router();
const pool = require("../../dataBase/db");

router.get("/", (req, res, next) => {
    try {
        pool.query("SELECT * FROM users", (err, data) => {
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

router.post("/admin", (req, res, next) => {
    try {
        if (!req.body) {
            return res.sendStatus(400);
        }
        const firstName = req.body.firstName;
        const secondName = req.body.secondName;
        const age = req.body.age;
        const gender = req.body.gender;
        const role = req.body.role;
        const isAdmin = req.body.isAdmin;

        pool.query("INSERT INTO users (firstName, secondName, age, gender, role, isAdmin) VALUES (?,?,?,?,?,?)",
            [
                firstName,
                secondName,
                age,
                gender,
                role,
                isAdmin
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

router.post("/teacher", (req, res, next) => {
    try {
        if (!req.body) {
            return res.sendStatus(400);
        }
        const firstName = req.body.firstName;
        const secondName = req.body.secondName;
        const age = req.body.age;
        const gender = req.body.gender;
        const role = req.body.role;
        const specialization = req.body.specialization;
        const grade = req.body.grade;

        pool.query("INSERT INTO users (firstName, secondName, age, gender, role, specialization, grade) VALUES (?,?,?,?,?,?,?)",
            [
                firstName,
                secondName,
                age,
                gender,
                role,
                specialization,
                grade
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

router.post("/student", (req, res, next) => {
    try {
        if (!req.body) {
            return res.sendStatus(400);
        }
        const firstName = req.body.firstName;
        const secondName = req.body.secondName;
        const age = req.body.age;
        const gender = req.body.gender;
        const role = req.body.role;
        const faculty = req.body.faculty;
        const course = req.body.course;

        pool.query("INSERT INTO users (firstName, secondName, age, gender, role, faculty, course) VALUES (?,?,?,?,?,?,?)",
            [
                firstName,
                secondName,
                age,
                gender,
                role,
                faculty,
                course
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

router.delete("/user/:id", (req, res, next) => {
    try {
        const id = req.params.id;
        pool.query("DELETE FROM users WHERE id=?", [id], (err, data) => {
            if (err) {
                console.log(err);
            }
        });
        if (!id) {
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
