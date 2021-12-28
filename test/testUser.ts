import AdminUserBuilder from "../user/admin/admin";

export const testUser = new AdminUserBuilder('test');
testUser.setFirstName('test');
testUser.setSecondName('test');
testUser.setAge(5);
testUser.setGender('test');
testUser.setAdmin(false);