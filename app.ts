/** @format */

class DataBase {
    private static instance: DataBase;
    private users: any[] = [];

    public static getInstance(): DataBase {
        if (!DataBase.instance) {
            DataBase.instance = new DataBase();
        }

        return DataBase.instance;
    }

    public addUser(user: any) {
        this.users.push(user);
    }

    public getUsers(): any {
        return this.users;
    }
}

class User {
    firstName: string;
    secondName: string;
    age: number;
    gender: string;

    constructor(
        userFirstName: string,
        userSecondName: string,
        userAge: number,
        userGender: string
    ) {
        this.firstName = userFirstName;
        this.secondName = userSecondName;
        this.age = userAge;
        this.gender = userGender;
    }

    public addUser() {
        DataBase.getInstance().addUser(this);
    }
}

class Administrators extends User {

    constructor(
        userFirstName: string,
        userSecondName: string,
        userAge: number,
        userGender: string,

    ) {
        super(userFirstName, userSecondName, userAge, userGender);

    }
}

class Teacher extends User {
    course: number;
    faculty: string;

    constructor(
        userFirstName: string,
        userSecondName: string,
        userAge: number,
        userGender: string,
        faculty: string,
        studentCourse: number

    ) {
        super(userFirstName, userSecondName, userAge, userGender);
        this.course = studentCourse;
        this.faculty = faculty;
    }
}


class Student extends User {
    course: number;
    faculty: string;

    constructor(
        userFirstName: string,
        userSecondName: string,
        userAge: number,
        userGender: string,
        faculty: string,
        studentCourse: number

    ) {
        super(userFirstName, userSecondName, userAge, userGender);
        this.course = studentCourse;
        this.faculty = faculty;
    }
}

const admin = new Administrators("Sdfd", "Sdfdf", 123, "female");
admin.addUser()
const student = new Student("Jon", "Fred", 28, "male", 'Electromechanical Engeneering', 4);
student.addUser();

console.log(DataBase.getInstance().getUsers());
