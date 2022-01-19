import UserBuilder from "../../builder/userBuilder";

export default class TeacherUserBuilder extends UserBuilder {

    public setSpecialization(value: string) {
        this.user.specialization = value;
        return this;
    }

    public setGrade(value: string) {
        this.user.grade = value;
        return this;
    }
}