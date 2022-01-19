import ILesson from "./interface";

export default class Lesson implements ILesson {

    lessonName: string;
    course: number;
    teacher: string;
    id: string;
}