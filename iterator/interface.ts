import IUser from "../user/interfase";

export default interface DataAggregator {
    getUsers(): IUser[];
}
