import { testLesson } from "../test/testLesson";
import { testUser } from "../test/testUser";
import DataBase from "./dataBase";

describe('dataBase', () => {
    const dataBase = DataBase.getInstance();
    const addTestUser = testUser.build()
    const addTestLesson = testLesson.build()

    it('should return an object users', () => {
        const data = dataBase.getUsers()
        expect(dataBase.addUser(addTestUser)).toBe(data)
    });
    it('should return an object users without the remote user', () => {
        const removeUser = dataBase.removeUser('firstName', 'test');
        const data = dataBase.getUsers()
        expect(removeUser).toBe(data)
    });
    it('should return an object lessons', () => {
        const createLesson = dataBase.createLesson(addTestLesson);
        const data = dataBase.getLessons();

        expect(createLesson).toBe(data);
    });
    it('should return an object lessons', () => {
        const updateLesson = dataBase.updateLesson('test', 'teacher', 'UUU UUU');
        const data = dataBase.getLessons();

        expect(updateLesson).toBe(data);
    });
    it('should return an object lessons without the remote lesson', () => {
        const deleteLesson = dataBase.deleteLesson('test');
        const data = dataBase.getLessons();

        expect(deleteLesson).toBe(data);
    });
})