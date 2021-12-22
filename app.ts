/** @format */

interface IUser {
    firstName: string;
    secondName: string;
    role: string;
    age: number;
    gender: string;
    isAdmin?: boolean;
    specialization?: string;
    course?: number;
    faculty?: string;
}

class DataBase implements DataAggregator {
    private static instance: DataBase;
    private users: IUser = [];

    public static getInstance(): DataBase {
        if (!DataBase.instance) {
            DataBase.instance = new DataBase();
        }

        return DataBase.instance;
    }

    public addUser(user: IUser): void {
        this.users.push(user);
    }

    public getUsers(): IUser {
        return this.users;
    }

    public removeUser(value: string, key: string): IUser {
        return this.users.filter((item: IUser) => item[key] !== value)
    }

    public createIterator(): DataBaseIterator {
        return new DataBaseIterator(this)
    }
}

interface DataAggregator {
    getUsers(): object;
}

class DataBaseIterator {
    private position: number = 0;

    constructor(private users: DataAggregator) { }

    public current(index: number = this.position) {
        this.position = index;
        return this.users.getUsers()[index];
    }

    public dataLenght() {
        return this.users.getUsers()
    }

    public next(): void {
        this.position++;
    }

    public prev(): void {
        this.position--;
    }
}

class UserBuilder {

    firstName: string;
    secondName: string;
    age: number;
    gender: string;
    protected role: string

    constructor(role: string) {
        this.role = role
    }

    public setFirstName(value: string) {
        return this.firstName = value;
    }

    public setSecondName(value: string) {
        return this.secondName = value;
    }

    public setAge(value: number) {
        return this.age = value;
    }

    public setGender(value: string) {
        return this.gender = value;
    }

    public build() {
        return new User(this)
    }

    public getUser() {
        return this;
    }

}

class User {

    firstName: string;
    secondName: string;
    age: number;
    gender: string;

    constructor(build: UserBuilder) {
        this.firstName = build.firstName;
        this.secondName = build.secondName;
        this.age = build.age;
        this.gender = build.gender;
    }
}

class Admin extends UserBuilder {

    isAdmin: boolean

    public setAdmin(isAdmin: boolean) {
        this.isAdmin = isAdmin
    }
}

class Teacher extends UserBuilder {

    specialization: string;
    grade: string;

    public setSpecialization(value: string) {
        this.specialization = value;
        return this;
    }

    public setGrade(value: string) {
        this.grade = value;
        return this;
    }
}

class Student extends UserBuilder {

    course: number;
    faculty: string;

    public setFaculty(value: string) {
        this.faculty = value;
        return this;
    }

    public setCourse(value: number) {
        this.course = value;
        return this;
    }
}


const admin = new Admin('admin');
admin.setFirstName('KJHKYJ');
admin.setSecondName('IYIYIIII');
admin.setAge(25);
admin.setGender('male');
admin.setAdmin(true)
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
student.setFaculty('Electromechanical Engeneering')
student.build();
const addStudent = student.getUser();
DataBase.getInstance().addUser(addStudent);

console.log(DataBase.getInstance().getUsers());
// console.log(DataBase.getInstance().removeUser('qqq', 'secondName'));


const iterator = DataBase.getInstance().createIterator()

const dataLength = iterator.dataLenght().length;
let i = 0;
while (i < dataLength) {
    let valueData = iterator.current()
    console.log(valueData.firstName);
    iterator.next()
    i++;
}