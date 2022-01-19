import User from '../model/user';

export default class UserBuilder {

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