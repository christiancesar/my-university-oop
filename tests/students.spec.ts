import { StudentFactory } from "../src/entities/factories/student-factory.js";
import { StudentsSeed } from "../src/database/repositories/in-memory/seeds/students-seed.js";

describe("Student", () => {
  it("should be able create a new student", () => {
    const student = StudentFactory.make({ name: "Jhon Doe Doe" });
    expect(student).toEqual(expect.objectContaining({ name: "Jhon Doe Doe" }));
  });

  it("should be able seed students", () => {
    const students = StudentsSeed.execute();
    const studentsLength = students.length;
    expect(students).toHaveLength(studentsLength);
  });

  it("should be able return a student email institutional automatic when created a new student", () => {
    const student = StudentFactory.make({ name: "Jhon Doe" });
    expect(student.getEmail()).toEqual("jhon.doe@aluno.ufr.edu.br");
  });

  it("should be able return a student registration automatic when created a new student", () => {
    const student = StudentFactory.make({ name: "Jhon Doe" });
    expect(student.getRegistration()).toBeTypeOf("string");
  });
});
