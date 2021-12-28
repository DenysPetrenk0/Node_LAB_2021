import UserBuilder from "../../builder/userBuilder";

export default class AdminUserBuilder extends UserBuilder {

    public setAdmin(isAdmin: boolean) {
        this.user.isAdmin = isAdmin
    }
}
