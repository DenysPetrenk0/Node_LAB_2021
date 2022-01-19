import DataAggregator from '../iterator/interface';
import DataBaseIterator from '../iterator/iterator'
import IUser from '../model/interfase';
import ILesson from '../model/lesson/interface';
import { v4 as uuidv4 } from 'uuid';

export default class DataBase implements DataAggregator {
    private static instance: DataBase;
    private users: IUser[] = [];
    private lessons: ILesson[] = [];

    public static getInstance(): DataBase {
        if (!DataBase.instance) {
            DataBase.instance = new DataBase();
        }

        return DataBase.instance;
    }

    public addUser(user: IUser): IUser[] {
        user.id = uuidv4();
        this.users.push(user);
        return this.users;
    }

    public getUsers(): IUser[] {
        return this.users;
    }

    public removeUser(value: string, key: string): IUser[] {
        return this.users = this.users.filter((item: IUser) => item[key] !== value)
    }

    public createLesson(lesson: ILesson): ILesson[] {
        lesson.id = uuidv4();
        this.lessons.push(lesson);
        return this.lessons;
    }

    public updateLesson(lessonName: string, key: string, newValue: string): ILesson[] {
        this.lessons.map((item: ILesson) => {
            if (item.lessonName === lessonName) {
                item[key] = newValue
            }
        })
        return this.lessons;
    }

    public deleteLesson(name: string): ILesson[] {
        return this.lessons = this.lessons = this.lessons.filter((item: ILesson) => item.lessonName !== name)
    }

    public getLessons(): ILesson[] {
        return this.lessons;
    }

    public createIterator(): DataBaseIterator {
        return new DataBaseIterator(this)
    }
}
