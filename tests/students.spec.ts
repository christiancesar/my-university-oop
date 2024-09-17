import { Student } from "../src/entities/student.js";
import { StudentFactory } from "../src/factories/student-factory.js";
import { InMemoryStudentsRepository } from "../src/repositories/in-memory-students-repository.js";
import { StudentsSeed } from "../src/seeds/students-seed.js";

describe("Student", () => {
  it("should be able create a new student", () => {
    const student = StudentFactory.make({ name: "Jhon Doe Doe" });
    expect(student).toEqual(expect.objectContaining({ name: "Jhon Doe" }));
  });

  it("should be able seed students", () => {
    const students = StudentsSeed.execute();
    const studentsLength = students.length;
    expect(students).toHaveLength(37);
  });

  it("should be able return a student email institutional automatic when created a new student", () => {
    const student = StudentFactory.make({ name: "Jhon Doe" });
    expect(student.getEmail()).toEqual("jhon.doe@aluno.ufr.edu.br");
  });

  it("should be able return a student registration automatic when created a new student", () => {
    const student = StudentFactory.make({ name: "Jhon Doe" });
    expect(student.getRegistration()).toBeTypeOf("string");
  });

  it("should be able search a student by name", () => {
    const inMemoryStudentsRepository = new InMemoryStudentsRepository();
    const students = StudentsSeed.execute();

    for (let student of students) {
      inMemoryStudentsRepository.save(student);
    }
    const studentFilter = inMemoryStudentsRepository.findByName("daniel");
    expect(studentFilter).toHaveLength(3);
    expect(studentFilter).toMatchObject([
      { name: "Daniel Castilho de Oliveira" },
      { name: "Danielly Santos Nunes de Oliveira" },
      { name: "Daniel Veloso da Silva" },
    ]);
  });
});
