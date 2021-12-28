import UserBuilder from './userBuilder'

describe('bulder', () => {
    const builder = new UserBuilder('admin');

    it('has `firstName` user.firstName', () => {

        expect(builder.setFirstName('aaaaa')).toBe('aaaaa')
    });
    it('has `setSecondName`  user.secondName', () => {

        expect(builder.setSecondName('bbbbb')).toBe('bbbbb')
    });
    it('has `setAge`  user.age', () => {

        expect(builder.setAge(24)).toBe(24)
    });
    it('has `setGender`  user.gender', () => {

        expect(builder.setGender('male')).toBe('male')
    });
})