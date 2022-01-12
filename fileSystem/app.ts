const fs = require("fs/promises");
const path = require("path");

import LessonBuilder from "../builder/lessonBuilder";
import DataBase from "../dataBase/dataBase";


const filePath: string = path.join(__dirname, "./csv.txt");

function getFilePath(): string {
    try {
        const data = fs.readFileSync(filePath);
        return data.toString();
    } catch (error) {
        console.log(error.message);
        throw error;
    }
}

function checkFile() {
    try {
        const result: string = getFilePath();
        if (result.includes("name" && "course" && "lecture" && "date")) {
            return result;
        }
    } catch (error) {
        console.log(error.message);
    }
}

function addLesson() {
    const result = checkFile();
    const newLesson = new LessonBuilder(result.name);
    newLesson.setCourse(result.course);
    newLesson.setTeacher(result.lecture);
    newLesson.build();
    DataBase.getInstance().getLessons();
}
