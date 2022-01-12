const fs = require("fs");
const path = require("path");

import LessonBuilder from "../builder/lessonBuilder";
import DataBase from "../dataBase/dataBase";


const filePath: string = path.join(__dirname, "./file.csv");

function getFile(): void {
  fs.readFile(filePath, "utf8", function (error, data) {
    if (error) {
      throw error;
    }
    const dataArr: Array<string> = data.split(/\r?\n/);
    checkFile(dataArr);
  });
}

function checkFile(array: Array<string>) {
  if (
    array.length > 10 &&
    array[0].includes("name" && "course" && "lecture" && "date")
  ) {
    array.forEach((element) => {
      const value = element.split(";");
      addLesson(value);
    });
  }
}

function addLesson(array: Array<string>) {
  const newLesson = new LessonBuilder(array[0]);
  const course = Number(array[1])
  newLesson.setCourse(course);
  newLesson.setTeacher(array[2]);
  newLesson.build();
  DataBase.getInstance().getLessons();
}

getFile();