/** @format */

interface IUser {
    firstName: string;
    secondName: string;
    age: number;
    gender: string;
    role: string;
    isAdmin?: boolean;
    specialization?: string;
    course?: number;
    faculty?: string;
}

class DataBase implements DataAggregator {
    private static instance: DataBase;
    private users: IUser[] = [];

    public static getInstance(): DataBase {
        if (!DataBase.instance) {
            DataBase.instance = new DataBase();
        }

        return DataBase.instance;
    }

    public addUser(user: IUser): void {
        this.users.push(user);
    }

    public getUsers(): IUser[] {
        return this.users;
    }

    public removeUser(value: string, key: string): IUser[] {
        return this.users = this.users.filter((item: IUser) => item[key] !== value)
    }

    public createIterator(): DataBaseIterator {
        return new DataBaseIterator(this)
    }
}

interface DataAggregator {
    getUsers(): IUser[];
}

class DataBaseIterator {
    private position: number = 0;

    constructor(private users: DataAggregator) { }

    public current(index: number = this.position) {
        this.position = index;
        return this.users.getUsers()[index];
    }

    public getUsers() {
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

    protected user = new User()

    constructor(role: string) {
        this.user.role = role
    }

    public setFirstName(value: string) {
        return this.user.firstName = value;
    }

    public setSecondName(value: string) {
        return this.user.secondName = value;
    }

    public setAge(value: number) {
        return this.user.age = value;
    }

    public setGender(value: string) {
        return this.user.gender = value;
    }

    public build() {
        return this.user
    }

}

class User implements IUser {

    firstName: string;
    secondName: string;
    age: number;
    gender: string;
    role: string

}

class AdminUserBuilder extends UserBuilder {

    public setAdmin(isAdmin: boolean) {
        this.user.isAdmin = isAdmin
    }
}

class TeacherUserBuilder extends UserBuilder {

    public setSpecialization(value: string) {
        this.user.specialization = value;
        return this;
    }

    public setGrade(value: string) {
        this.user.grade = value;
        return this;
    }
}

class StudentUserBuilder extends UserBuilder {

    public setFaculty(value: string) {
        this.user.faculty = value;
        return this;
    }

    public setCourse(value: number) {
        this.user.course = value;
        return this;
    }
}


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