/** @format */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DataBase = /** @class */ (function () {
    function DataBase() {
        this.users = [];
    }
    DataBase.getInstance = function () {
        if (!DataBase.instance) {
            DataBase.instance = new DataBase();
        }
        return DataBase.instance;
    };
    DataBase.prototype.addUser = function (user) {
        this.users.push(user);
    };
    DataBase.prototype.getUsers = function () {
        return this.users;
    };
    return DataBase;
}());
var User = /** @class */ (function () {
    function User(userFirstName, userSecondName, userAge, userGender) {
        this.firstName = userFirstName;
        this.secondName = userSecondName;
        this.age = userAge;
        this.gender = userGender;
    }
    User.prototype.addUser = function () {
        DataBase.getInstance().addUser(this);
    };
    return User;
}());
var Administrators = /** @class */ (function (_super) {
    __extends(Administrators, _super);
    function Administrators(userFirstName, userSecondName, userAge, userGender) {
        return _super.call(this, userFirstName, userSecondName, userAge, userGender) || this;
    }
    Administrators.prototype.setAccess = function (value) {
        this.access = value;
        return this;
    };
    return Administrators;
}(User));
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(userFirstName, userSecondName, userAge, userGender) {
        return _super.call(this, userFirstName, userSecondName, userAge, userGender) || this;
    }
    Teacher.prototype.setSpecialization = function (value) {
        this.specialization = value;
        return this;
    };
    Teacher.prototype.setGrade = function (value) {
        this.grade = value;
        return this;
    };
    return Teacher;
}(User));
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(userFirstName, userSecondName, userAge, userGender) {
        return _super.call(this, userFirstName, userSecondName, userAge, userGender) || this;
    }
    Student.prototype.setFaculty = function (value) {
        this.faculty = value;
        return this;
    };
    Student.prototype.setCourse = function (value) {
        this.course = value;
        return this;
    };
    return Student;
}(User));
var admin = new Administrators("Sdfd", "Sdfdf", 123, "female");
admin.setAccess('access');
admin.addUser();
var student = new Student("Jon", "Fred", 28, "male");
student.setCourse(4);
student.setFaculty('Electromechanical Engeneering');
student.addUser();
var teacher = new Teacher('Name', 'surname', 56, 'female');
teacher.setGrade('grade');
teacher.setSpecialization('specialization');
teacher.addUser();
console.log(DataBase.getInstance().getUsers());
