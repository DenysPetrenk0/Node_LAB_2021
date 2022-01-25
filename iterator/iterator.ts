import IUser from '../model/interfase';
import DataAggregator from './interface'

export default class DataBaseIterator {
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