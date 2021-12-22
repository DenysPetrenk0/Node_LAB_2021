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
    DataBase.prototype.removeUser = function (value, key) {
        return this.users = this.users.filter(function (item) { return item[key] !== value; });
    };
    DataBase.prototype.createIterator = function () {
        return new DataBaseIterator(this);
    };
    return DataBase;
}());
var DataBaseIterator = /** @class */ (function () {
    function DataBaseIterator(users) {
        this.users = users;
        this.position = 0;
    }
    DataBaseIterator.prototype.current = function (index) {
        if (index === void 0) { index = this.position; }
        this.position = index;
        return this.users.getUsers()[index];
    };
    DataBaseIterator.prototype.getUsers = function () {
        return this.users.getUsers();
    };
    DataBaseIterator.prototype.next = function () {
        this.position++;
    };
    DataBaseIterator.prototype.prev = function () {
        this.position--;
    };
    return DataBaseIterator;
}());
var UserBuilder = /** @class */ (function () {
    function UserBuilder(role) {
        this.role = role;
    }
    UserBuilder.prototype.setFirstName = function (value) {
        return this.firstName = value;
    };
    UserBuilder.prototype.setSecondName = function (value) {
        return this.secondName = value;
    };
    UserBuilder.prototype.setAge = function (value) {
        return this.age = value;
    };
    UserBuilder.prototype.setGender = function (value) {
        return this.gender = value;
    };
    UserBuilder.prototype.build = function () {
        return new User(this);
    };
    UserBuilder.prototype.getUser = function () {
        return this;
    };
    return UserBuilder;
}());
var User = /** @class */ (function () {
    function User(build) {
        this.firstName = build.user.firstName;
        this.secondName = build.user.secondName;
        this.age = build.user.age;
        this.gender = build.user.gender;
    }
    return User;
}());
var AdminUserBuilder = /** @class */ (function (_super) {
    __extends(AdminUserBuilder, _super);
    function AdminUserBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdminUserBuilder.prototype.setAdmin = function (isAdmin) {
        this.isAdmin = isAdmin;
    };
    return AdminUserBuilder;
}(UserBuilder));
var TeacherUserBuilder = /** @class */ (function (_super) {
    __extends(TeacherUserBuilder, _super);
    function TeacherUserBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TeacherUserBuilder.prototype.setSpecialization = function (value) {
        this.specialization = value;
        return this;
    };
    TeacherUserBuilder.prototype.setGrade = function (value) {
        this.grade = value;
        return this;
    };
    return TeacherUserBuilder;
}(UserBuilder));
var StudentUserBuilder = /** @class */ (function (_super) {
    __extends(StudentUserBuilder, _super);
    function StudentUserBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StudentUserBuilder.prototype.setFaculty = function (value) {
        this.faculty = value;
        return this;
    };
    StudentUserBuilder.prototype.setCourse = function (value) {
        this.course = value;
        return this;
    };
    return StudentUserBuilder;
}(UserBuilder));
var admin = new AdminUserBuilder('admin');
admin.setFirstName('KJHKYJ');
admin.setSecondName('IYIYIIII');
admin.setAge(25);
admin.setGender('male');
admin.setAdmin(true);
var addAdmin = admin.getUser();
DataBase.getInstance().addUser(addAdmin);
var teacher = new TeacherUserBuilder('teacher');
teacher.setFirstName('asdasdasdasd');
teacher.setSecondName('asdadasdasdas');
teacher.setAge(25);
teacher.setGender('male');
teacher.setGrade('grade');
teacher.setSpecialization('specialization');
var addTeacher = teacher.getUser();
DataBase.getInstance().addUser(addTeacher);
var student = new StudentUserBuilder("student");
student.setFirstName('p[o[o');
student.setSecondName('qqq');
student.setAge(44);
student.setGender('male');
student.setCourse(4);
student.setFaculty('Electromechanical Engeneering');
var addStudent = student.getUser();
DataBase.getInstance().addUser(addStudent);
console.log(DataBase.getInstance().getUsers());
DataBase.getInstance().removeUser('qqq', 'secondName');
console.log(DataBase.getInstance().getUsers());
var iterator = DataBase.getInstance().createIterator();
var dataLength = iterator.getUsers().length;
var i = 0;
while (i < dataLength) {
    var valueData = iterator.current();
    console.log(valueData.firstName);
    iterator.next();
    i++;
}
