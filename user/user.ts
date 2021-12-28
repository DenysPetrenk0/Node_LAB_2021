import IUser from "./interfase";

export default class User implements IUser {

    firstName: string;
    secondName: string;
    age: number;
    gender: string;
    role: string;
    id: string;
}