/** @format */

import DataBase from './dataBase/dataBase';
import LessonBuilder from './builder/lessonBuilder';
import TeacherUserBuilder from './user/teacher/teacher';
import StudentUserBuilder from './user/student/student';
import AdminUserBuilder from './user/admin/admin';

const admin = new AdminUserBuilder('admin');
admin.setFirstName('KJHKYJ');
admin.setSecondName('IYIYIIII');
admin.setAge(25);
admin.setGender('male');
admin.setAdmin(true);
const addAdmin = admin.build();
DataBase.getInstance().addUser(addAdmin);

const teacher = new TeacherUserBuilder('teacher');
teacher.setFirstName('asdasdasdasd');
teacher.setSecondName('asdadasdasdas');
teacher.setAge(25);
teacher.setGender('male');
teacher.setGrade('grade');
teacher.setSpecialization('specialization');
const addTeacher = teacher.build();
DataBase.getInstance().addUser(addTeacher);

const student = new StudentUserBuilder("student");
student.setFirstName('p[o[o');
student.setSecondName('qqq');
student.setAge(44);
student.setGender('male');
student.setCourse(4);
student.setFaculty('Electromechanical Engeneering')
const addStudent = student.build();
DataBase.getInstance().addUser(addStudent);



console.log(DataBase.getInstance().getUsers());
DataBase.getInstance().removeUser('qqq', 'secondName')
console.log(DataBase.getInstance().getUsers());

const iterator = DataBase.getInstance().createIterator()


const dataLength = iterator.getUsers().length;
let i = 0;
while (i < dataLength) {
    let valueData = iterator.current()
    console.log(valueData.firstName);
    iterator.next()
    i++;
}

const english = new LessonBuilder('English');
english.setCourse(5);
english.setTeacher('UIIOOJL KJHK');
const addEnglish = english.build();
DataBase.getInstance().createLesson(addEnglish);

const mathem = new LessonBuilder('Mathematics');
mathem.setCourse(3);
mathem.setTeacher('OIUO KJHKJ');
const addMathem = mathem.build();
DataBase.getInstance().createLesson(addMathem);

console.log(DataBase.getInstance().getLessons());
DataBase.getInstance().updateLesson('English', 'teacher', 'UUU UUU');
console.log(DataBase.getInstance().getLessons());
