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

    public removeUser(value: string, key: string) {
        this.users.filter(item => item`.${key}` !== value)
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
    access: string;

    constructor(
        userFirstName: string,
        userSecondName: string,
        userAge: number,
        userGender: string,

    ) {
        super(userFirstName, userSecondName, userAge, userGender);
    }

    setAccess(value: string) {
        this.access = value;
        return this;
    }
}

class Teacher extends User {
    specialization: string;
    grade: string;

    constructor(
        userFirstName: string,
        userSecondName: string,
        userAge: number,
        userGender: string,
    ) {
        super(userFirstName, userSecondName, userAge, userGender);
    }

    public setSpecialization(value: string) {
        this.specialization = value;
        return this;
    }

    public setGrade(value: string) {
        this.grade = value;
        return this;
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
    ) {
        super(userFirstName, userSecondName, userAge, userGender);
    }

    public setFaculty(value: string) {
        this.faculty = value;
        return this;
    }

    public setCourse(value: number) {
        this.course = value;
        return this;
    }
}

const admin = new Administrators("Sdfd", "Sdfdf", 123, "female");
admin.setAccess('access');
admin.addUser();

const student = new Student("Jon", "Fred", 28, "male",);
student.setCourse(4);
student.setFaculty('Electromechanical Engeneering')
student.addUser();

const teacher = new Teacher('Name', 'surname', 56, 'female');
teacher.setGrade('grade');
teacher.setSpecialization('specialization');
teacher.addUser();

console.log(DataBase.getInstance().getUsers());
