import IUser from "../model/interfase";

export default interface DataAggregator {
    getUsers(): IUser[];
}
