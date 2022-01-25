import LessonBuilder from "./lessonBuilder";

describe('lesson', () => {
    const builder = new LessonBuilder('dasdadasd');

    it('has `course` number course', () => {

        expect(builder.setCourse(2)).toBe(2)
    });
    it('has `setTeacher`  teacher name', () => {

        expect(builder.setTeacher('bbbbb')).toBe('bbbbb')
    });
})