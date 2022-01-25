import LessonBuilder from "../builder/lessonBuilder";
import DataBase from "../dataBase/dataBase";
import AdminUserBuilder from "./admin/admin";
import StudentUserBuilder from "./student/student";
import TeacherUserBuilder from "./teacher/teacher";

function createAdmin(
    user: {
        name: string,
        firstName: string,
        secondName: string,
        age: number,
        gender: string,
        isAdmin: boolean,
    }) {
    const admin = new AdminUserBuilder(user.name);
    admin.setFirstName(user.firstName);
    admin.setSecondName(user.secondName);
    admin.setAge(user.age);
    admin.setGender(user.gender);
    admin.setAdmin(user.isAdmin);
    const addAdmin = admin.build();
    DataBase.getInstance().addUser(addAdmin);
    return admin;
}

function createTeacher(
    user: {
        name: string,
        firstName: string,
        secondName: string,
        age: number,
        gender: string,
        grade: string,
        specialization: string
    }
) {
    const teacher = new TeacherUserBuilder(user.name);
    teacher.setFirstName(user.firstName);
    teacher.setSecondName(user.secondName);
    teacher.setAge(user.age);
    teacher.setGender(user.gender);
    teacher.setGrade(user.grade);
    teacher.setSpecialization(user.specialization);
    const addTeacher = teacher.build();
    DataBase.getInstance().addUser(addTeacher);
    return teacher;
}

function createStudent(
    user: {
        name: string,
        firstName: string,
        secondName: string,
        age: number,
        gender: string,
        course: number,
        faculty: string
    }
) {
    const student = new StudentUserBuilder(user.name);
    student.setFirstName(user.firstName);
    student.setSecondName(user.secondName);
    student.setAge(user.age);
    student.setGender(user.gender);
    student.setCourse(user.course);
    student.setFaculty(user.faculty)
    const addStudent = student.build();
    DataBase.getInstance().addUser(addStudent);
    return student;
}

function createLesson(lessonObj: { name: string, course: number, teacher: string }) {
    const lesson = new LessonBuilder(lessonObj.name);
    lesson.setCourse(lessonObj.course);
    lesson.setTeacher(lessonObj.teacher);
    const addLesson = lesson.build();
    DataBase.getInstance().createLesson(addLesson);
    return lesson;
}

function getUsers() {
    return DataBase.getInstance().getUsers()
}

function deleteUser(User: { value: string, key: string }) {
    return DataBase.getInstance().removeUser(User.value, User.key)
}

function getLessons() {
    return DataBase.getInstance().getLessons()
}

function updateLesson(lesson: { lessonName: string, key: string, newValue: string }) {
    DataBase.getInstance().updateLesson(lesson.lessonName, lesson.key, lesson.newValue);
}

function deleteLesson(lesson: { value: string }) {
    return DataBase.getInstance().deleteLesson(lesson.value)
}



export default {
    createAdmin,
    createStudent,
    createTeacher,
    getUsers,
    deleteUser,
    createLesson,
    getLessons,
    updateLesson,
    deleteLesson
}