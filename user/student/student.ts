import UserBuilder from "../../builder/userBuilder";

export default class StudentUserBuilder extends UserBuilder {

    public setFaculty(value: string) {
        this.user.faculty = value;
        return this;
    }

    public setCourse(value: number) {
        this.user.course = value;
        return this;
    }
}