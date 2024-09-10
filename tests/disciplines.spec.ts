import { Discipline } from "../src/entities/discipline.js";
import { DisciplineFactory } from "../src/factories/discipline-factory.js";
import { InMemoryDisciplinesRepository } from "../src/repositories/in-memory-disciplines-repository.js";
import { DisciplinesSeed } from "../src/seeds/diciplines-seed.js";

describe("Disciplines", () => {
  const inMemoryDisciplinesRepository = new InMemoryDisciplinesRepository();

  beforeAll(() => {
    const disciplines = DisciplinesSeed.execute();
    for (let discipline of disciplines) {
      inMemoryDisciplinesRepository.save(discipline);
    }
  });

  it("should be able create a new discipline", () => {
    const discipline = DisciplineFactory.make({ name: "Discipline" });
    expect(discipline).toEqual(expect.objectContaining({ name: "Discipline" }));
  });

  it("should be able to find a discipline by name", () => {
    const disciplineFilter =
      inMemoryDisciplinesRepository.findByName("fundamento");

    expectTypeOf(disciplineFilter)
      .extract<unknown[]>()
      .toEqualTypeOf<Discipline[]>();
  });

  it("should be able to find a discipline by shortId", () => {
    const disciplineFilter = inMemoryDisciplinesRepository.findByShortId(3391);

    expect(disciplineFilter).toBeDefined();
    expect(disciplineFilter?.getId()).toEqual(expect.any(String));
  });

  it("should be able attch a prerequisite to a discipline", () => {
    const disciplinePreRequisites = DisciplineFactory.make({
      name: "PreRequisite Discipline",
    });
    const discipline = DisciplineFactory.make({
      name: "Discipline",
      prerequisites: disciplinePreRequisites,
    });

    expect(discipline.prerequisites).toEqual(disciplinePreRequisites);
  });
});
