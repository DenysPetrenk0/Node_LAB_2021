export default interface IUser {
    firstName: string;
    secondName: string;
    age: number;
    gender: string;
    role: string;
    isAdmin?: boolean;
    specialization?: string;
    course?: number;
    faculty?: string;
    id: string;
}