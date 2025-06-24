import { Discipline } from "../src/entities/discipline.js";
import { InMemoryDisciplinesRepository } from "../src/database/repositories/in-memory/in-memory-disciplines-repository.js";
import { Seed } from "../src/database/repositories/in-memory/seeds/seed.js";
import { Workload } from "@src/entities/workload.js";
import { randomUUID } from "node:crypto";

describe("Disciplines", () => {
  const inMemoryDisciplinesRepository = new InMemoryDisciplinesRepository();

  beforeAll(async () => {
    // const { disciplines } = await new Seed().execute();
    // inMemoryDisciplinesRepository.disciplines = disciplines;
  });

  it("should be able create a new discipline", () => {
    // const discipline = DisciplineFactory.make({ name: "Discipline" });
    const id = randomUUID();
    const discipline = new Discipline({
      id,
      shortId: "3391",
      name: "Discipline",
      isRequired: true,
      workload: new Workload(32, 32),
      period: 1,
      prerequisiteId: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    expect(discipline).toEqual(expect.objectContaining({ name: "Discipline" }));
    expect(discipline).toHaveProperty("id");
    expect(discipline).toEqual(expect.objectContaining({ id }));
  });

  //   it("should be able to find a discipline by name", () => {
  //     const disciplineFilter =
  //       inMemoryDisciplinesRepository.findByName("fundamento");

  //     expectTypeOf(disciplineFilter)
  //       .extract<unknown[]>()
  //       .toEqualTypeOf<Discipline[]>();
  //   });

  //   it("should be able to find a discipline by shortId", () => {
  //     const disciplineFilter = inMemoryDisciplinesRepository.findByShortId(3391);

  //     expect(disciplineFilter).toBeDefined();
  //     expect(disciplineFilter?.getId()).toEqual(expect.any(String));
  //   });

  //   it("should be able attch a prerequisite to a discipline", () => {
  //     const disciplinePreRequisites = DisciplineFactory.make({
  //       name: "PreRequisite Discipline",
  //     });
  //     const discipline = DisciplineFactory.make({
  //       name: "Discipline",
  //       prerequisites: disciplinePreRequisites,
  //     });

  //     expect(discipline.prerequisites).toEqual(disciplinePreRequisites);
  //   });
});
