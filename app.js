"use strict";
/** @format */
class DataBase {
    constructor() {
        this.users = [];
    }
    static getInstance() {
        if (!DataBase.instance) {
            DataBase.instance = new DataBase();
        }
        return DataBase.instance;
    }
    addUser(user) {
        this.users.push(user);
    }
    getUsers() {
        return this.users;
    }
    removeUser(value, key) {
        return this.users.filter((item) => item[key] !== value);
    }
    createIterator() {
        return new DataBaseIterator(this);
    }
}
class DataBaseIterator {
    constructor(users) {
        this.users = users;
        this.position = 0;
    }
    current(index = this.position) {
        this.position = index;
        return this.users.getUsers()[index];
    }
    next() {
        this.position++;
    }
    prev() {
        this.position--;
    }
}
class UserBuilder {
    constructor(role) {
        this.role = role;
    }
    setFirstName(value) {
        return this.firstName = value;
    }
    setSecondName(value) {
        return this.secondName = value;
    }
    setAge(value) {
        return this.age = value;
    }
    setGender(value) {
        return this.gender = value;
    }
    build() {
        return new User(this);
    }
    getUser() {
        return this;
    }
}
class User {
    constructor(build) {
        this.firstName = build.firstName;
        this.secondName = build.secondName;
        this.age = build.age;
        this.gender = build.gender;
    }
}
class Admin extends UserBuilder {
    setAdmin(isAdmin) {
        this.isAdmin = isAdmin;
    }
}
class Teacher extends UserBuilder {
    setSpecialization(value) {
        this.specialization = value;
        return this;
    }
    setGrade(value) {
        this.grade = value;
        return this;
    }
}
class Student extends UserBuilder {
    setFaculty(value) {
        this.faculty = value;
        return this;
    }
    setCourse(value) {
        this.course = value;
        return this;
    }
}
const admin = new Admin('admin');
admin.setFirstName('KJHKYJ');
admin.setSecondName('IYIYIIII');
admin.setAge(25);
admin.setGender('male');
admin.setAdmin(true);
admin.build();
const addAdmin = admin.getUser();
DataBase.getInstance().addUser(addAdmin);
const teacher = new Teacher('teacher');
teacher.setFirstName('asdasdasdasd');
teacher.setSecondName('asdadasdasdas');
teacher.setAge(25);
teacher.setGender('male');
teacher.setGrade('grade');
teacher.setSpecialization('specialization');
teacher.build();
const addTeacher = teacher.getUser();
DataBase.getInstance().addUser(addTeacher);
const student = new Student("student");
student.setFirstName('p[o[o');
student.setSecondName('qqq');
student.setAge(44);
student.setGender('male');
student.setCourse(4);
student.setFaculty('Electromechanical Engeneering');
student.build();
const addStudent = student.getUser();
DataBase.getInstance().addUser(addStudent);
console.log(DataBase.getInstance().getUsers());
console.log(DataBase.getInstance().removeUser('qqq', 'secondName'));
const iterator = DataBase.getInstance().createIterator();
console.log(iterator.current());
iterator.next();
console.log(iterator.current());
