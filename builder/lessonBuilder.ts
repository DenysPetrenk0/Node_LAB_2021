import Lesson from "../lesson/lesson";

export default class LessonBuilder {

    protected lesson = new Lesson();

    constructor(lessonName: string) {
        this.lesson.lessonName = lessonName;
    }

    public setCourse(value: number) {
        return this.lesson.course = value;
    }

    public setTeacher(value: string) {
        return this.lesson.teacher = value;
    }

    public build() {
        return this.lesson;
    }
}