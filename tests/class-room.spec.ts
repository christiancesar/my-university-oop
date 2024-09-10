import { ClassRoomFactory } from "../src/factories/class-room-factory.js";
import { DisciplineFactory } from "../src/factories/discipline-factory.js";
import { InMemoryDisciplinesRepository } from "../src/repositories/in-memory-disciplines-repository.js";
import { InMemoryStudentsRepository } from "../src/repositories/in-memory-students-repository.js";
import { DisciplinesSeed } from "../src/seeds/diciplines-seed.js";
import { StudentsSeed } from "../src/seeds/students-seed.js";

describe("Class Room", () => {
  const inMemoryDisciplinesRepository = new InMemoryDisciplinesRepository();
  const inMemoryStudentsRepository = new InMemoryStudentsRepository();

  beforeAll(() => {
    const disciplines = DisciplinesSeed.execute();
    for (let discipline of disciplines) {
      inMemoryDisciplinesRepository.save(discipline);
    }

    const students = StudentsSeed.execute();
    for (let student of students) {
      inMemoryStudentsRepository.save(student);
    }
  });

  it("should be able create a new class room", () => {
    const discipline = DisciplineFactory.make({ name: "Discipline Test" });
    const classRoom = ClassRoomFactory.make({ discipline: discipline });
    expect(classRoom.getDiscipline()).toEqual(
      expect.objectContaining({ name: discipline.name })
    );
  });

  it("should be able add a student to a class room", () => {
    const classRoom = ClassRoomFactory.make({
      discipline: inMemoryDisciplinesRepository.findAll()[0],
    });

    classRoom.addStudent(inMemoryStudentsRepository.findAll()[0]);
    classRoom.addStudent(inMemoryStudentsRepository.findAll()[1]);
    classRoom.addStudent(inMemoryStudentsRepository.findAll()[2]);

    expect(classRoom.getStudents()).toHaveLength(3);
  });
});
