import DataBase from "../dataBase/dataBase"
import { testUser } from "../test/testUser";

describe('iterator', () => {
    const dataBase = DataBase.getInstance();
    const addTestUser = testUser.build();
    dataBase.addUser(addTestUser);
    const iterator = DataBase.getInstance().createIterator();

    it('get the intex of the current element', () => {
        const data = iterator.getUsers()
        expect(iterator.current()).toBe(data[0])
    });
})