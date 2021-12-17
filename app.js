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
    return Administrators;
}(User));
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(userFirstName, userSecondName, userAge, userGender, faculty, studentCourse) {
        var _this = _super.call(this, userFirstName, userSecondName, userAge, userGender) || this;
        _this.course = studentCourse;
        _this.faculty = faculty;
        return _this;
    }
    return Teacher;
}(User));
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(userFirstName, userSecondName, userAge, userGender, faculty, studentCourse) {
        var _this = _super.call(this, userFirstName, userSecondName, userAge, userGender) || this;
        _this.course = studentCourse;
        _this.faculty = faculty;
        return _this;
    }
    return Student;
}(User));
var admin = new Administrators("Sdfd", "Sdfdf", 123, "female");
admin.addUser();
var student = new Student("Jon", "Fred", 28, "male", 'Electromechanical Engeneering', 4);
student.addUser();
console.log(DataBase.getInstance().getUsers());
